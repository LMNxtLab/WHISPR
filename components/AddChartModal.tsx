"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface AddChartModalProps {
  onAddChart: (chartType: string, queries: string[], size: string) => void
}

export function AddChartModal({ onAddChart }: AddChartModalProps) {
  const [chartType, setChartType] = useState('')
  const [query1, setQuery1] = useState('')
  const [query2, setQuery2] = useState('')
  const [query3, setQuery3] = useState('')
  const [query4, setQuery4] = useState('')
  const [size, setSize] = useState('')
  const [showQuery3, setShowQuery3] = useState(false)
  const [showQuery4, setShowQuery4] = useState(false)

  const handleAddChart = () => {
    const queries = [query1, query2]
    if (showQuery3 && query3) queries.push(query3)
    if (showQuery4 && query4) queries.push(query4)
    onAddChart(chartType, queries, size)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="ml-auto">ADD CHART</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Chart</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="chart-type" className="text-right">
              Chart Type
            </Label>
            <Select onValueChange={setChartType} value={chartType}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select chart type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bar">Bar Chart</SelectItem>
                <SelectItem value="line">Line Chart</SelectItem>
                <SelectItem value="pie">Pie Chart</SelectItem>
                <SelectItem value="area">Area Chart</SelectItem>
                <SelectItem value="scatter">Scatter Plot</SelectItem>
                <SelectItem value="radar">Radar Chart</SelectItem>
                <SelectItem value="heatmap">Heatmap</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="query1" className="text-right">
              Query 1
            </Label>
            <Select onValueChange={setQuery1} value={query1}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select database query 1" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="query1">Query 1</SelectItem>
                <SelectItem value="query2">Query 2</SelectItem>
                <SelectItem value="query3">Query 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="query2" className="text-right">
              Query 2
            </Label>
            <Select onValueChange={setQuery2} value={query2}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select database query 2" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="query1">Query 1</SelectItem>
                <SelectItem value="query2">Query 2</SelectItem>
                <SelectItem value="query3">Query 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="show-query3"
              checked={showQuery3}
              onCheckedChange={setShowQuery3}
            />
            <Label htmlFor="show-query3">Add Query 3</Label>
          </div>
          {showQuery3 && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="query3" className="text-right">
                Query 3
              </Label>
              <Select onValueChange={setQuery3} value={query3}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select database query 3" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="query1">Query 1</SelectItem>
                  <SelectItem value="query2">Query 2</SelectItem>
                  <SelectItem value="query3">Query 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          <div className="flex items-center space-x-2">
            <Switch
              id="show-query4"
              checked={showQuery4}
              onCheckedChange={setShowQuery4}
            />
            <Label htmlFor="show-query4">Add Query 4</Label>
          </div>
          {showQuery4 && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="query4" className="text-right">
                Query 4
              </Label>
              <Select onValueChange={setQuery4} value={query4}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select database query 4" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="query1">Query 1</SelectItem>
                  <SelectItem value="query2">Query 2</SelectItem>
                  <SelectItem value="query3">Query 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="size" className="text-right">
              Size
            </Label>
            <Select onValueChange={setSize} value={size}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select chart size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full">Full Width</SelectItem>
                <SelectItem value="half">1/2</SelectItem>
                <SelectItem value="third">1/3</SelectItem>
                <SelectItem value="quarter">1/4</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button onClick={handleAddChart}>Add Chart</Button>
      </DialogContent>
    </Dialog>
  )
}

