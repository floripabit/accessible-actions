import type { RequestHandler } from './$types';
import { OPENAI_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

const OPENAI_BASE_URL = new URL("https://api.openai.com/v1/completions");
const OPANAI_BASE_MODEL = "text-davinci-003";

export const POST: RequestHandler = async ({ request, fetch }) => {
  const base = await request?.json();
  const openAIBody = {
    prompt: base.prompt,
    model: OPANAI_BASE_MODEL,
    max_tokens: 50,
  }
  const response = await fetch(OPENAI_BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(openAIBody)
  });
  const responseBody = await response.json();

  return json(responseBody);
}