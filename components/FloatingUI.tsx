'use client'

import { Radio, Users, HardDrive, Warehouse, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { UserProfileButton } from './UserProfileButton'
import Image from 'next/image'

interface TopDockHeaderProps {
  className?: string;
  headerColor?: string;
  logoUrl?: string;
  hoverColor?: string;
}

const topDockHeaderColors = {
  background: '#00000080',
  text: '#FFFFFF',
  hover: '#FFFFFF33',
  hoverText: '#FFFFFF'
}

export function TopDockHeader({ className, headerColor, logoUrl, hoverColor }: TopDockHeaderProps) {
  const headerStyle = {
    backgroundColor: headerColor || topDockHeaderColors.background,
    minHeight: '3.5rem',
    '--hover-color': hoverColor || topDockHeaderColors.hoverText,
  } as React.CSSProperties;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 px-4 h-14 z-50 ${className}`}
      style={headerStyle}
    >
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="flex items-center space-x-1">
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-0 hover:bg-transparent transition-colors duration-200" 
            asChild
          >
            <Link href="/">
              <Home 
                className="w-5 h-5 transition-colors duration-200" 
                style={{ 
                  color: topDockHeaderColors.text,
                  '&:hover': {
                    color: 'var(--hover-color)',
                  },
                }}
              />
            </Link>
          </Button>
          <span className="text-white px-[5px]">|</span>
          {logoUrl ? (
            <div className="h-8 w-24 relative">
              <Image 
                src={logoUrl} 
                alt="Logo" 
                fill 
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ) : (
            <span className="font-bold tracking-tight text-white">WHISPR</span>
          )}
        </div>
        <nav className="flex space-x-4 items-center">
          <NavButton href="/live" icon={Radio} label="LIVE" colors={topDockHeaderColors} />
          <NavButton href="/crowd" icon={Users} label="CROWD" colors={topDockHeaderColors} />
          <NavButton href="/data" icon={HardDrive} label="DATA" colors={topDockHeaderColors} />
          <NavButton href="/spatial" icon={Warehouse} label="SPATIAL" colors={topDockHeaderColors} />
        </nav>
        <UserProfileButton colors={{...topDockHeaderColors, hoverText: 'var(--hover-color)'}} />
      </div>
    </header>
  )
}

interface NavButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  colors: {
    text: string;
    hover: string;
    hoverText: string;
  };
}

function NavButton({ href, icon: Icon, label, colors }: NavButtonProps) {
  return (
    <Button 
      variant="ghost" 
      className="flex items-center justify-center pointer-events-auto px-2 hover:bg-transparent"
      asChild
    >
      <Link 
        href={href} 
        className="flex items-center"
        style={{
          color: colors.text,
          '--hover-text': 'var(--hover-color)',
        } as React.CSSProperties}
      >
        <Icon className="w-5 h-5 mr-1 transition-colors duration-200 hover:text-[var(--hover-text)]" />
        <span className="font-normal text-sm transition-colors duration-200 hover:text-[var(--hover-text)]">{label}</span>
      </Link>
    </Button>
  )
}

