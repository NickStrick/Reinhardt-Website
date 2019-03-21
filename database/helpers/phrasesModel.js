const db = require('../dbConfig.js');

module.exports = {
    get,
    add,
    remove,
    update,
}

function get(id) {
    let query = db('phrases');

    if (id) {
        return query
            .where('id', id)
            .first()
    }

    return query;
}

function add(phrase) {
    phrase = { ...phrase };
    if (phrase.description === undefined) {
        phrase = { ...phrase, phraseTitle: "" }
    }
    if (phrase.admin_id === undefined) {
        phrase = { ...phrase, user_id: 1 }
    }
    console.log(phrase)
    return db('phrases')
        .insert(phrase)
        .then(([id]) => ({ id }));
}

function remove(id) {
    return db('phrases')
        .where('id', id)
        .del();
}

function update(id, changes) {
    return db('phrases')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? this.get(id) : null));
}