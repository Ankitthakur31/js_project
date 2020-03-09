//key based storage
let data = new Map();
data.set(1, {id : 101 , name : "Ankit"});
data.set(2, {id : 202 , name : "Harshal"});
data.set(3, {id : 303 , name : "Kartik"});
data.set(4, {id : 404 , name : "Forum"});
data.set(5, {id : 505 , name : "HArsh"});
data.set(6, {id : 606 , name : "Danish"});

data.set(7, {id : 101 , name : "Ankit"});

data.forEach((n , i ) => {
    console.log(JSON.stringify(n));
})
console.log();
for ( let i of data.entries() ) {
    console.log(i);
}


