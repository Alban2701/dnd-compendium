import { useEffect, useState } from "react"
import { Endpoints } from "../_services/endpoints.service"
import { useParams } from "react-router-dom";
import ImageMonster from "../components/ImageMonster";

const SingleMonster = () => {
    const [monster, setMonster] = useState(null)
    const [monsterImage, setMonsterImage] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [imgError, setImgError] = useState(null)

    const index = useParams().index;

    useEffect(() => {
        Endpoints.getMonsterViaIndex(index)
            .then(res => {
                setMonster(res.data)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [index])

    if (loading) {
        return <h1 className="text-center">Chargement</h1>
    } else if (error) {
        return <h1 className="text-center">Erreur : {error.message}</h1>
    } else {
        console.log(monster)
        return (
            <div className="container mt-5">
                <div className="row">
                    {/* Affichage de l'image du monstre */}
                    <div className="col-md-4">
                        <ImageMonster imageUrl={monster.image} />
                    </div>
                    <div className="col-md-8">
                        {/* Informations générales */}
                        <h2>{monster.name}</h2>
                        <p>
                            <strong>Type:</strong> {monster.type}
                            <br />
                            <strong>Alignement:</strong> {monster.alignment}
                            <br />
                            <strong>Taille:</strong> {monster.size}
                            <br />
                            <strong>Points de vie:</strong> {monster.hit_points}
                            <br />
                            <strong>Classe d'armure:</strong> {monster.armor_class[0].value}
                        </p>

                        {/* Statistiques de combat */}
                        <div className="card mb-4">
                            <div className="card-header">
                                <h5>Caractéristiques</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    <li>
                                        <strong>Force:</strong> {monster.strength}
                                    </li>
                                    <li>
                                        <strong>Dextérité:</strong> {monster.dexterity}
                                    </li>
                                    <li>
                                        <strong>Constitution:</strong> {monster.constitution}
                                    </li>
                                    <li>
                                        <strong>Intelligence:</strong> {monster.intelligence}
                                    </li>
                                    <li>
                                        <strong>Sagesse:</strong> {monster.wisdom}
                                    </li>
                                    <li>
                                        <strong>Charisme:</strong> {monster.charisma}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Capacités spéciales */}
                        <div className="card mb-4">
                            <div className="card-header">
                                <h5>Capacités spéciales</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    {monster.special_abilities.map((ability, index) => (
                                        <li key={index}>
                                            <strong>{ability.name}:</strong> {ability.desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="card mb-4">
                            <div className="card-header">
                                <h5>Actions</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    {monster.actions.map((action, index) => (
                                        <li key={index}>
                                            <strong>{action.name}:</strong> {action.desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Actions légendaires */}
                        <div className="card mb-4">
                            <div className="card-header">
                                <h5>Actions légendaires</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    {monster.legendary_actions.map((action, index) => (
                                        <li key={index}>
                                            <strong>{action.name}:</strong> {action.desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Informations supplémentaires */}
                        <div className="card mb-4">
                            <div className="card-header">
                                <h5>Informations supplémentaires</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    <li>
                                        <strong>Langues:</strong> {monster.languages}
                                    </li>
                                    <li>
                                        <strong>Vision dans le noir:</strong> {monster.senses.darkvision}
                                    </li>
                                    <li>
                                        <strong>Perception passive:</strong> {monster.senses.passive_perception}
                                    </li>
                                    <li>
                                        <strong>Rating du défi:</strong> {monster.challenge_rating}
                                    </li>
                                    <li>
                                        <strong>Bonus de compétence:</strong> {monster.proficiency_bonus}
                                    </li>
                                    <li>
                                        <strong>XP:</strong> {monster.xp}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleMonster;