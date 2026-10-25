export type Answers = { business: string; intent: string; products: string[]; difficulty: string; frequency: string; volume: string; pilot: string };
export const emptyAnswers: Answers = {business:'',intent:'',products:[],difficulty:'',frequency:'',volume:'',pilot:''};
export const sellers = ['farmer','cooperative','producer'];
export const role = (a: Answers) => a.intent || (sellers.includes(a.business) ? 'sell' : 'buy');
export function setAnswer(a: Answers, field: keyof Answers, value: string | string[]): Answers {
 const next={...a,[field]:value};
 if(field==='business') {next.intent='';next.difficulty='';}
 if(field==='intent'&&value!==a.intent) next.difficulty='';
 return next;
}
export const volumes: Record<string,number> = {under1000:0,from1000:1000,from5000:5000,over20000:20000,skip:0};
export function csv(rows: Record<string,unknown>[]) {
 const keys=['created_at','business','intent','products','difficulty','frequency','volume','pilot','name','company','email','phone','locality','consent_at','privacy_version'];
 const cell=(v:unknown)=>'"'+String(Array.isArray(v)?v.join(' | '):v??'').replace(/^[=+@\-\t\r]/,"'$&").replace(/"/g,'""')+'"';
 return '\uFEFF'+[keys.map(cell).join(','),...rows.map(r=>keys.map(k=>cell(r[k])).join(','))].join('\r\n');
}
