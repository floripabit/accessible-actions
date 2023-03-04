<script lang="ts">
    import OutClick from 'svelte-outclick';

    export let items: Array<string> = [''];
    let selectedIndex: number = -1;

    function handleAdd(keyEv?: KeyboardEvent) {
        if (keyEv && 
            keyEv.key !== 'Enter') {
            return;
        }
        items.push('');
        items = items; // required for re-hydratation
    }
    function handleRemove(index: number) {
        if (index < 0) {
            return;
        }
        items = items.filter((value, i) => i !== index);
        items = items;
    }
</script>
  
<OutClick  on:outclick={() => selectedIndex = -1}>
    <div class="list-wrapper">
        {#each items as item, i}
            <div class={i === selectedIndex ? 'item-active' : ''}>
                <input type="input" bind:value={item} on:click={() => selectedIndex = i}
                    on:focus={() => selectedIndex = i} on:keypress={(keyEv) => handleAdd(keyEv)}>
            </div>
        {/each}
    </div>
    <div class="list-controllers">
        <button on:click={() => handleAdd()}>Add</button>
        <button on:click={() => handleRemove(selectedIndex)}>Remove</button>
    </div>
</OutClick>

<style>
    .list-wrapper {
        display: flex;
        flex-direction: column;
    }
    .list-controllers {
        display: flex;
        flex-direction: row;
    }
    .item-active {
        background-color: aqua;
    }
</style>