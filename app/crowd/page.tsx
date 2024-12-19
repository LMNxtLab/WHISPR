"use client"

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { DemographicsChart } from '@/components/DemographicsChart'
import { SentimentHeatmap } from '@/components/SentimentHeatmap'
import { GroupAnalytics } from '@/components/GroupAnalytics'
import { ReportExport } from '@/components/ReportExport'
import { AddChartModal } from '@/components/AddChartModal'
import { Slider } from "@/components/ui/slider"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BarChart, LineChart, PieChart, AreaChart, ScatterChart, RadarChart, Bar, Line, Pie, Area, Scatter, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const ageData = {
  past: [
    { name: '0-18', value: 15 },
    { name: '19-30', value: 30 },
    { name: '31-50', value: 35 },
    { name: '51+', value: 20 },
  ],
  present: [
    { name: '0-18', value: 20 },
    { name: '19-30', value: 35 },
    { name: '31-50', value: 30 },
    { name: '51+', value: 15 },
  ],
  predicted: [
    { name: '0-18', value: 25 },
    { name: '19-30', value: 40 },
    { name: '31-50', value: 25 },
    { name: '51+', value: 10 },
  ],
}

const genderData = {
  past: [
    { name: 'Male', value: 55 },
    { name: 'Female', value: 45 },
  ],
  present: [
    { name: 'Male', value: 52 },
    { name: 'Female', value: 48 },
  ],
  predicted: [
    { name: 'Male', value: 50 },
    { name: 'Female', value: 50 },
  ],
}

const ethnicityData = {
  past: [
    { name: 'Caucasian', value: 60 },
    { name: 'African', value: 15 },
    { name: 'Asian', value: 20 },
    { name: 'Other', value: 5 },
  ],
  present: [
    { name: 'Caucasian', value: 55 },
    { name: 'African', value: 18 },
    { name: 'Asian', value: 22 },
    { name: 'Other', value: 5 },
  ],
  predicted: [
    { name: 'Caucasian', value: 50 },
    { name: 'African', value: 20 },
    { name: 'Asian', value: 25 },
    { name: 'Other', value: 5 },
  ],
}

const renderChart = (chart: any) => {
    const data = [
      { name: 'A', value: 100, value2: 200, value3: 300, value4: 400 },
      { name: 'B', value: 200, value2: 300, value3: 400, value4: 500 },
      { name: 'C', value: 300, value2: 400, value3: 500, value4: 600 },
      { name: 'D', value: 400, value2: 500, value3: 600, value4: 700 },
    ]

    const ChartComponent = {
      bar: BarChart,
      line: LineChart,
      pie: PieChart,
      area: AreaChart,
      scatter: ScatterChart,
      radar: RadarChart,
    }[chart.chartType]

    const DataComponent = {
      bar: Bar,
      line: Line,
      pie: Pie,
      area: Area,
      scatter: Scatter,
      radar: Radar,
    }[chart.chartType]

    return (
      <Card>
        <CardHeader>
          <CardTitle>Custom {chart.chartType.charAt(0).toUpperCase() + chart.chartType.slice(1)} Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <ChartComponent data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {chart.queries.map((query: string, index: number) => (
                <DataComponent 
                  key={index} 
                  type="monotone" 
                  dataKey={`value${index + 1}`} 
                  fill={`#${Math.floor(Math.random()*16777215).toString(16)}`} 
                />
              ))}
            </ChartComponent>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    )
  }

export default function CrowdPage() {
  const [timeSliderValue, setTimeSliderValue] = useState([50])
  const [customCharts, setCustomCharts] = useState<any[]>([])

  const handleAddChart = (chartType: string, queries: string[], size: string) => {
    setCustomCharts([...customCharts, { chartType, queries, size }])
  }

  return (
    <DashboardLayout>
      <div className="relative w-full min-h-screen bg-background pt-4">
        <div className="absolute inset-0 overflow-auto pointer-events-auto">
          <div className="container mx-auto p-4 space-y-6">
            <div className="flex justify-between items-center mb-6">
              <Card className="flex-grow mr-4">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Crowd Analytics</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <AddChartModal onAddChart={handleAddChart} />
                </CardHeader>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <DemographicsChart title="Demographics: Age Distribution" data={ageData} />
              <DemographicsChart title="Demographics: Gender Distribution" data={genderData} />
              <DemographicsChart title="Demographics: Ethnicity Distribution" data={ethnicityData} />
            </div>
            
            <SentimentHeatmap />
            
            <GroupAnalytics />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {customCharts.map((chart, index) => (
                <div key={index} className={`
                  ${chart.size === 'full' ? 'col-span-full' : ''}
                  ${chart.size === 'half' ? 'md:col-span-1 lg:col-span-2' : ''}
                  ${chart.size === 'third' ? 'lg:col-span-1' : ''}
                  ${chart.size === 'quarter' ? 'xl:col-span-1' : ''}
                `}>
                  {renderChart(chart)}
                </div>
              ))}
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Time Slider</CardTitle>
              </CardHeader>
              <CardContent>
                <Slider
                  value={timeSliderValue}
                  onValueChange={setTimeSliderValue}
                  max={100}
                  step={1}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Use the slider to analyze past behavior and track changes over time.
                </p>
              </CardContent>
            </Card>
            
            <ReportExport />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

