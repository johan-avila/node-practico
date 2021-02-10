const { nanoid } = require("nanoid")

const TABLA = "users"

const auth = require("../auth")

module.exports= function(insertedInjection){
    let store= insertedInjection;
    
    if (!store) {
        store = require("../../../store/dummy")
    }

    async function list() {
        return store.list(TABLA)
    }

    async function get(id) {
        return store.get(TABLA, id)
    }

    async function upsert(body) {
        const user = {
            name: body.name,
            username: body.username,
        }

        if (body.id) {
            user.id = body.id;
        } else {
            user.id = nanoid();
        }

        if (body.password || body.username) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: body.password,
            })
        }

        return store.upsert(TABLA, user);
    }
    return {
        list,
        get,
        upsert
    }
}

