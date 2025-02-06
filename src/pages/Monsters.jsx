import { useEffect, useState } from "react"
import { Endpoints } from "../_services/endpoints.service"
import { Accordion } from "react-bootstrap"
import AccordionMonster from "../components/AccordionMonster"

const Monsters = () => {
    const [monsters, setMonsters] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        Endpoints.getAllMonsters()
            .then(res => {
                setMonsters(res.data.results)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <h1 className="text-center">Chargement</h1>
    } else if (error) {
        return <h1 className="text-center">Erreur : {error.message}</h1>
    } else {
        let sliced_monsters = monsters.slice(0, 19)
        return (
            <>
                <Accordion alwaysOpen={false}>
                    {sliced_monsters.map((monster, index) => {
                        return (
                            <div key={index}>
                                {console.log(monster)}
                                <AccordionMonster monsterId={monster.id} eventKey={monster.id} />
                            </div>
                        );
                    })}
                </Accordion>
            </>
        )
    }
}

export default Monsters;