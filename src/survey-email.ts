export const ODAS_EMAIL_ENDPOINT = 'https://formsubmit.co/ajax/f75fc4a3cd51b3f6d7c2b8f3a80ce3c5';
export function isEmailEndpoint(endpoint?: string): boolean {
 return endpoint === ODAS_EMAIL_ENDPOINT || endpoint === 'https://formsubmit.co/ajax/hello@odas-eu.com';
}
export class SurveyEmailError extends Error {
 constructor(public code: 'activation'|'timeout'|'network'|'rejected') { super(code); }
}
export async function sendSurveyEmail(endpoint: string, body: URLSearchParams, request: typeof fetch = fetch): Promise<void> {
 if (!isEmailEndpoint(endpoint)) throw new SurveyEmailError('rejected');
 // Reuse the form that has already been activated for the main ODAS website.
 const payload = new URLSearchParams(body);
 payload.set('_url', 'https://www.odas-eu.com/');
 const controller = new AbortController();
 const timer = setTimeout(() => controller.abort(), 20000);
 try {
  const response = await request(ODAS_EMAIL_ENDPOINT, {
   method: 'POST', headers: {Accept: 'application/json'}, body: payload,
   referrerPolicy: 'origin', signal: controller.signal
  });
  const result = await response.json().catch(() => null);
  if (!response.ok || !(result?.success === true || result?.success === 'true')) {
   throw new SurveyEmailError(/activat/i.test(result?.message || '') ? 'activation' : 'rejected');
  }
 } catch (error) {
  if (error instanceof SurveyEmailError) throw error;
  throw new SurveyEmailError(controller.signal.aborted ? 'timeout' : 'network');
 } finally { clearTimeout(timer); }
}
