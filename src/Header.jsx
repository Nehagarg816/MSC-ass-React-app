import "./Header.css";
const Header=()=>(
    <>
    <header className="header">
        <div className="container">
            <h1 className="logo">Lean In Mentorship</h1>
            <nav className="nav">
                <ul>
                <li className="home"><button><a href="/">Home</a></button></li>
                <li className="about"><button><a href="#About">About</a></button></li>
                <li className="contact"><button><a href="/SignIn">SignIn</a></button></li>
                <li className="contact"><button><a href="#Flower">Flowers</a></button></li>
                </ul>
            </nav>
            </div>
        </header>
    </>
);

export default Header;