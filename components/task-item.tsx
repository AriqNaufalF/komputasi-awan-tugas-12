"use client"

import type { Task } from "@/app/page"
import { Button } from "@/components/ui/button"
import { Trash2, Check } from "lucide-react"

interface TaskItemProps {
  task: Task
  onToggle: () => void
  onDelete: () => void
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-card/80">
      <button
        onClick={onToggle}
        className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
          task.completed ? "bg-primary border-primary" : "border-muted-foreground hover:border-primary"
        }`}
        aria-label={task.completed ? "Mark incomplete" : "Mark complete"}
      >
        {task.completed && <Check className="h-4 w-4 text-primary-foreground" />}
      </button>

      <span
        className={`flex-1 transition-all ${task.completed ? "line-through text-muted-foreground" : "text-foreground"}`}
      >
        {task.text}
      </span>

      <Button
        variant="ghost"
        size="sm"
        onClick={onDelete}
        className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
        aria-label="Delete task"
      >
        <Trash2 className="h-4 w-4" />
        <span className="sr-only">Delete task</span>
      </Button>
    </div>
  )
}
