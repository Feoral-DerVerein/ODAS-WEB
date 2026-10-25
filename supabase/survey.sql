-- Ejecutar en el editor SQL de Supabase. No se exponen claves privadas.
begin;
create table if not exists public.survey_admins(user_id uuid primary key references auth.users(id) on delete cascade);
alter table public.survey_admins enable row level security;
revoke all on public.survey_admins from anon, authenticated;
create or replace function public.is_survey_admin() returns boolean language sql stable security definer set search_path=public as $$select exists(select 1 from public.survey_admins where user_id=auth.uid())$$;
revoke all on function public.is_survey_admin() from public;
grant execute on function public.is_survey_admin() to authenticated;
create table if not exists public.survey_responses(
 id uuid primary key,created_at timestamptz not null default now(),language text not null check(language in ('es','ca')),
 business text not null check(business in ('farmer','cooperative','producer','hotel','restaurant','catering','retail','distributor','other')),
 intent text not null check(intent in ('sell','buy','both')),
 products text[] not null check(cardinality(products) between 1 and 6 and products <@ array['produce','meat','dairy','oilwine','grains','other']),
 difficulty text not null,frequency text not null check(frequency in ('daily','several','weekly','occasional')),
 volume text not null check(volume in ('under1000','from1000','from5000','over20000','skip')),
 pilot text not null check(pilot in ('yes','info','no')),
 name text not null check(length(trim(name)) between 1 and 160),company text not null check(length(trim(company)) between 1 and 160),
 email text not null check(length(email)<=254 and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),phone text check(length(phone)<=160),
 locality text not null check(length(trim(locality)) between 1 and 160),consent_at timestamptz not null default now(),privacy_version text not null default '2026-10-25',
 check((intent='sell' and difficulty in ('new_buyers','prices','surplus','orders','transport')) or (intent='buy' and difficulty in ('local','prices','centralize','delivery','availability')) or (intent='both' and difficulty in ('new_buyers','prices','surplus','orders','transport','local','centralize','delivery','availability')))
);
alter table public.survey_responses enable row level security;
revoke all on public.survey_responses from anon,authenticated;
grant select on public.survey_responses to authenticated;
create policy "Only survey admins may read" on public.survey_responses for select to authenticated using(public.is_survey_admin());
create or replace function public.submit_survey(payload jsonb) returns void language plpgsql security definer set search_path=public as $$
begin
 if payload->>'consent' is distinct from 'true' then raise exception 'Consent required';end if;
 insert into public.survey_responses(id,language,business,intent,products,difficulty,frequency,volume,pilot,name,company,email,phone,locality)
 values((payload->>'id')::uuid,payload->>'language',payload->>'business',payload->>'intent',array(select jsonb_array_elements_text(payload->'products')),payload->>'difficulty',payload->>'frequency',payload->>'volume',payload->>'pilot',payload->>'name',payload->>'company',lower(payload->>'email'),payload->>'phone',payload->>'locality') on conflict(id) do nothing;
end $$;
revoke all on function public.submit_survey(jsonb) from public;
grant execute on function public.submit_survey(jsonb) to anon;
commit;
-- Crear el usuario administrador desde Authentication > Users y después:
-- insert into public.survey_admins(user_id) values ('UUID-DEL-USUARIO');
