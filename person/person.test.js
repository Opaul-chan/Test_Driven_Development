const Person = require('./person')
//beforeAll คือให้ทำของใน beforeAll ก่อนค่อยทำ describe
//วิธี grouping test create function describe ครอบ functionย่อย 
describe('Person',() => {
    let person; //ต้องประกาศนอก beforeAll เพราะไม่งั้นจะ blockscope 
    //beforeAll clear database >>> run 1 time
    // beforeAll(() => {
    //     person = new Person('Opaul',100);
    // });
    //beforeEach จะ run ทุกครั้งที่มีการ run teatcase
    beforeEach(()=>{
        person = new Person('Opaul',100);//ใส่บรรทัดนี้ไว้ใน beforeEach เพื่อให้มัน runใหม่ทุกครั้งก่อนเข้าTest
        console.log('date', new Date())
    })
    //functionย่อยที่1
    test('initial value', () =>{
        // const person = new Person('Opaul',100); ไม่ต้องใส่ตรงนี้ละเพราะเอาไปใส่ใน beforeAll แล้ว
        // test case
        expect(person.name).toBe('Opaul')
        expect(person.power).toBe(100)
    })
    //functionย่อยที่2
    describe('method eat', () => {
        test('initial value', () =>{
            //const person = new Person('Opaul',100); ไม่ต้องใส่ตรงนี้ละเพราะเอาไปใส่ใน beforeAll แล้ว
            // test case
            person.eat(1);
            expect(person.power).toBe(101)
        });
    });  
    //functionย่อยที่3
    describe('method run', () => {
        test('initial value', () =>{
            //const person = new Person('Opaul',100); ไม่ต้องใส่ตรงนี้ละเพราะเอาไปใส่ใน beforeAll แล้ว
            // test case
            person.run(1);
            expect(person.power).toBe(100-2)
        });
        test('should thow error if hour less than zero',()=>{
            expect(() =>{
                person.run(-2)
            }).toThrow()
        })
    });  
    //functionย่อยที่4
    describe('method study', () => {
        test('initial value', () =>{
            //const person = new Person('Opaul',100); ไม่ต้องใส่ตรงนี้ละเพราะเอาไปใส่ใน beforeAll แล้ว
            // test case
            person.study(5);
            expect(person.power).toBe(95)
        });
    });  
});
//afterAll and afterEach
