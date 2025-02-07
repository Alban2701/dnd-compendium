import { useEffect, useState } from "react";
import { Endpoints } from "../_services/endpoints.service";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function AccordionMonster({ monsterUrl, eventKey }) {
    const [monster, setMonster] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!monsterUrl) return;

        Endpoints.getMonsterViaUrl(monsterUrl)
            .then(res => {
                setMonster(res.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [monsterUrl]);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error.message}</p>;
    if (!monster) return <p>Aucune donnée trouvée</p>;

    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>{monster.name}</Accordion.Header>
            <Accordion.Body >
                <h5>Statistiques principales :</h5>
                <Row className="text-center">
                    <Col><strong>STR</strong> <br /> {monster.strength}</Col>
                    <Col><strong>DEX</strong> <br /> {monster.dexterity}</Col>
                    <Col><strong>CON</strong> <br /> {monster.constitution}</Col>
                    <Col><strong>INT</strong> <br /> {monster.intelligence}</Col>
                    <Col><strong>WIS</strong> <br /> {monster.wisdom}</Col>
                    <Col><strong>CHA</strong> <br /> {monster.charisma}</Col>
                </Row>
                <Link to={`/monster/${monster.index}`}>Voir le monstre</Link>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default AccordionMonster;
