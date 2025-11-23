<script lang="ts">
  import { onMount } from 'svelte';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  export let math: string;

  let el: HTMLSpanElement;

  onMount(() => {
    katex.render(math, el, {
      throwOnError: false,
      displayMode: false
    });
  });
</script>

<span bind:this={el}></span>
