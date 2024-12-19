'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { TopDock, CornerButtons } from '@/components/FloatingUI'
import DashboardLayout from '@/components/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Bell, Camera, Wifi, MapPin, FileText, Maximize2 } from 'lucide-react'

const Globe3D = dynamic(() => import('@/components/Globe3D'), { ssr: false })

export default function DashboardContent() {
  return (
    <DashboardLayout>
      <div className="relative w-full h-screen bg-gray-900">
        <Suspense fallback={<div>Loading...</div>}>
          <Globe3D />
        </Suspense>
        <div className="absolute inset-0 pointer-events-none z-50">
          <TopDock className="pointer-events-auto" />
          <CornerButtons />
        </div>
        <div className="absolute inset-0 overflow-auto pointer-events-auto">
          <div className="container mx-auto p-4 pt-20 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Real-Time Alerts</CardTitle>
                  <Bell className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">Active alerts</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Cameras</CardTitle>
                  <Camera className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">Devices online</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Signal Tracking</CardTitle>
                  <Wifi className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,423</div>
                  <p className="text-xs text-muted-foreground">Connected signals</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Event Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-muted rounded-md flex items-center justify-center">
                      Charts and Graphs Placeholder
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-4">
                        <Alert>
                          <AlertTitle>Suspicious Activity Detected</AlertTitle>
                          <AlertDescription>
                            Unusual movement pattern in Sector B
                          </AlertDescription>
                        </Alert>
                        <Alert>
                          <AlertTitle>New Device Connected</AlertTitle>
                          <AlertDescription>
                            Unregistered device detected in network
                          </AlertDescription>
                        </Alert>
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>User Quick Panel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button>
                    <MapPin className="mr-2 h-4 w-4" /> Maps
                  </Button>
                  <Button>
                    <FileText className="mr-2 h-4 w-4" /> Reports
                  </Button>
                  <Button>
                    <Maximize2 className="mr-2 h-4 w-4" /> Multi-Screen Mode
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

