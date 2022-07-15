const getTheTitles = function(objs) {
    const titles = objs.map(obj => obj.title);
    return titles;
};

module.exports = getTheTitles;
