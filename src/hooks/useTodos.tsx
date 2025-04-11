import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL + "/todos";

export function useTodos() {
  const [todos, setTodos] = useState<any[]>([]);

  const fetchTodos = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTodos(data);
  };

  const addTodo = async (title: string) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = async (id: number) => {
    const target = todos.find((t) => t.id === id);
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !target.completed }),
    });
    const updated = await res.json();
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? updated : t))
    );
  };

  const deleteTodo = async (id: number) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { todos, addTodo, toggleTodo, deleteTodo };
}
