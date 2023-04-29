<svelte:options immutable />

<script lang="ts">
  import { v4 as uuid } from "uuid";
  import TodoList from "./lib/todos/TodoList.svelte";
  import { getTodos } from "./lib/todos/todos.constants";

  let todos = getTodos();

  function addTodo(event: CustomEvent) {
    const title = event.detail.title;
    const text = event.detail.text;

    todos = [{ id: uuid(), title, text, done: false }, ...todos];
  }

  function removeTodo(event: CustomEvent) {
    const id = event.detail.id;
    todos = todos.filter((item) => item.id !== id);
  }
</script>

<TodoList {todos} on:addTodo={addTodo} on:removeTodo={removeTodo} />
