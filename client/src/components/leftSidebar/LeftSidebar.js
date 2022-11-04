import "./leftSidebar.css"
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function LeftSidebar() {
  return (
    <div className="leftSidebar">
      <div className="leftSidebarWrapper">
        <ul className="leftSidebarList">
          <li className="leftSidebarListItem">
            <div className="leftSidebarIcon"></div>
            <span className="leftSidebarListItemText">Feed</span>
          </li>
          <li className="leftSidebarListItem">
            <div className="leftSidebarIcon"></div>
            <span className="leftSidebarListItemText">Booking</span>
          </li>
        </ul>
        <button className="leftSidebarButton">Invite Contact</button>
        <div className="leftSidebarDivider"></div>
        <ul className="leftSidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}
