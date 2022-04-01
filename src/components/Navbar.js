import Logo from '../reactjs-icon.png';

const Navbar = function (props){
    return(
        <nav className='nav'>
            <div className="nav--logo">
                <img className='nav--logo-icon' src={Logo} alt='React Logo'/>
                <h1 className='nav--logo-heading' >ReactFacts</h1>
            </div>
            <ul className='nav--links'>
                <li>LinkedIn</li>
                <li>StackOverFlow</li>
            </ul>
        </nav>
    )
}

export default Navbar;