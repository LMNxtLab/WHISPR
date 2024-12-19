"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SentimentHeatmap() {
  const [selectedView, setSelectedView] = useState('geoview')

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Sentiment Heatmap</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select value={selectedView} onValueChange={setSelectedView}>
            <SelectTrigger>
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="geoview">GeoView</SelectItem>
              <SelectItem value="digitaltwin">Digital Twin</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          {selectedView === 'geoview' ? (
            <p>GeoView Sentiment Heatmap Placeholder</p>
          ) : (
            <p>Digital Twin Sentiment Heatmap Placeholder</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

