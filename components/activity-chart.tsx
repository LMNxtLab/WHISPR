"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"

const data = [
  { name: "Mon", value: 45 },
  { name: "Tue", value: 30 },
  { name: "Wed", value: 35 },
  { name: "Thu", value: 25 },
  { name: "Fri", value: 20 },
  { name: "Sat", value: 30 },
  { name: "Sun", value: 40 },
]

export function ActivityChart() {
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8b5cf6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

