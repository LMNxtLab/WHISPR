import { create } from 'zustand'

interface DashboardState {
  activeCameras: number
  totalVisitors: number
  lastUpdate: Date
  setActiveCameras: (count: number) => void
  setTotalVisitors: (count: number) => void
  updateLastUpdate: () => void
}

export const useDashboardStore = create<DashboardState>((set) => ({
  activeCameras: 24,
  totalVisitors: 1234,
  lastUpdate: new Date(),
  setActiveCameras: (count) => set({ activeCameras: count }),
  setTotalVisitors: (count) => set({ totalVisitors: count }),
  updateLastUpdate: () => set({ lastUpdate: new Date() }),
}))

