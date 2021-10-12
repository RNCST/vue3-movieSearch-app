// import * as example from './example'

// describe('async test', () => {
//   test('async/aswait', async () => {
//     jest.spyOn(example, 'fetchMovieTitle').mockResolvedValue('Done!') 
//     // 시간절약, 모의함수로 로 결과값을 유도
//     const res = await example.fetchMovieTitle()
//     expect(res).toBe('Done!')
//   }, 7000)
// })

import axios from 'axios'
import { fetchMovieTitle } from './example'

describe('movie', () => {
  test('movie title change', async () => {
    axios.get = jest.fn(() => {
      return new Promise(resolve => {
        resolve({
          data: {
            Title: 'Frozen II'
          }
        })
      })
    })
    // 네트워크에러(외부요인)과는 상관없이 로직테스트를 위해 axios로 가져오는 결과값을 모의로만들어준다.
    const title = await fetchMovieTitle()
    expect(title).toBe('Frozen ii')
  })
})