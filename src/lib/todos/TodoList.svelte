<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Todos } from "./todos.model";

  export let todos: Todos[];

  let title = "";
  let text = "";

  function getButtonLabel(done: boolean) {
    return `Mark as ${done ? "incomplete" : "completed"}`;
  }

  function resetInputs() {
    title = "";
    text = "";
  }

  const dispatch = createEventDispatcher();

  function handleSubmit() {
    if (!text || !title) return alert("Text and title can't be empty");

    dispatch("addTodo", {
      title,
      text,
    });

    resetInputs();
  }

  function handleRemoveTodo(id: string) {
    dispatch("removeTodo", {
      id,
    });
  }

  function handleToggleTodoIsDone(id: string) {
    dispatch("toggleTodoIsDone", {
      id,
    });
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
    <button class="primary" on:click|preventDefault={handleSubmit} type="submit"
      >Add Todo</button
    >
  </form>
  <ul class="todos">
    {#each todos as todo (todo.id)}
      <li>
        <div class={todo.done ? "done" : ""}>
          <h1>{todo.text}</h1>
          <h2>{todo.text}</h2>
        </div>
        <button on:click={() => handleToggleTodoIsDone(todo.id)}
          >{getButtonLabel(todo.done)}
        </button>
        <button class="danger" on:click={() => handleRemoveTodo(todo.id)}
          >Delete
        </button>
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
    opacity: 0.75;
  }

  button:active {
    opacity: 1;
  }

  .todos > li > button + .danger {
    margin-left: 1rem;
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
  }

  .done {
    text-decoration-line: line-through;
    color: #999;
  }

  .danger {
    background: rgb(188, 46, 46);
    color: white;
  }

  .primary {
    background: rgb(50, 65, 198);
    color: white;
  }
</style>
