import { NavLink } from "react-router-dom";


export default function Header({home}) {
  console.log(home)
  return (
    <header className="header">
    <div className="header-div">
      {home &&<NavLink to="/">
          <img className= "header-div-image" src="home.png" alt="home"/>
      </NavLink>}
    </div>
      
    </header>
  );
}
