const api = require("imslp-api")

const getComposer = async () => {
    const composer = await api.composers(5, 1);
    console.log(composer);
};

const getWork = async () => {
    const work = await api.works(4, 1);
    console.log(work);
};

getComposer();
getWork();