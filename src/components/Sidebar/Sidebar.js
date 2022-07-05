import React from 'react'
import './Sidebar.css'
import admin from '../../resources/administrator.png'

export default function Sidebar() {
  return (
    <div className="sidebar">
     <div className="logo">
          <img src={admin} alt="" />
          <span></span>
     </div>
    </div>
  )
}
