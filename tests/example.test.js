import { double } from './example'

describe('group1',() => {
  beforeAll(() => {
    // 모든 테스트가 실행되기전 한번 실행
    console.log('beforeAll');
  })
  afterAll(() => { 
    // 모든 테스트가 실행된 후 한번 실행
    console.log('afterAll');
  })

  beforeEach(() => {
    // 각각 테스트가 실행되기전 실행
    console.log('beforeEach');
  })
  afterEach(() => {
    // 각각 테스트가 실행된후 실행
    console.log('afterEach');
  })

  test('first test', () => {
    expect(123).toBe(123)
  })
  test('number param', () =>{
    expect(double(3)).toBe(6)
    expect(double(10)).toBe(20)
  })
  test('no param', () =>{
    expect(double()).toBe(0)
  })
}) // test grouping

