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

let getMonsterViaUrl = (apiUrl) => {
    return API.get(`${apiUrl}`)
}

let getMonsterViaIndex = (index) => {
    return API.get(`api/monsters/${index}`)
}

let getMonsterImg = (imageUrl) => {
    let res = API.get(`${imageUrl}`)
    return res;
}


export const Endpoints = { getAllMonsters, getAllClasses, getSpells, getMonsterViaUrl: getMonsterViaUrl, getMonsterImg, getMonsterViaIndex };