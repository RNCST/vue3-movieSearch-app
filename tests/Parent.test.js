import { shallowMount } from '@vue/test-utils'
import Parent from './Parent'

test('Mount', () => {
  const wrapper = shallowMount(Parent)
  // mount는 모든 연결된 컴포넌트들을 렌더링해서 테스트하게되어서 비효율적인데
  // shallowMount는 하위 컴포넌트들을 가짜로 만들어서 렌더링 하는척만 한다. 
  expect(wrapper.html()).toBe('')
})