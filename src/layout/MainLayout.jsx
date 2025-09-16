import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen gap-6 p-3 bg-gray-50" dir="rtl">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
        <main className="w-full">
          <Outlet />
        </main>
    </div>
  )
}
