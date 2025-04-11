
import React from 'react';
import Header from '@/components/Header';
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';
import { useTodos } from '@/hooks/useTodos';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <TodoForm onAddTodo={addTodo} />
            <TodoList 
              todos={todos} 
              onToggleTodo={toggleTodo} 
              onDeleteTodo={deleteTodo} 
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
