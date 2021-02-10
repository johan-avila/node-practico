const db = {
    "users": [],
    "auth":[]
};

async function list (tabla){

    return db[tabla]
};
async function get(tabla, id){
    let col= list(tabla)
    
    return col.filter(item => item.id == id)[0] || null
};

async function upsert(tabla, data){
    if(!db[tabla]){
        db[tabla] = []
    }
    
    db[tabla].push(data)
    return data
};

async function query (tabla, q  ){
    
    let col = await list(tabla)
    let keys = Object.keys(q)
    
    return col.filter(item => item[keys[0]] == q[keys])[0] || null
};
async function remove (tabla, id  ){};


module.exports = {
    list,
    get, 
    upsert,
    remove,
    query
}