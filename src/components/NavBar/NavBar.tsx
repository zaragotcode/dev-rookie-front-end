// npm modules
import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <nav>
      {user ?
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/jobs">Jobs</NavLink></li>
          <li><NavLink to="/profiles">Profiles</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/jobs">Jobs</NavLink></li>
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
