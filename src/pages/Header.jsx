import HeaderNavbar from '../components/HeaderNavbar';

function Header() {
    return (
        <header style={{
            position: "relative",
            backgroundImage: "url('https://i.pinimg.com/736x/36/44/b4/3644b4df7f920872d61077974219d691.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "top",
            padding: "20px",
            color: "white",
            textAlign: "center"
        }}>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 0
            }}></div>
            <HeaderNavbar />
        </header>
    );
}

export default Header;