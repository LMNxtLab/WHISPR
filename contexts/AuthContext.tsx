'use client'

import React, { createContext, useState, useContext, useEffect } from 'react'

interface AuthContextType {
  isLoggedIn: boolean
  username: string
  login: (username: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  useEffect(() => {
    const storedUsername = localStorage.getItem('username')
    if (storedUsername) {
      setIsLoggedIn(true)
      setUsername(storedUsername)
    }
  }, [])

  const login = (user: string) => {
    setIsLoggedIn(true)
    setUsername(user)
    localStorage.setItem('username', user)
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUsername('')
    localStorage.removeItem('username')
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

