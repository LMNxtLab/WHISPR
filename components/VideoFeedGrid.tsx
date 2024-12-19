import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Expand } from 'lucide-react'

interface CameraFeed {
  id: string
  name: string
  url: string
}

const dummyCameras: CameraFeed[] = [
  { id: '1', name: 'Camera 1', url: '/placeholder.svg?height=200&width=300' },
  { id: '2', name: 'Camera 2', url: '/placeholder.svg?height=200&width=300' },
  { id: '3', name: 'Camera 3', url: '/placeholder.svg?height=200&width=300' },
  { id: '4', name: 'Camera 4', url: '/placeholder.svg?height=200&width=300' },
]

export function VideoFeedGrid() {
  const [hoveredCamera, setHoveredCamera] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {dummyCameras.map((camera) => (
        <Card 
          key={camera.id}
          className="relative"
          onMouseEnter={() => setHoveredCamera(camera.id)}
          onMouseLeave={() => setHoveredCamera(null)}
        >
          <CardContent className="p-2">
            <img src={camera.url} alt={camera.name} className="w-full h-auto" />
            {hoveredCamera === camera.id && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <Dialog>
                  <DialogTrigger>
                    <Expand className="text-white w-8 h-8" />
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img src={camera.url} alt={camera.name} className="w-full h-auto" />
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

