const Tab = require('../models/tab.model.js');

async function createTab(data) {

    if (!data.name) {
        throw new Error("O nome da tablatura é obrigatório!");
    } else if (!data.artist) {
        throw new Error("O artista da tablatura é obrigatório!");
    } else if (!data.instrument) {
        throw new Error("O instumento da tablatura é obrigatório!");
    } else if (!data.difficulty) {
        throw new Error("O nível de dificuldade da tablatura é obrigatório!");
    } else if (!data.tab) {
        throw new Error("A tablatura é obrigatória!");
    }

    return Tab.create(data);

}

async function findOneTab(tabId){

    const tab = await Tab.findById(tabId);

    if(!tab){
        throw new Error(`Não foi possível achar nenhum tablatura com o id: ${tabId} no banco de dados`)
    }
     
    return tab
}


module.exports = {
    createTab,
    findOneTab
}