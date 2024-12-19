import { Button } from "@/components/ui/button"
import { ZoomIn, ZoomOut, RotateCcw, Layers, Crosshair } from 'lucide-react'

export function HoveringMenu() {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white p-2 rounded-full flex space-x-2">
      <Button variant="ghost" size="icon">
        <ZoomIn className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <ZoomOut className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <RotateCcw className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Layers className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Crosshair className="h-4 w-4" />
      </Button>
    </div>
  )
}

