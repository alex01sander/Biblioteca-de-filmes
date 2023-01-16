import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai   '
import Home from '../../pages/Home'
import './navbar.css'

const NavBar = () => {
  return (
    <div>
      <div id="navbar">
        <h2>
          <Link to='/'>MoviesLib</Link>
        </h2>
        <form>
            <input type="text" placeholder='Busque um filme' />
            <button type='submit'><AiOutlineSearch/></button>
        </form>
      </div>
        <Home/> 
    </div>
    
    
  )
}

export default NavBar