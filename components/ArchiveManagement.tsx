import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockArchivedData = [
  { id: 1, event: 'Concert A', location: 'Venue X', date: '2023-01-15' },
  { id: 2, event: 'Festival B', location: 'Park Y', date: '2023-02-20' },
  { id: 3, event: 'Conference C', location: 'Center Z', date: '2023-03-25' },
]

export function ArchiveManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(mockArchivedData)

  const handleSearch = () => {
    const filtered = mockArchivedData.filter(
      (item) =>
        item.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.date.includes(searchTerm)
    )
    setFilteredData(filtered)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Archive Management</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex space-x-2">
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search archives..."
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.event}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

