import { NavLink } from 'react-router-dom'


function NavBar () { 
    return (
        <nav className='nav'>

            <NavLink to="/" className={ 'nav_home'}>Home</NavLink >
            <NavLink to="/countries" className={'nav-countries'}>Countries</NavLink>
            <NavLink to="/add-country" className={'nav-add-countries'}>Add New Country!</NavLink>

        </nav>
    )
} 




export default NavBar








