import { NavLink } from 'react-router-dom';
import Button from '../common/Button/Button'
import './Header.css';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className="logo">
                <h1>Foodes</h1>
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/services'>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact Us</NavLink>
                    </li>
                </ul>
            </div>
            <div className="btn_wrapper">
                <NavLink to='/order-now'>
                    <Button text="Order Now" />
                </NavLink>
                <NavLink to='/sign-in'>
                    <Button text="SignIn" />
                </NavLink>
                <NavLink to='/sign-up'>
                    <Button text="SignUp" />
                </NavLink>

            </div>
        </div>
    )
}

export default Header
