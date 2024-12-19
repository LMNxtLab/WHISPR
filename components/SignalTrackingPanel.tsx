import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Toggle } from "@/components/ui/toggle"
import { Wifi, Bluetooth } from 'lucide-react'

export function SignalTrackingPanel() {
  const [activeLayer, setActiveLayer] = useState<'signal' | 'behavior'>('signal')

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Signal Tracking</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Wifi className="text-blue-500" />
              <span>WiFi Signals: 152</span>
            </div>
            <div className="flex items-center space-x-2">
              <Bluetooth className="text-blue-500" />
              <span>Bluetooth Signals: 87</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <Toggle
              pressed={activeLayer === 'signal'}
              onPressedChange={() => setActiveLayer('signal')}
            >
              Devices by Signal
            </Toggle>
            <Toggle
              pressed={activeLayer === 'behavior'}
              onPressedChange={() => setActiveLayer('behavior')}
            >
              Devices by Behavior
            </Toggle>
          </div>
          <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">
            Map Placeholder: {activeLayer === 'signal' ? 'Signal Strength' : 'Behavior Patterns'}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

