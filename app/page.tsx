"use client"

import { useState, useEffect } from "react"
import { TaskInput } from "@/components/task-input"
import { TaskList } from "@/components/task-list"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      </div>
      <div className="mx-auto max-w-2xl px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-balance">Tasks</h1>
            <p className="mt-2 text-muted-foreground">
              {completedCount} of {tasks.length} completed
            </p>
          </div>
          <Button asChild>
            <Link
              href="/about"
            >
              Kelompok
            </Link>
          </Button>
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
