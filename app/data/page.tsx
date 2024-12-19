"use client"

import { DataEditingTools } from '@/components/DataEditingTools'
import { ArchiveManagement } from '@/components/ArchiveManagement'
import { ExportTools } from '@/components/ExportTools'
import { ControlCenter } from '@/components/ControlCenter'
import DashboardLayout from '@/components/DashboardLayout'
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

export default function DataPage() {
  return (
    <DashboardLayout>
      <div className="relative w-full min-h-screen bg-background pt-4">
        <div className="absolute inset-0 overflow-auto pointer-events-auto">
          <div className="container mx-auto p-4 space-y-6">
            <div className="flex justify-between items-center mb-6">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Data Management</CardTitle>
                </CardHeader>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DataEditingTools />
              <ArchiveManagement />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ExportTools />
              <ControlCenter />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

