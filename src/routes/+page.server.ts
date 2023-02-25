import type { Actions, PageServerLoad } from './$types';

const OPENAI_API = '/api/openai';

export const load: PageServerLoad = async ({ fetch }) => {
    //TODO: 
    return { };
}

export const actions = {
    getChatGPTAnswer: async ({ request, fetch }) => {
        const data = await request.formData();
        const prompt = data.get('prompt')?.toString() || "";
        const openAIresponse = await fetch(OPENAI_API, {
            method: 'POST',
            body: JSON.stringify({ prompt })
        });
        const resp = await openAIresponse.json();
        return { generatedText: resp.choices[0].text };
    }
} satisfies Actions;