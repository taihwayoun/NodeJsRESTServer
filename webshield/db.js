
//Search by names----------------------------------
function searchByFirstName(db, fn=''){
    if (fn=='') return [];
    fn = fn.toLowerCase();
    return db.filter(e=>e.first_name.toLowerCase().includes(fn))
} 

function searchByLastName(db, ln=''){
    if (ln=='') return [];
    ln = ln.toLowerCase();
    return db.filter(e=>e.last_name.toLowerCase().includes(ln))
} 

//expected value: 1                        
//console.log(searchByFirstName('l').length);
//expected value: 2, 0
//console.log(searchByLastName('r').length);
//console.log(searchByLastName().length);
//-----------------------------------------------

function searchByAddress(db, adr=''){
    if (adr=='') return [];
    adr = adr.toLowerCase();
    return db.filter(e=>e.address.toLowerCase().includes(adr));
}

//expected value: 2
//console.log(searchByAddress('Yoki'));
//expected value: []
//console.log(searchByAddress());
//-------------------------

function searchByAge(db, n=0, op='exactly'){
    if (op=='exactly')
        return db.filter(e=>e.age ==n);
    else if (op=='greater') 
        return db.filter(e=> e.age>=n);
    else if (op=='less') 
        return db.filter(e=> e.age<n);
    return [];
}

//update
function toLocalTimeNow () {
    var offset = (new Date().getTimezoneOffset() / 60) * -1;
    return new Date(Date.now() + offset);
  };

function update(db, ps={}){
    if (ps=={}) return [];
    let orig = getById(db, ps.id);
    let ind = db.indexOf(orig);
    db[ind] = ps;
    db[ind].status='updated: '+ toLocalTimeNow();
    return [db[ind]];
}


//Delete -------------------------
//for removal, 'shift' is used to delete and return the first item
//while 'pop' works to take out the last, and then 'slice' and the spread operator together remove an inside element
//TODO: identity function needs to be revised to make sure the order of the key-value pairs doesn't matter

/*function remove(ps){
    if (ps==people[0]) return people.shift();
    if (ps==people[people.length-1]) return people.pop();
    ind = people.indexOf(ps);
    removed = people[ind];
    if (ind < 0) return ind;
    people= [...people.slice(0, ind), ...people.slice(ind+1)].length;
    return removed;
}
*/

function remove(db, id){
    let ps = db.filter(e=>e.id==id).pop();
    if (ps==undefined) return [];
    ind = db.findIndex(e=>e==ps);
    [db[ind], db[db.length-1]] =[db[db.length-1], db[ind]];  //deleting a middle element of an array is a real pain
    //db = [...db.slice(0, ind), ...db.slice(ind+1)]; //I wonder why this didn't work!!!
    db.pop();
    ps.status='deleted ' + toLocalTimeNow();
    return [ps];
}


function getById(db, id){
    for (let p of db){
        if (p.id ==id) return p;
    }
    return [];
}

//see if you get the same object returned as the input
//console.log(people.length);
//toberemoved = {id:7, first_name: 'Torem', last_name: 'Opsut', age: 59, address: 'Nowhere, Together, Dontcome'}
//console.log(remove(7));
//console.log(people.length)
//console.log(remove(8));
//console.log(people.length)
//for (let i=0;i<12;i++)
//    remove(i);
//console.log(people.length);
//Add -----------------------------------------------
//the data table is sorted first, in case the last element doesn't have the max id value
//the new item is assigned now the new highest id value, as per the way the constructor works.
function add(db, p){
    db.sort((a,b)=>a.id > b.id); 
    p.id = db[db.length -1].id + 1; 
    p.status='added ' + toLocalTimeNow();
    db.push(p);
    return [db[db.length-1]];
}

//if you get the return value same as the input, it confirms the correcting working of the function
//ps = new Person('Jamie','Youn','28', 'Serene Ave, Las Vegas, USA');
//console.log(add(people, ps));
//console.log(people.length);

module.exports= {getById, add,remove, update, searchByAge,searchByAddress,searchByFirstName,searchByLastName,toLocalTimeNow};