import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai   '

const NavBar = () => {
  return (
    <>
    <navbar id="navbar">
        <h2>
          <Link to='/'>MoviesLib</Link>
        </h2>
      </navbar>
        <form>
            <input type="text" placeholder='Busque um filme' />
            <button type='submit'><AiOutlineSearch/></button>
        </form>
    </>
  )
}

export default NavBar