import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Endpoint {
  method: string;
  path: string;
  description: string;
}

const endpoints: Endpoint[] = [
  { method: 'GET', path: '/api/user', description: 'Get current user information' },
  { method: 'PUT', path: '/api/user', description: 'Update user information' },
  { method: 'GET', path: '/api/dashboard', description: 'Get dashboard overview data' },
  { method: 'GET', path: '/api/live', description: 'Get live monitoring data' },
  { method: 'GET', path: '/api/crowd', description: 'Get crowd analytics data' },
  { method: 'POST', path: '/api/crowd/chart', description: 'Create a new custom chart' },
  { method: 'GET', path: '/api/data', description: 'Get data management overview' },
  { method: 'POST', path: '/api/data/export', description: 'Export selected data' },
  { method: 'GET', path: '/api/spatial', description: 'Get spatial view data' },
  { method: 'GET', path: '/api/users', description: 'Get list of users (admin only)' },
  { method: 'POST', path: '/api/users', description: 'Create a new user (admin only)' },
  { method: 'PUT', path: '/api/users/:id', description: 'Update a user (admin only)' },
  { method: 'DELETE', path: '/api/users/:id', description: 'Delete a user (admin only)' },
  { method: 'POST', path: '/api/auth/login', description: 'User login' },
  { method: 'POST', path: '/api/auth/logout', description: 'User logout' },
  { method: 'POST', path: '/api/auth/reset-password', description: 'Request password reset' },
  { method: 'PUT', path: '/api/settings', description: 'Update user settings' },
  { method: 'GET', path: '/api/logs', description: 'Get system logs (admin only)' },
]

export function ApiEndpointsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>API Endpoints</CardTitle>
        <CardDescription>List of all available API endpoints in the dashboard system</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Method</TableHead>
              <TableHead>Path</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {endpoints.map((endpoint, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{endpoint.method}</TableCell>
                <TableCell>{endpoint.path}</TableCell>
                <TableCell>{endpoint.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

