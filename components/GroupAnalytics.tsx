"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { time: '00:00', gazeTime: 4, dwellTime: 2, avgSentiment: 0.6 },
  { time: '04:00', gazeTime: 3, dwellTime: 1, avgSentiment: 0.4 },
  { time: '08:00', gazeTime: 5, dwellTime: 3, avgSentiment: 0.7 },
  { time: '12:00', gazeTime: 7, dwellTime: 4, avgSentiment: 0.8 },
  { time: '16:00', gazeTime: 6, dwellTime: 3, avgSentiment: 0.6 },
  { time: '20:00', gazeTime: 4, dwellTime: 2, avgSentiment: 0.5 },
]

export function GroupAnalytics() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Group Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select defaultValue="gazeTime">
            <SelectTrigger>
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gazeTime">Gaze Time</SelectItem>
              <SelectItem value="dwellTime">Dwell Time</SelectItem>
              <SelectItem value="avgSentiment">Average Sentiment</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="gazeTime" stroke="#8884d8" />
            <Line type="monotone" dataKey="dwellTime" stroke="#82ca9d" />
            <Line type="monotone" dataKey="avgSentiment" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

