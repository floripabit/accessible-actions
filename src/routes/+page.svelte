<script lang="ts">
    import type { ActionData } from './$types';
    import { createEventDispatcher, onMount } from 'svelte';
    
    let prompt = "";
    export let form: ActionData;
    const dispatch = createEventDispatcher();

    let recognizing = false;
    let recognition = null;
;

    function startRecognition() {
        console.log('startinggg');
        if (!recognizing) {
        //recognition = new webkitwebkitSpeechRecognition();
        const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.lang = 'pt-BR';
        recognition.continuous = true;
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            console.log('oiiii Result');
            console.log(transcript);
            dispatch('recognized', { transcript });
        };
        recognition.onend = () => {
            console.log('on End');
            recognizing = false;
        };
        recognition.onerror = (event) => {
            console.error(event.error);
            console.error(event);
        };
        recognition.start();
        console.log('oiiii');
        recognizing = true;
        }
    }

    function stopRecognition() {
        console.log('parei!');
        if (recognizing) {
            recognition.stop();
            recognizing = false;
        }
    }

    onMount(() => {
        if (!('webkitSpeechRecognition' in window)) {
        console.warn('Speech recognition not available');
        }
        const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
        recognition = new SpeechRecognition();
    });
</script>
  
<form method="POST" action="?/getChatGPTAnswer">
    <label for="prompt">Peça qual ação você quer que o software realize:</label>
    <input type="text" name="action-request" bind:value={prompt}>
    <button type="submit">Veja a key escolhida!</button>
</form>

{#if form?.generatedText}
    <p>{form?.generatedText}</p>
{/if}


<button on:click={startRecognition}>Start</button>
<button on:click={stopRecognition}>Stop</button>





