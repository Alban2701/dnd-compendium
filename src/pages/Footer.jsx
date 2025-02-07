import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <footer style={{
            position: "relative",
            backgroundImage: "url('https://i.pinimg.com/736x/36/44/b4/3644b4df7f920872d61077974219d691.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            padding: "20px",
            color: "white",
            textAlign: "center"
        }}>
            {/* Overlay flou qui n'affecte pas le texte */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Assombrissement pour lisibilité
                zIndex: 0
            }}></div>

            {/* Contenu du footer (non flou) */}
            <Container style={{ position: "relative", zIndex: 1 }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li>
                        <a href="https://github.com/Alban2701" target='_blank' rel="noopener noreferrer"
                            style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
                            © Alban GENTA
                        </a>
                    </li>
                    <li>
                        <a href="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
                            Retour à l'accueil du site
                        </a>
                    </li>
                </ul>
            </Container>
        </footer>
    );
}

export default Footer;
