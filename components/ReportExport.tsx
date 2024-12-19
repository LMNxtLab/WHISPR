import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from 'lucide-react'

export function ReportExport() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Export Report</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export as PDF
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export as CSV
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

