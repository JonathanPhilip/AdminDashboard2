import React from 'react'
import "./topbar.css"
import {NotificationsNone, Settings,Language} from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper" >
            <div className="topleft">
                <span className="logo">QTILAB</span>
            </div>
            <div className="topright">
                <div className="topbarIconsContainer">
                  <NotificationsNone />
                  <span className="topIconBag">2</span>
                </div>
                <div className="topbarIconsContainer">
                  <Language />
                  <span className="topIconBag">2</span>
                </div>
                <div className="topbarIconsContainer">
                  <Settings/>
                  
                </div>
                <img src="" alt="J" className="topAvatar" />
            
            </div>

        </div>
    </div>
  )
}

export default Topbar