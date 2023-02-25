<script lang="ts">
    import type { ActionData } from './$types';
    
    let prompt = "";
    export let form: ActionData;
</script>
  
<form method="POST" action="?/getChatGPTAnswer">
    <label for="prompt">Enter a prompt:</label>
    <input type="text" name="prompt" bind:value={prompt}>
    <button type="submit">Generate text</button>
</form>

{#if form?.generatedText}
    <p>{form?.generatedText}</p>
{/if}