// ./tests/components/TheFooter.test.js

import { mount } from '@vue/test-utils'
import TheFooter from '../../src/components/TheFooter.vue'

import '../../src/fontAwesome'


test('TheFooter.vue component imports successfully', async () => {
    
    expect(TheFooter).toBeTruthy()

})


test('TheFooter.vue component mounts successfully', async () => {

    const wrapper = mount(TheFooter)

    expect(wrapper.html()).toContain('<footer ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</footer>')
    
})
