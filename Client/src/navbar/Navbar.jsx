import LogoutButton from '../Authentication/LogoutButton';
import './Navbar.css'

function Navbar() {

  return (
    <nav className='navbar'>
      <ul className='list'>
        <li>Home</li>
        <li>About</li>
        <li><LogoutButton/></li>
      </ul>
    </nav>
  )
}

export default Navbar;
