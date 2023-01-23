import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai   '
import Home from '../../pages/Home'
import './navbar.css'
import { useState } from 'react'

const NavBar = () => {
  const [search, setSearch] = useState(" ")
  const navigate = useNavigate()

  const handleSubimit = (e) => {
    e.preventDefault()

    if(!search) return

    navigate(`/search?q=${search}`, { replace: true })

    setSearch("")
  }

  return (
    <div>
      <div id="navbar">
        <h2>
          <Link to='/'>MoviesLib</Link>
        </h2>
        <form onSubmit={handleSubimit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
            <button type='submit'><AiOutlineSearch/></button>
        </form>
      </div>
    </div>
    
    
  )
}

export default NavBar