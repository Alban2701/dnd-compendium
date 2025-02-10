import { useEffect, useState } from "react"
import { Endpoints } from "../_services/endpoints.service"
import { Accordion, Pagination, InputGroup, Form, Container } from "react-bootstrap"
import AccordionMonster from "../components/AccordionMonster"
import LoadingButton from "../components/LoadingButton"
import "../styles/Monsters.css"

const Monsters = () => {
    const [monsters, setMonsters] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [monstersPerPage, setMonstersPerPage] = useState(20)
    const [searchInput, setSearchInput] = useState("")
    const [allMonsters, setAllMonsters] = useState([]);  // Stocke tous les monstres


    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSearchClick = () => {
        if (searchInput === "") {
            setMonsters(allMonsters);
        } else {
            // Sinon, appliquer le filtre
            const filteredMonsters = allMonsters.filter((monster) =>
                monster.name.toLowerCase().includes(searchInput.toLowerCase())
            );
            setMonsters(filteredMonsters);
        }
    };

    useEffect(() => {
        setLoading(true);
        Endpoints.getAllMonsters()
            .then((res) => {
                setAllMonsters(res.data.results || []);
                setMonsters(res.data.results || []);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h1 className="text-center">Chargement</h1>
    } else if (error) {
        return <h1 className="text-center">Erreur : {error.message}</h1>
    } else {
        const totalMonsters = monsters.length;

        const indexOfLastMonster = currentPage * monstersPerPage
        const indexOfFirstMonster = indexOfLastMonster - monstersPerPage
        const currentMonsters = monsters.slice(indexOfFirstMonster, indexOfLastMonster)

        const totalPages = Math.ceil(totalMonsters / monstersPerPage)


        return (
            <>
                <div className="background-container">
                    <div className="content-container">
                        <InputGroup className="mb-3 w-100 opacity-75">
                            <InputGroup.Text id="basic-addon1">
                                <LoadingButton onClick={handleSearchClick}></LoadingButton>
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="Cherchez un monstre"
                                aria-label="searchMonster"
                                aria-describedby="searchMonsterHelpBlock"
                                value={searchInput}
                                onChange={handleInputChange}
                            />
                        </InputGroup >
                        <Accordion alwaysOpen={false} flush className="opacity-50 w-100">
                            {currentMonsters.map((monster, index) => {
                                return (
                                    <div key={index}>
                                        <AccordionMonster monsterUrl={monster.url} eventKey={monster.index} />
                                    </div>
                                );
                            })}
                        </Accordion>
                        <div>
                            <Pagination className="d-flex justify-content-center mt-1 mb-3">
                                <Pagination.First
                                    onClick={() => setCurrentPage(1)}
                                    disabled={currentPage === 1}
                                />
                                <Pagination.Prev
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    disable={currentPage === 1}
                                />
                                <Pagination.Item
                                    onClick={() => setCurrentPage(currentPage - 2)}
                                    hidden={currentPage <= 2}
                                >{currentPage - 2}</Pagination.Item>
                                <Pagination.Item
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    hidden={currentPage <= 1}>{currentPage - 1}</Pagination.Item>
                                <Pagination.Item active>{currentPage}</Pagination.Item>
                                <Pagination.Item
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    hidden={currentPage >= totalPages - 1}>{currentPage + 1}</Pagination.Item>
                                <Pagination.Item
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    hidden={currentPage >= totalPages - 2}>{currentPage + 2}</Pagination.Item>
                                <Pagination.Next
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                />
                                <Pagination.Last
                                    onClick={() => setCurrentPage(totalPages)}
                                    disabled={currentPage === totalPages}
                                />
                            </Pagination>
                        </div>
                    </div>
                </div >
            </>
        )
    }
}

export default Monsters;
