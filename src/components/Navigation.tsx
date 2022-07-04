import { FC, useState, useEffect, useRef } from 'react'
//assets
import pandaLogo from '../assets/panda-logo.jpg'
import subLogo from '../assets/organic-gin.png'
import account from '../assets/account.jpg'
import cart from '../assets/cart.jpg'
//components
import NavLinks from './NavLinks'
// import NavLinks from './NavLinks'
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';

const Navigation: FC = () => {

    const [navBarsAreHidden, setNavBarsAreHidden] = useState<boolean>(false);
    const lastScrollPositionRef = useRef<number>(0);


    function checkScrollingDirection() {
        const scroll: number = window.pageYOffset;
        if (scroll > lastScrollPositionRef.current && scroll >= 120) {
            setNavBarsAreHidden(true);
        } else {
            setNavBarsAreHidden(false);
        }
        lastScrollPositionRef.current = scroll <= 0 ? 0 : scroll;
    }

    useEffect(() => {
        window.addEventListener("scroll", checkScrollingDirection);
        return () => window.removeEventListener("scroll", checkScrollingDirection);
    }, [])


    return (
        <nav className="navigation">
            <div className="navigation__wrapper">
                <div className="navigation__inner navigation__inner--left">
                    <FaFacebookF className="navigation__social-icon" />
                    <SiInstagram className="navigation__social-icon" />
                    <FaPinterestP className="navigation__social-icon" />
                </div>
                <div className="navigation__inner">
                    <img src={pandaLogo} alt="panda-gin-logo" className="navigation__logo" />
                </div>
                <div className="navigation__inner navigation__inner--right">
                    <img src={account} alt="account-icon" className="navigation__utils-icon" />
                    <img src={cart} alt="cart-icon" className="navigation__utils-icon" />
                </div>
                <img src={subLogo} alt="sub-logo" className={navBarsAreHidden ? "navigation__sublogo navigation__sublogo--hidden" : "navigation__sublogo"} />
            </div>
            <NavLinks
                navBarsAreHidden={navBarsAreHidden}
            />
        </nav>
    )
}

export default Navigation