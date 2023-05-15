import { shallowMount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp/index.vue'

describe('TodoApp.vue', () => {
  /** @type {import('@vue/test-utils').Wrapper} */
  let wrapper = null

  beforeEach(async () => {
    const $route = {
      path: '/'
    }
    wrapper = shallowMount(TodoApp, {
      mocks: {
        $route
      }
    })
    const todos = [
      { id: 1, text: 'eat', done: false },
      { id: 2, text: 'play', done: true },
      { id: 3, text: 'sleep', done: false }
    ]
    await wrapper.setData({
      todos
    })
  })

  test('snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
