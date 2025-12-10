"use client"

import { useState, useEffect } from "react"
import { TaskInput } from "@/components/task-input"
import { TaskList } from "@/components/task-list"

export interface Task {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

export default function Home() {
  // Initialize with empty array to match server-side render
  const [tasks, setTasks] = useState<Task[]>([])

  // Load tasks from localStorage after component mounts on client
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks")
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
    }
    const updatedTasks = [newTask, ...tasks]
    setTasks(updatedTasks)
    // Put the task on local storage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
  }

  const toggleTask = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)

    // Update the task in local storage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
  }

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)

    // Remove the task from local storage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
  }

  const completedCount = tasks.filter((task) => task.completed).length

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-balance">Tasks</h1>
          <p className="mt-2 text-muted-foreground">
            {completedCount} of {tasks.length} completed
          </p>
        </div>

        {/* Input */}
        <div className="mb-8">
          <TaskInput onAdd={addTask} />
        </div>

        {/* Task List */}
        {tasks.length === 0 ? (
          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <p className="text-muted-foreground">No tasks yet. Add one to get started.</p>
          </div>
        ) : (
          <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        )}
      </div>
    </main>
  )
}
