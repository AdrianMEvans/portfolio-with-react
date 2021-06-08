const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Adrian Evans Profile</h1>
      <div className="links">
        <a href="/portfolio"
        //         style={{ 
        //   color: 'white', 
        //   backgroundColor: '#f1356d',
        //   borderRadius: '8px' 
        // }}
        >Portfolio</a>
        <a href="/contact"
        //         style={{ 
        //   color: 'white', 
        //   backgroundColor: '#f1356d',
        //   borderRadius: '8px' 
        // }}
        >Contact</a>
        <a href="/"
          style={{
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '8px'
          }}
        >Home</a>
      </div>
    </nav>
  );
}

export default Navbar;