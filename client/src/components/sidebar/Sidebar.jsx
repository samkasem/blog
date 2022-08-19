import React from 'react'
import './sidebar.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories')
      setCats(res.data)
    }
    getCats()
  }, [])
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          className='sidebarImg'
          src='https://i0.wp.com/looks-awesome.com/wp-content/uploads/2019/04/How-to-Write-an-Engaging-About-Me-Page-for-a-WordPress-Website.jpg?fit=810%2C400&ssl=1'
          alt=''
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, nisi.
          Ea harum qui assumenda earum.
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className='link'>
              <li className='sidebarListItem'>{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='sidebarItem'></div>
      <span className='sidebarTitle'>FOLLOW US</span>
      <div className='sidebarSocial'>
        <i className='sidebarIcon fa-brands fa-square-facebook'></i>
        <i className='sidebarIcon fa-brands fa-square-twitter'></i>
        <i className='sidebarIcon fa-brands fa-square-pinterest'></i>
        <i className='sidebarIcon fa-brands fa-square-instagram'></i>
      </div>
    </div>
  )
}
