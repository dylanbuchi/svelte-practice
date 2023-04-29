import type { Todos } from "./todos.model";
import { v4 as uuid } from "uuid";

const todos: Todos[] = [
  { id: uuid(), title: "Title", text: "Todo", done: false },
  { id: uuid(), title: "Title 2", text: "Todo 2", done: false },
  { id: uuid(), title: "Title 3", text: "Todo 3", done: true },
];

export const getTodos = () => {
  return JSON.parse(JSON.stringify(todos)) as Todos[];
};
