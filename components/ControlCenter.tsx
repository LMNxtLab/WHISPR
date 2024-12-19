import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', permission: 'read-only' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', permission: 'editable' },
  { id: 3, name: 'Admin User', email: 'admin@example.com', permission: 'admin' },
]

export function ControlCenter() {
  const [users, setUsers] = useState(mockUsers)

  const handlePermissionChange = (userId: number, newPermission: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, permission: newPermission } : user
    ))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Control Center</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Permission</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Select
                    onValueChange={(value) => handlePermissionChange(user.id, value)}
                    defaultValue={user.permission}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="read-only">Read-only</SelectItem>
                      <SelectItem value="editable">Editable</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

