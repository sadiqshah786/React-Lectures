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
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="btn_wrapper">
                <Button text="Order Now" />


            </div>
        </div>
    )
}

export default Header
