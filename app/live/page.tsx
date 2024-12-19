"use client"

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { VideoFeedGrid } from '@/components/VideoFeedGrid'
import { SignalTrackingPanel } from '@/components/SignalTrackingPanel'
import { SplitScreenView } from '@/components/SplitScreenView'
import { Button } from "@/components/ui/button"
import { Maximize2 } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function LivePage() {
  const [isSplitScreen, setIsSplitScreen] = useState(false)

  return (
    <DashboardLayout>
      <div className="relative w-full h-screen bg-background pt-4">
        <div className="absolute inset-0 overflow-auto pointer-events-auto">
          <div className="container mx-auto p-4 space-y-6">
            <div className="flex justify-between items-center mb-6">
              <Card className="flex-grow mr-4">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Live Monitoring</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Button onClick={() => setIsSplitScreen(!isSplitScreen)}>
                    <Maximize2 className="mr-2 h-4 w-4" />
                    {isSplitScreen ? 'Exit' : 'Enter'} Split Screen
                  </Button>
                </CardHeader>
              </Card>
            </div>
            {isSplitScreen ? (
              <SplitScreenView />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <VideoFeedGrid />
                </div>
                <div>
                  <SignalTrackingPanel />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

