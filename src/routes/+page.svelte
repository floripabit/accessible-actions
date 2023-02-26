<script lang="ts">
    import type { ActionData } from './$types';
    
    let prompt = "";
    export let form: ActionData;
</script>
  
<form method="POST" action="?/getChatGPTAnswer">
    <label for="prompt">Peça qual ação você quer que o software realize:</label>
    <input type="text" name="action-request" bind:value={prompt}>
    <button type="submit">Veja a key escolhida!</button>
</form>

{#if form?.generatedText}
    <p>{form?.generatedText}</p>
{/if}