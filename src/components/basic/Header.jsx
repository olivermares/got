import { NavLink } from "react-router-dom";


export default function Header({home}) {
  console.log(home)
  return (
    <header className="header">
    <div className="header-div">
      {home &&<NavLink to="/">
          <img className= "img-icon" src="/home.png" alt="ho"/>
      </NavLink>}
    </div>
      
    </header>
  );
}
