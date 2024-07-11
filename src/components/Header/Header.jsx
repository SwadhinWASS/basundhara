import Button from '../Button/Button';
import logo from './../../assets/images/logo.png';
import './Header.scss';

const Header = () => {
    return (
        <>
            <div className="container">
                <header>
                    <div className="left_nav">
                        <img src={logo} alt="" />
                    </div>
                    <div className="right_nav">
                        <ul className='list_item'>
                            <li className='list_items'><a href="">About</a></li>
                            <li className='list_items'><a href="">Explore</a></li>
                            <li className='list_items'><a href="">construction</a></li>
                            <li className='list_items'><a href="">gallery</a></li>
                            <li className='list_items'><a href="">contact us</a></li>
                        </ul>
                        <Button title='SITE VISIT' />
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header