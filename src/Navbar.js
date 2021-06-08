const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Adrian Evans Profile</h1>
            <div className="links">
                <a href="/" href="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Home</a>
                <a href="/portfolio" href="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Portfolio</a>
                <a href="/contact" href="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Contact</a>
            </div>
        </nav>
     );
}
 
export default Navbar;