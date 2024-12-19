"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface DemographicsChartProps {
  title: string
  data: {
    past: { name: string; value: number }[];
    present: { name: string; value: number }[];
    predicted: { name: string; value: number }[];
  }
}

export function DemographicsChart({ title, data }: DemographicsChartProps) {
  const [activeTab, setActiveTab] = useState('present')

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="present">Present</TabsTrigger>
            <TabsTrigger value="predicted">Predicted</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data[activeTab as keyof typeof data]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

