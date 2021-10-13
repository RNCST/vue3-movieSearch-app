import { shallowMount} from '@vue/test-utils'
import Search from '~/components/Search'

describe('components/Search.vue', () => {
  let wrapper

  beforeEach(()=> {
    wrapper = shallowMount(Search)
  })

  test('year ok', () => {
    const year = wrapper.vm.filters.find(filter=> filter.name==='year')
    const yearLength = new Date().getFullYear() - 1985 + 1
    expect(year.items.length).toBe(yearLength)
  })
})