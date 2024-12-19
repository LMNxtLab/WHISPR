"use client"

import { useState } from 'react'

export default function SpatialPreview() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="w-full h-full relative">
      <iframe
        title="Baseball Stadium"
        className="w-full h-full"
        src="https://sketchfab.com/models/843246f5b7d14d6a8888e048acab1853/embed?autostart=1&ui_controls=1&ui_infos=1&ui_inspector=1&ui_stop=1&ui_watermark=1&ui_watermark_link=1"
        onLoad={() => setIsLoaded(true)}
        style={{ border: 0 }}
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  )
}

