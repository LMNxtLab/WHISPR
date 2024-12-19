import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function GeoViewMap() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Real-time GeoView Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[calc(100vh-12rem)] bg-gray-100 rounded-md flex items-center justify-center">
          GeoView Map Placeholder
        </div>
      </CardContent>
    </Card>
  )
}

