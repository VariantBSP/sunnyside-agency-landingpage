const Navbar = () => {
    return ( 
        <>
        <nav>
            <div className="logo">
                <img src="/images/logo.svg" alt="logo" />
            </div>
            <div className="links desktop">
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className="menu mobile"><img src="/images/icon-hamburger.svg" alt="" /></div>
        
        <div className="menu-box mobile">
            <div className="triangle"></div>
            <div className="white">   
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">CONTACT</a>
            </div>
        </div>
        </nav>
        <div className="menu-triangle"></div>
    </>
     );
}
 
export default Navbar;