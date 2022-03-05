//npm install jest
//npm test
//Test Driven Development of TDD
const { add, mul, sub, div, mod, power,fetchData } = require('./index')

// import {add, mul} from './index' แบบ react


// add
test('adds 1 + 2 to equal 3', () => {
  //test case
  const result = add(2, 3)
  expect(add(1, 2)).toBe(3);
}
);

//multiple
test('mul 2 * 3 to equal 6' , () => {
  // test case
  const result = mul(2, 3)
  expect(result).toBe(6)
})

// subtract
test('sub 3 - 2 to equal 1' , () => {
  // test case
  const result = sub(3, 2)
  expect(result).toBe(1)
})

// divide
test('div 3/1 to equal 3' , () => {
  // test case
  const result = div(3, 1)
  expect(result).toBe(3)
})
// mod
test('mod 6%2 to equal 0' , () => {
  // test case
  const result = mod(6, 2)
  expect(result).toBe(0)
})
// power
test('power 3**2 to equal 9' , () => {
  // test case
  const result = power(3, 2)
  expect(result).toBe(9)
});

test('fetchData return first_name = Janet with async await', async () => {
  const data = await fetchData()
 expect(data.first_name).toBe('Janet')
});

test('fetchData return first_name = Janet with promise',() => {
  fetchData().then((data) => {
    expect(data.first_name).toBe('Janet')
  });
});