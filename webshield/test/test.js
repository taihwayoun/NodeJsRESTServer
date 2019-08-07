const assert = require('assert');
const db = require('../db.js');
const Person = require('../Person.js');  //data model
const init_data= require('../data.js');  //presented as existing data
//------------------------------------------------------------------------bring in the existing data into memory
let people=[];
let n=0;
for (p of init_data){
    let ps = new Person(p.first_name,p.last_name,p.age,p.address);
    ps.status = "created at: " + db.toLocalTimeNow();
    ps.id = ++n;
    people.push(ps);
}
//----------------------------------------------------------------------
/*
{first_name: 'Korem', last_name: 'Imsuk', age: 34, address: 'Newhere, Thank You, USA'},
{first_name: 'Jorem', last_name: 'Imsuj', age: 44, address: 'Nere, Gomaum, Country'},
{first_name: 'Gorem', last_name: 'Ipsug', age: 55, address: 'Serum, Yoki City, Nara'},
{first_name: 'Hello', last_name: 'World', age: 15, address: 'Righthere, Yoki City, Nara'}
*///-----------------------------------------------------------------------------------------

//console.log(db.update(people, {id:1, age:28}));

describe('search funtions', function() {
  describe('#db.searchByFirstName()', function() {
    it('should be true', function() {
      assert.equal(0, db.searchByFirstName(people, "0").length);
    });
    it('should be 1', function() {
      assert.equal(1, db.searchByFirstName(people, "Hello").length);
    });
    it('should be 1', function() {
      assert.equal(1, db.searchByFirstName(people, "ll").length);
    });
    it('should be Ipsug', function() {
      assert.equal('Ipsug', db.searchByFirstName(people, "Gorem")[0].last_name);
    });
  });
  describe('#db.searchByLastName()', function() {
    it('should be true', function() {
      assert.equal(0, db.searchByLastName(people, "Lastname").length);
    });
    it('should be 1', function() {
      assert.equal(1, db.searchByLastName(people, "World").length);
    });
    it('should be 44', function() {
      assert.equal(44, db.searchByLastName(people, "suj")[0].age);
    });
  });
  describe('#db.searchByAge()', function() {
    it('should be true', function() {
      assert.equal(0, db.searchByAge(people).length);
    });
    it('should be 16', function() {
      assert.equal(16, db.searchByAge(people, 1, 'greater').length);
    });
    it('should be 1', function() {
      assert.equal(55, db.searchByAge(people, 55,'exactly')[0].age);
    });
  });
  describe('#db.searchByAddress()', function() {
    it('should be true', function() {
      assert.equal(0, db.searchByAddress(people).length);
    });
    it('should be 4', function() {
      assert.notEqual(3, db.searchByAddress(people, "USA").length);
    });
    it('should be 0', function() {
      assert.notEqual(1, db.searchByAddress(people, "0").length);
    });
   });
   describe('#db.update()', function() {
    it('should be true', function() {
      assert.equal(28, db.update(people, {id:10, age:28})[0].age);
    });
    it('should be true', function() {
      assert.equal(true, db.update(people, {id:10, age:2})[0].status.includes("updated"));
   });
   it('should be true', function() {
    assert.equal(10, db.update(people, {id:10})[0].id);
   });
  });
  describe('#db.add()', function() {
    it('should be true', function() {
      assert.equal(18, db.add(people, {first_name: 'TH',last_name:'Youn', age:18, address:"2455 W Serene Ave, Las Vega, NV"})[0].age);
    });
    it('should be true', function() {
      assert.equal(true, db.add(people, {id:10, age:2})[0].status.includes("added"));
    });
   it('should be true', function() {
    assert.notEqual(10, db.add(people, {id:10})[0].id);
   });
   it('should be true', function() {
    assert.equal(true, people.length > 18);
   });
  });
});
