"use client"

import { Bell, ChevronDown, Menu, Search } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">ADONAS 2.0</span>
            </Link>
          </div>
          <Tabs defaultValue="geoview" className="flex-1">
            <TabsList className="hidden md:flex">
              <TabsTrigger value="geoview">GEOVIEW</TabsTrigger>
              <TabsTrigger value="dataviz">DATAVIZ</TabsTrigger>
              <TabsTrigger value="insights">INSIGHTS</TabsTrigger>
              <TabsTrigger value="machine">MACHINE</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="ml-auto flex items-center space-x-4">
            <div className="hidden w-64 md:block">
              <Input
                type="search"
                placeholder="Search..."
                className="h-8 w-[150px] lg:w-[250px]"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8">
                  <span className="hidden md:inline-flex">admin@adonas.com</span>
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}

