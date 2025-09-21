import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../assets/dashIcone/logo.png";
import home from '../assets/dashIcone/home.png';
import boy from '../assets/dashIcone/boy.png';
import recommend from '../assets/dashIcone/recommend.png'
import divider from '../assets/dashIcone/Divider.png'
import {
  AiOutlinePlus,
  AiOutlineCloudUpload,
  AiOutlineSetting,
  AiOutlineCamera
} from 'react-icons/ai';
import ProfileDropdown from './ProfileDropdown';

export default function SideBar() {
  const links = [
    { to: "/dashboard", label: "الرئيسية", icon: home },
    { to: "/dashboard/childrenManagement", label: "إدارة الأطفال", icon: boy },
    { to: "", label: "التوصيات المقترحة", icon: recommend },
    
  ];
  const addLinks =
  [
    { to: "/dashboard/add-child", label: "إضافة طفل جديد", icon: AiOutlinePlus },
    { to: "/dashboard/uploadingDraw", label: "رفع رسمة جديدة", icon: AiOutlinePlus },
  ]
  const sttings = 
  [
        { to: "/dashboard/settings", label: "الإعدادات", icon: AiOutlineSetting },
  ]
  return (
    <div className="min-w-[220px] h-screen flex items-start flex-col">
      <div className=' flex-1'>
      {/* Header */}
        <div className="flex  mt-8 mb-6 items-center gap-1">
          <div className="flex items-center flex-row-reverse gap-3">
              <h1 className="text-base font-bold text-gray-800">GazaKidMind</h1>
            <img src={logo} alt="Logo" className="w-9 h-9 rounded-lg" />
          </div>
        </div>
      {/* Navigation */}
      <nav className="flex flex-col w-full">
        <ul className="">
          {links.map((link) => (
            <li key={link.label}>
              {link.to ? (
                <NavLink
                  to={link.to}
                  end={link.to === "/dashboard"}
                  className={({ isActive }) =>
                    `flex justify-end flex-row-reverse gap-3 py-3.5 px-2 text-sm font-semibold leading-5 rounded-lg transition-all duration-200 text-right ${
                      isActive
                        ? "bg-white text-gray-900 "
                        : "text-[#667085] hover:bg-gray-50 hover:text-gray-900"
                    }`
                  }
                >
                  <span className="text-sm">{link.label}</span>
                  <img src={link.icon} alt="" className='w-6 h-6' />
                </NavLink>
              ) : (
                <div
                  className="flex justify-end flex-row-reverse gap-3 py-3.5 px-2 text-sm font-semibold leading-5 rounded-lg text-[#a1a1a1] cursor-not-allowed"
                >
                  <span className="text-sm">{link.label}</span>
                  <img src={link.icon} alt="" className='w-6 h-6 opacity-50' />
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className=' mt-4'>
          <img src={divider} alt="divider" />
        </div>
      </nav>
      {/* Add section */} 
      <div className=' mt-8'>
        <ul className="">
          {addLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/dashboard"}
                className={({ isActive }) =>
                  `flex justify-end items-center flex-row-reverse gap-3 py-3.5 px-2 text-sm font-semibold leading-5 rounded-lg transition-all duration-200 text-right ${
                    isActive
                      ? "bg-white text-gray-900 "
                      : "text-[#667085] hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                <span className="text-sm">{link.label}</span>
                <link.icon size={16}/>
              </NavLink>
            </li>
          ))}
        </ul>
      </div> 
      </div>
      <div className=' w-full'>
        <ul className="mb-4">
          {sttings.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/dashboard"}
                className={({ isActive }) =>
                  `flex justify-end items-center flex-row-reverse gap-3 py-3.5 px-2 text-sm font-semibold leading-5 rounded-lg transition-all duration-200 text-right ${
                    isActive
                      ? "bg-white text-gray-900 "
                      : "text-[#667085] hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                <span className="text-sm">{link.label}</span>
                <link.icon size={16}/>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className=' w-full'>
          <ProfileDropdown/>
        </div>
      </div>

    </div>
  )
}
