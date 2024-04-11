import "./sidebar.css"
import {Home , Work, Timeline,PeopleAlt, QuestionMark} from '@mui/icons-material';


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper" >

          <div className="sidebarMenu" >
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
               <Home  className="sidebarIcon"/>
                Home
              </li>
              
              
              <li className="sidebarListItem">
               <Timeline className="sidebarIcon"/>
                Analytics
              </li>
              <li className="sidebarListItem">
               <PeopleAlt className="sidebarIcon"/>
                Sales
              </li>
              
            </ul>
          </div>
          <div className="sidebarMenu" >
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              
              <li className="sidebarListItem">
               <Work className="sidebarIcon" />
                Projects
              </li>
              
              <li className="sidebarListItem">
               <PeopleAlt className="sidebarIcon"/>
                Interns
              </li>
              <li className="sidebarListItem">
               <QuestionMark  className="sidebarIcon"/>
                Reports
              </li>
            </ul>
          </div>
          <div className="sidebarMenu" >
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              
              <li className="sidebarListItem">
               <Work className="sidebarIcon" />
                Mail
              </li>
              <li className="sidebarListItem">
               <Timeline className="sidebarIcon"/>
                Feedback
              </li>
              <li className="sidebarListItem">
               <PeopleAlt className="sidebarIcon"/>
                Messages
              </li>
              
            </ul>
          </div>
         

        </div>
    </div>
  )
}
