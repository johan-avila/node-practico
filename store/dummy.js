const db = {
    "users": [
        {
            _id: 1, name:"Johan"
        }
    ]
};

function list (tabla){

    return db[tabla]
};
function get (tabla, id){
    let col= list(tabla)
    return col.filter(item => item.id === id)[0] || null
};

function upsert (tabla, data){
    
};

function remove (tabla, id  ){};


module.exports = {
    list,
    get, 
    upsert,
    remove
}