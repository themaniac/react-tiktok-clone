import React from 'react'
import Feed from '../components/Feed'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import './Content.css'

export default function Content() {
    return (
            <div className="content">
        <div className="content__left"><LeftSidebar/></div>  
        <div className="content__feed"><Feed/></div>
        <div className="content__right"><RightSidebar/></div>
      </div>
    )
}
