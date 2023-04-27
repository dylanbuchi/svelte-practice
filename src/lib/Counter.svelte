<script lang="ts">
  export let count = 0;
  export let maxCount = 10;

  $: message = `The count is at number: ${count}`;

  function increment() {
    count = Math.min(count + 1, maxCount);
  }

  function decrement() {
    count = Math.max(count - 1, 0);
  }

  function updateMessage(text: string) {
    message = text;
  }

  $: if (count === maxCount) {
    updateMessage(`${maxCount} is the max value`);
  }

  $: if (count === 0) {
    updateMessage(`${count} is the min value`);
  }
</script>

<main>
  <div class="container">
    <div class="counter">
      <button on:click={decrement}> -</button>
      <div>{count}</div>
      <button on:click={increment}> +</button>
      <div>{message}</div>
    </div>
  </div>
</main>

<main><div /></main>

<style>
  button {
    cursor: pointer;
    margin-inline: 1rem;
    padding: 0.2rem 0.8rem;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .counter {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
