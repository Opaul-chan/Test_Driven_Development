const add = (a, b) => {
    return a + b;
  };
  
  const mul = (a, b) => {
    return a * b;
  };
  
  const sub = (a, b) => {
    return a - b;
  };
  
  const div = (a, b) => {
    return a / b;
  };
  
  const mod = (a, b) => {
    return a % b;
  };
  
  const power = (a, b) => {
    return a ** b;
  };
const fetch = require('node-fetch')

const fetchData = async () => {
  const url = 'https://reqres.in/api/users/2';
  const res = await fetch(url);

  const jsonResult = await res.json()
  return jsonResult.data
};

fetchData();
//structuring Object แบบเต็ม
/*const allFunction = {
    addFunction: add,
    mulFunction: mul,
    subFunction: sub,
    divFunction: div,
    modFunction: mod,
    powerFunction: power,
    fetchDataFunction: fetchData
};*/
//structuring Object แบบย่อ
const allFunction ={
  add:add,
  mul:mul,
  sub:sub,
  div:div,
  mod:mod,
  power:power,
  fetchData:fetchData
}
//เขียนแบบไม่ใช้ Destructuring
// const add2 = allFunction.addFuction;
// const mul2 = allFunction.mulFunction;
//Destructuring
//เขียนแบบใช้ Destructuring ex.เอา function addFuction มาเก็บไว้ใน add2 >>> ช่วยให้codeสั้นขึ้น
// const {addFunction: add2,mulFunction: mul2,subFunction: sub2,divFunction: div2, modFunction: mod2,powerFunction:power2,fetchDataFunction:fetch2} = allFunction;
//console.log('addFunction',addFunction(2,3))
// console.log('addFunction',add2(2,3))
module.exports = allFunction;

