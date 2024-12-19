import { AuthWrapper } from '@/components/AuthWrapper'
import DashboardLayout from '@/components/DashboardLayout'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useDashboardStore } from '@/stores/dashboardStore'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const SpatialPreview = dynamic(() => import('@/components/SpatialPreview'), { ssr: false })

export default function DashboardPage() {
  const { activeCameras, totalVisitors, lastUpdate } = useDashboardStore()

  return (
    <AuthWrapper>
      <DashboardLayout>
        <div className="p-6 pt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Dashboard</CardTitle>
            </CardHeader>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Current active cameras: {activeCameras}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Crowd Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Total visitors today: {totalVisitors}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Data Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Last update: {lastUpdate.toLocaleTimeString()}</p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Spatial View</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/spatial">
                  View Full <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <Suspense fallback={<div className="w-full h-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
                </div>}>
                  <SpatialPreview />
                </Suspense>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    </AuthWrapper>
  )
}

