"use client"

import { useState, useEffect } from 'react'
import { TopDockHeader } from '@/components/FloatingUI'
import DashboardLayout from '@/components/DashboardLayout'
import { ApiEndpointsList } from '@/components/ApiEndpointsList'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UserProfilePage() {
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState('en')
  const [mfaEnabled, setMfaEnabled] = useState(false)
  const [timezone, setTimezone] = useState('UTC')
  const [units, setUnits] = useState('metric')
  const [headerBarDefault, setHeaderBarDefault] = useState(true)
  const [companyColor1, setCompanyColor1] = useState('#000000')
  const [companyColor2, setCompanyColor2] = useState('#000000')
  const [companyColor3, setCompanyColor3] = useState('#000000')
  const [useColor1AsHeader, setUseColor1AsHeader] = useState(false)
  const [useColor2AsHeader, setUseColor2AsHeader] = useState(false)
  const [useColor3AsHeader, setUseColor3AsHeader] = useState(false)
  const [logoUrl, setLogoUrl] = useState('')
  const [headerColor, setHeaderColor] = useState('')
  const [headerLogo, setHeaderLogo] = useState('')
  const [useCustomHeaderBar, setUseCustomHeaderBar] = useState(false)
  const [useCustomButtons, setUseCustomButtons] = useState(false)
  const [useCustomHoverElements, setUseCustomHoverElements] = useState(false)
  const [headerBarColor, setHeaderBarColor] = useState('default')
  const [buttonsColor, setButtonsColor] = useState('default')
  const [hoverElementsColor, setHoverElementsColor] = useState('default')
  const [hoverColor, setHoverColor] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      console.log(`Uploading logo:`, file.name)
    }
  }

  const handleApplyChanges = () => {
    let newHeaderColor = '';
    let newButtonsColor = '';
    let newHoverColor = '';

    if (useCustomHeaderBar) {
      switch (headerBarColor) {
        case 'color1': newHeaderColor = companyColor1; break;
        case 'color2': newHeaderColor = companyColor2; break;
        case 'color3': newHeaderColor = companyColor3; break;
        default: newHeaderColor = ''; // Default color
      }
    }

    if (useCustomButtons) {
      switch (buttonsColor) {
        case 'color1': newButtonsColor = companyColor1; break;
        case 'color2': newButtonsColor = companyColor2; break;
        case 'color3': newButtonsColor = companyColor3; break;
        default: newButtonsColor = ''; // Default color
      }
    }

    if (useCustomHoverElements) {
      switch (hoverElementsColor) {
        case 'color1': newHoverColor = companyColor1; break;
        case 'color2': newHoverColor = companyColor2; break;
        case 'color3': newHoverColor = companyColor3; break;
        default: newHoverColor = ''; // Default color
      }
    }

    setHeaderColor(newHeaderColor);
    setHoverColor(newHoverColor);
    setHeaderLogo(logoUrl);

    // Here you would typically update these values in your global state or context
    console.log('Applying changes...', { 
      headerColor: newHeaderColor, 
      headerLogo, 
      buttonsColor: newButtonsColor, 
      hoverColor: newHoverColor 
    });
  }

  useEffect(() => {
    // This effect ensures only one color can be selected as header color at a time
    if (useColor1AsHeader) {
      setUseColor2AsHeader(false)
      setUseColor3AsHeader(false)
    } else if (useColor2AsHeader) {
      setUseColor1AsHeader(false)
      setUseColor3AsHeader(false)
    } else if (useColor3AsHeader) {
      setUseColor1AsHeader(false)
      setUseColor2AsHeader(false)
    }
  }, [useColor1AsHeader, useColor2AsHeader, useColor3AsHeader])

  return (
    <DashboardLayout>
      <div className="relative w-full min-h-screen bg-background">
        <div className="absolute inset-x-0 top-0 z-50 pointer-events-auto">
          <TopDockHeader 
            className="pointer-events-auto" 
            headerColor={headerColor} 
            logoUrl={headerLogo} 
            hoverColor={hoverColor}
          />
        </div>
        <div className="absolute inset-0 overflow-auto pointer-events-auto pt-16">
          <div className="container mx-auto p-4 space-y-6">
            <h1 className="text-2xl font-bold">User Profile</h1>

            <Tabs defaultValue="account" className="space-y-4">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="customization">Customization</TabsTrigger>
                <TabsTrigger value="management">User Management</TabsTrigger>
                <TabsTrigger value="api-endpoints">API Endpoints</TabsTrigger>
              </TabsList>

              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>Manage your account details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" value="JohnDoe" readOnly />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value="john.doe@example.com" readOnly />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="language">Language</Label>
                      <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>Manage your account security preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="mfa" checked={mfaEnabled} onCheckedChange={setMfaEnabled} />
                      <Label htmlFor="mfa">Enable Multi-Factor Authentication</Label>
                    </div>
                    <Button variant="outline">Change Password</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle>User Preferences</CardTitle>
                    <CardDescription>Set your preferred settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
                      <Label htmlFor="dark-mode">Dark Mode</Label>
                    </div>
                    <div>
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select value={timezone} onValueChange={setTimezone}>
                        <SelectTrigger id="timezone">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="UTC">UTC</SelectItem>
                          <SelectItem value="EST">Eastern Standard Time</SelectItem>
                          <SelectItem value="PST">Pacific Standard Time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="units">Units</Label>
                      <Select value={units} onValueChange={setUnits}>
                        <SelectTrigger id="units">
                          <SelectValue placeholder="Select units" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="metric">Metric</SelectItem>
                          <SelectItem value="imperial">Imperial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="customization">
                <Card>
                  <CardHeader>
                    <CardTitle>System Customization</CardTitle>
                    <CardDescription>Customize the appearance of the system</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="custom-header-bar">Custom Header Bar</Label>
                        <Switch
                          id="custom-header-bar"
                          checked={useCustomHeaderBar}
                          onCheckedChange={setUseCustomHeaderBar}
                        />
                      </div>
                      {useCustomHeaderBar && (
                        <Select value={headerBarColor} onValueChange={setHeaderBarColor}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select header bar color" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="default">Default</SelectItem>
                            <SelectItem value="color1">Company Color 1</SelectItem>
                            <SelectItem value="color2">Company Color 2</SelectItem>
                            <SelectItem value="color3">Company Color 3</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="custom-buttons">Custom Buttons</Label>
                        <Switch
                          id="custom-buttons"
                          checked={useCustomButtons}
                          onCheckedChange={setUseCustomButtons}
                        />
                      </div>
                      {useCustomButtons && (
                        <Select value={buttonsColor} onValueChange={setButtonsColor}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select buttons color" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="default">Default</SelectItem>
                            <SelectItem value="color1">Company Color 1</SelectItem>
                            <SelectItem value="color2">Company Color 2</SelectItem>
                            <SelectItem value="color3">Company Color 3</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="custom-hover">Custom Hover Icons & Labels</Label>
                        <Switch
                          id="custom-hover"
                          checked={useCustomHoverElements}
                          onCheckedChange={setUseCustomHoverElements}
                        />
                      </div>
                      {useCustomHoverElements && (
                        <Select value={hoverElementsColor} onValueChange={setHoverElementsColor}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select hover elements color" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="default">Default</SelectItem>
                            <SelectItem value="color1">Company Color 1</SelectItem>
                            <SelectItem value="color2">Company Color 2</SelectItem>
                            <SelectItem value="color3">Company Color 3</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    </div>

                    <div className="space-y-4">
                      <Label>Company Colors</Label>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="company-color-1">Company Color 1</Label>
                          <Input
                            id="company-color-1"
                            type="text"
                            placeholder="#000000"
                            value={companyColor1}
                            onChange={(e) => setCompanyColor1(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="company-color-2">Company Color 2</Label>
                          <Input
                            id="company-color-2"
                            type="text"
                            placeholder="#000000"
                            value={companyColor2}
                            onChange={(e) => setCompanyColor2(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="company-color-3">Company Color 3</Label>
                          <Input
                            id="company-color-3"
                            type="text"
                            placeholder="#000000"
                            value={companyColor3}
                            onChange={(e) => setCompanyColor3(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="logo-url">Logo URL</Label>
                      <Input
                        id="logo-url"
                        type="url"
                        placeholder="https://example.com/logo.png"
                        value={logoUrl}
                        onChange={(e) => setLogoUrl(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="transparent-logo">Upload Transparent Logo (1000px x 400px)</Label>
                      <Input id="transparent-logo" type="file" accept="image/png" onChange={handleFileUpload} />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="management">
                <Card>
                  <CardHeader>
                    <CardTitle>User & Role Management</CardTitle>
                    <CardDescription>Manage users and their roles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Username</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>JohnDoe</TableCell>
                          <TableCell>john.doe@example.com</TableCell>
                          <TableCell>Admin</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">Edit</Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>JaneSmith</TableCell>
                          <TableCell>jane.smith@example.com</TableCell>
                          <TableCell>User</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">Edit</Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <Button className="mt-4">Add New User</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="api-endpoints">
                <ApiEndpointsList />
              </TabsContent>
            </Tabs>

            <Button onClick={handleApplyChanges} className="w-full mb-2">Apply Changes</Button>
            <Button className="w-full">Save Changes</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

