"use client"

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { DigitalTwinMap } from '@/components/DigitalTwinMap'
import { CrowdMovementAnalysis } from '@/components/CrowdMovementAnalysis'
import { HoveringMenu } from '@/components/HoveringMenu'
import { Button } from "@/components/ui/button"
import { MonitorUp } from 'lucide-react'

export default function SpatialPage() {
  const [view, setView] = useState<'digital-twin' | 'crowd-movement'>('digital-twin')
  const [isFullScreen, setIsFullScreen] = useState(false)

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  }

  return (
    <DashboardLayout>
      <div className="relative w-full h-screen bg-background pt-14">
        <div className="absolute inset-0">
          <div className="h-full flex flex-col md:flex-row">
            <div className="flex-1 relative">
              {view === 'digital-twin' ? <DigitalTwinMap /> : <CrowdMovementAnalysis />}
              <HoveringMenu />
            </div>
            <div className="w-full md:w-64 bg-gray-800 p-4 flex flex-col space-y-4">
              <Button onClick={() => setView('digital-twin')} variant={view === 'digital-twin' ? 'default' : 'outline'}>
                Digital Twin
              </Button>
              <Button onClick={() => setView('crowd-movement')} variant={view === 'crowd-movement' ? 'default' : 'outline'}>
                Crowd Movement
              </Button>
              <Button onClick={toggleFullScreen}>
                <MonitorUp className="mr-2 h-4 w-4" />
                {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

