import { Container, Card, Button } from "react-bootstrap";
import '../styles/HomePage.css'


const HomePage = () => {
    return (
        <div className="background-container">
            <Container className="d-flex justify-content-center align-items-center">
                <Card className="text-center shadow-lg p-4 bg-light bg-opacity-50" style={{ maxWidth: "600px", borderRadius: "15px" }}>
                    <Card.Body>
                        <Card.Title as="h1" className="mb-3 text-primary">Bienvenue sur DnD Compendium</Card.Title>
                        <Card.Text as="h3" className="mb-4 text-muted">
                            Découvrez un recueil fascinant d’informations et de ressources sur Donjons & Dragons !
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default HomePage;
