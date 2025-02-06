import API from "./caller.service";

let getAllMonsters = () => {
    return API.get("api/monsters");
};

let getAllClasses = () => {
    return API.get("api/classes");
}

let getSpells = () => {
    return API.get(`api/spells`)
}

let getMonster = (apiUrl) => {
    return API.get(`${apiUrl}`)
}


export const Endpoints = { getAllMonsters, getAllClasses, getSpells, getMonster };