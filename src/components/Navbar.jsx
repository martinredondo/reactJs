import React from 'react'
import CartWidget from './CartWidget'
import { NavLink,Link} from 'react-router-dom'

const Navbar = () => {
const categories = [
  {id:'todos', adress:'/', text:'Todos los productos'},
  {id:'hp', adress:'/category/Harry-potter', text:'Saga Harry Potter'},
  {id:'got', adress:'/category/Game-of-thrones', text:'Saga Game of thrones'},
  {id:'mr', adress:'/category/Maze-runner', text:'Saga Maze runner'}
];

  return (
    <>
    <Link to='/cart'>
      <CartWidget />
    </Link>
    <nav className="nav-container">
    <Link to="/">
      <h1 className="company-name" style={{color: 'white', marginLeft:'1rem'}}>Dream books.</h1>
    </Link>
      {categories.map((cat) => {
        return (
            <div className="links" key={cat.id}>
            <NavLink to={cat.adress} exact activeClassName="activeClass" className="sections">
                {cat.text}
              </NavLink>
            </div>
        );
      })}
    </nav>
    </>
  );
};
export default Navbar;

