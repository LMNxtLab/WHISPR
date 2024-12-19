'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { User, LogOut } from 'lucide-react'
import Link from 'next/link'
import { LoginModal } from './LoginModal'
import { useAuth } from '@/contexts/AuthContext'
import Image from 'next/image'

interface UserProfileButtonProps {
  className?: string;
  colors: {
    text: string;
    hover: string;
    hoverText: string;
  };
}

export function UserProfileButton({ className, colors }: UserProfileButtonProps) {
  const { isLoggedIn, username, login, logout } = useAuth()
  const [showLoginModal, setShowLoginModal] = useState(false)

  const handleLogin = (user: string) => {
    login(user)
    setShowLoginModal(false)
  }

  const buttonStyle = {
    color: colors.text,
    '--hover-text': colors.hoverText,
  } as React.CSSProperties

  if (isLoggedIn) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <Link href="/user-profile" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
          <Image
            src={`https://www.gravatar.com/avatar/${username}?d=identicon&s=32`}
            alt={username}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm font-medium" style={buttonStyle}>{username}</span>
        </Link>
        <Button
          variant="ghost"
          size="sm"
          onClick={logout}
          className="hover:bg-transparent hover:border hover:border-white"
          style={{
            color: colors.text,
            '&:hover': {
              color: colors.hoverText,
            },
          }}
        >
          <LogOut className="w-4 h-4 transition-colors duration-200 hover:text-[var(--hover-text)]" />
        </Button>
      </div>
    )
  }

  return (
    <>
      <Button
        variant="ghost"
        className={`flex items-center space-x-2 ${className} hover:bg-transparent hover:border hover:border-white`}
        onClick={() => setShowLoginModal(true)}
        style={buttonStyle}
      >
        <User className="w-5 h-5 transition-colors duration-200 hover:text-[var(--hover-text)]" />
        <span className="text-sm transition-colors duration-200 hover:text-[var(--hover-text)]">LOGIN</span>
      </Button>
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </>
  )
}

