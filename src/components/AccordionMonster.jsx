import { useEffect, useState, useRef } from 'react';
import { Endpoints } from "../_services/endpoints.service"
import Accordion from 'react-bootstrap/Accordion';


function AccordionMonster({ monsterId, eventKey }) {
    const [monster, setMonster] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        Endpoints.getMonster()
            .then(res => {
                console.log(res)
                // setMonster(res)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [])

    const accordionRef = useRef(null);
    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>{monster.name}</Accordion.Header>
            <Accordion.Body>

            </Accordion.Body>
        </Accordion.Item>
    );
}

export default AccordionMonster;
