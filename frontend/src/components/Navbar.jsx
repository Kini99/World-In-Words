import { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContextProvider';
import logo from "../assets/logo.png";

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className='flex py-3 px-10 justify-between'>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-32" /> 
          </Link>
        </div>
        <div className="links flex items-center space-x-3"> 
          <Link className="link" to="/?cat=art">
            <h6 className="text-base font-light text-black hover:text-yellow-500">ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6 className="text-base font-light text-black hover:text-yellow-500">SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6 className="text-base font-light text-black hover:text-yellow-500">TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6 className="text-base font-light text-black hover:text-yellow-500">CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6 className="text-base font-light text-black hover:text-yellow-500">DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6 className="text-base font-light text-black hover:text-yellow-500">FOOD</h6>
          </Link>
          {currentUser ? <span className="text-base">{currentUser?.username}</span> : null}
          {currentUser ? (
            <span onClick={logout} className="cursor-pointer">
              <h6 className="text-base font-light text-black hover:text-yellow-500">LOGOUT</h6>
            </span>
          ) : (
            <Link className="link" to="/login">
              <h6 className="text-base font-light text-black hover:text-yellow-500">LOGIN</h6>
            </Link>
          )}
          <Link className="link" to="/write">
            <h6 className="text-base font-light text-black hover:text-yellow-500">WRITE</h6>
          </Link>
        </div>
    </div>
  )
}

export default Navbar;
