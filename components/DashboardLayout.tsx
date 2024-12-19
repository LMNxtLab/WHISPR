import React from 'react'
import { ThemeToggle } from "@/components/ThemeToggle"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex-1 overflow-auto">
        {children}
        <ThemeToggle />
      </div>
    </div>
  )
}

