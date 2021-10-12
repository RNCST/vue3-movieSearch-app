import { asyncFn} from './example'

// describe('async test', () => {
//   test('done', () => {
//     asyncFn().then(res => {
//       expect(res).toBe('Done?')
//     })
//   })
// })
// 비동기 테스트내에서 실제로는 fail이 떠야하는데 true가 뜬다. 
// test라는 함수내부에 비동기 패턴이 들어있는지 아닌지를 판단할 수 없다.


describe('async test2', () => {
  test('done', (done) => {
    asyncFn().then(res => {
      expect(res).toBe('Done!')
      done() // 비동기 테스트
    })
  })
  
  test('then', () => {
    return asyncFn().then(res => { //return을 이용
      expect(res).toBe('Done!')
    })
  })

  test('resolves',() => expect(asyncFn()).resolves.toBe('Done!')) //코드 단순화를위한 resolves.(return 생략)

  test('async/aswait',async()=> {
    const res = await asyncFn()
    expect(res).toBe('Done?')
  })
  

  test('async/aswait-long',async()=> {
    const res = await asyncFn()
    expect(res).toBe('Done?')
  }, 7000)

  // test라는함수는 5초까지만 기다릴 수 있는데 세번째 인수로 시간을 더 늘려줄 수 있다.
})