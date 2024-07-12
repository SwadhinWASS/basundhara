import Button from '../Button/Button';
import logo from './../../assets/images/logo.png';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="container">
                <header>
                    <div className="left_nav">
                        <Link to={'/'}><img src={logo} alt="" /></Link>
                    </div>
                    <div className="right_nav">
                        <ul className='list_item'>
                            <li className='list_items'><NavLink to={''}>About</NavLink></li>
                            <li className='list_items'><NavLink to={''}>Explore</NavLink></li>
                            <li className='list_items'><NavLink to={''}>construction</NavLink></li>
                            <li className='list_items'><NavLink to={''}>gallery</NavLink></li>
                            <li className='list_items'><NavLink to={''}>contact us</NavLink></li>
                        </ul>
                        <Button title='SITE VISIT' />
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header