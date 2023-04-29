<script lang="ts">
  import { v4 as uuid } from "uuid";

  interface Todos {
    id: string;
    title: string;
    text: string;
    done: boolean;
  }

  let title = "";
  let text = "";

  let todos: Todos[] = [
    { id: uuid(), title: "Title", text: "Todo", done: false },
    { id: uuid(), title: "Title 2", text: "Todo 2", done: false },
    { id: uuid(), title: "Title 3", text: "Todo 3", done: true },
  ];

  function getButtonLabel(done: boolean) {
    return `Mark as ${done ? "incomplete" : "completed"}`;
  }

  function handleSubmit() {
    if (!text || !title) return alert("Text and title can't be empty");
    todos = [{ id: uuid(), title, text, done: false }, ...todos];
  }
</script>

<div class="container">
  <form>
    <label for="title">
      Title
      <input type="text" name="value" bind:value={title} /></label
    >
    <label for="text"
      >Text
      <input type="text" name="value" bind:value={text} /></label
    >
    <button on:click|preventDefault={handleSubmit} type="submit"
      >Add Todo</button
    >
  </form>
  <ul>
    {#each todos as todo (todo.id)}
      <li>
        <div class={todo.done ? "done" : ""}>
          <h1>{todo.text}</h1>
          <h2>{todo.text}</h2>
          <button
            on:click={() => {
              todo.done = !todo.done;
            }}>{getButtonLabel(todo.done)}</button
          >
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }

  div {
    flex-grow: 1;
    padding: 10px;
  }

  h1 {
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 5px;
  }

  h2 {
    font-size: 16px;
    color: #666;
    margin-top: 0;
    margin-bottom: 5px;
  }

  button {
    background-color: #fff;
    border: none;
    cursor: pointer;
    padding: 10px;
    color: #333;
    font-weight: bold;
  }

  button:hover {
    background-color: #eee;
  }

  button:active {
    background-color: #fff;
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
  }

  .done {
    text-decoration-line: line-through;
    color: #999;
  }
</style>
