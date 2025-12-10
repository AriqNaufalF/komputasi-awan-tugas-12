"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

interface TaskInputProps {
  onAdd: (text: string) => void
}

export function TaskInput({ onAdd }: TaskInputProps) {
  const [value, setValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim()) {
      onAdd(value.trim())
      setValue("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        placeholder="Add a new task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1"
        aria-label="Task input"
      />
      <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground" aria-label="Add task">
        <Plus className="h-5 w-5" />
        <span className="sr-only">Add task</span>
      </Button>
    </form>
  )
}
