import { shallowMount } from '@vue/test-utils'
import router from '~/routes'
import store from '~/store'
import Hedear from '~/components/Header'

describe('components/Header.vue', () => {
  let wrapper
  beforeEach(async () => {
    window.scrollTo = jest.fn()
    // scrollTo는 테스트상에서 조절할수없기때문에 조절되는것처럼 꾸며주기위해 mocking함수사용
    router.push('/movie/tt1234567')
    await router.isReady()
    // test router 셋팅
     wrapper = shallowMount(Hedear, {
      global: {
        plugins: [
          router,
          store
        ]
      }
    })
  })
  test('경로 일치를 하지 않을때',() => {
    const regExp = undefined
    expect(wrapper.vm.isMatch(regExp)).toBe(false)
  })

  test('경로 일치할떄',() => {
    const regExp = /^\/movie/
    expect(wrapper.vm.isMatch(regExp)).toBe(true)
  })

  test('경로가 일치하면 안될때', () => {
    const regExp = /^\/test/
    expect(wrapper.vm.isMatch(regExp)).toBe(false)
  })
})