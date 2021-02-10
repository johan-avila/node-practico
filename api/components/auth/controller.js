const bcrypt = require("bcrypt")
const TABLA = "auth"
const { sign } = require("../../../auth")

module.exports = function (insertedInjection) {
    let store = insertedInjection;

    if (!store) {
        store = require("../../../store/dummy")
    }
    async function login(username, password) {
        const data = await store.query(TABLA, { username })

        return bcrypt.compare(password, data.password)
            .then(itsPasswod => {
                if (itsPasswod) {
                    delete data.password
                    let token = sign(data)
                    return token
                } else {
                    throw new Error("Data invalida")
                }
            })
            .catch(error => {
                throw new Error("Error interno")
            })
    }

    async function upsert({ username, password, id }) {

        let authData = {
            id
        };
        if (password) {
            authData = { ...authData, password: await bcrypt.hash(password, 2) }
        }

        if (username) {
            authData = { ...authData, username }
        }
        return store.upsert(TABLA, authData)
    }
    return {
        upsert,
        login
    }
}

