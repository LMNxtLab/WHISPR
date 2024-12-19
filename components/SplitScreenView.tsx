import { VideoFeedGrid } from './VideoFeedGrid'
import { GeoViewMap } from './GeoViewMap'

export function SplitScreenView() {
  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="w-full md:w-1/2 p-4">
        <VideoFeedGrid />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <GeoViewMap />
      </div>
    </div>
  )
}

