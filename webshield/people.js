// intial data -------------------------------------
const  provided = [
    {first_name: 'Lorem', last_name: 'Ipsul', age: 109, address: 'Somewhere, City Europe, Country'},
    {first_name: 'Morem', last_name: 'Apsum', age: 10, address: 'Where, Europe, USA'},
    {first_name: 'Norem', last_name: 'Ipsun', age: 19, address: 'Some, Here, Country'},
    {first_name: 'Poremo', last_name: 'Epsup', age: 29, address: 'Omewhere, There, Dontcome'},
    {first_name: 'Qorema', last_name: 'Ipsuq', age: 9, address: 'Mewhere, Nowhere, Country'},
    {first_name: 'Roremi', last_name: 'Apsurl', age: 39, address: 'Here, Inme, Nara'},
    {first_name: 'Sorem', last_name: 'Ipsus', age: 39, address: 'Ewhere, Inyou, USA'},
    {first_name: 'Torem', last_name: 'Opsut', age: 59, address: 'Nowhere, Together, Dontcome'},
    {first_name: 'Vorem', last_name: 'Ipsuv', age: 69, address: 'Anywhere, Alone, DONTCOME'},
    {first_name: 'Xorem', last_name: 'Ipsux', age: 79, address: 'Somewhere, Victory, Nara'},
    {first_name: 'Yorem', last_name: 'Ibsuy', age: 89, address: 'Somewhere, Victors, USA'},
    {first_name: 'Zorem', last_name: 'Imsuz', age: 34, address: 'Newhere, Losers, Nara'},
    {first_name: 'Korem', last_name: 'Imsuk', age: 34, address: 'Newhere, Thank You, USA'},
    {first_name: 'Jorem', last_name: 'Imsuj', age: 44, address: 'Nere, Gomaum, Country'},
    {first_name: 'Gorem', last_name: 'Ipsug', age: 55, address: 'Serum, Yoki City, Nara'},
    {first_name: 'Hello', last_name: 'World', age: 15, address: 'Righthere, Yoki City, Nara'},
]  //total: 16 now

//Person class----------------------------------------
function Person (first_name,last_name, age, address){
    this.id = (people==undefined || people.length==0)? 0 : people[people.length-1].id + 1;
    this.id= people.length;  //id is auto_increased, starting at 0;
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
    this.address = address;
}
//----------------------------------------------------

//actual in-memory db table
const people=[];
for (p of provided){
    people.push(new Person(p.first_name,p.last_name,p.age,p.address));
}

module.exports = {Person,people};