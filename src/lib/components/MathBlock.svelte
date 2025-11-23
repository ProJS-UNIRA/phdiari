<script lang="ts">
  import { onMount } from 'svelte';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  export let math: string;
  export let display: boolean = true;

  let el: HTMLSpanElement;

  onMount(() => {
    katex.render(math, el, {
      throwOnError: false,
      displayMode: display
    });
  });
</script>

<span bind:this={el}></span>
