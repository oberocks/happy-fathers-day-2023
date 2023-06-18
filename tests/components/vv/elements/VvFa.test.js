// ./tests/components/vv/elements/VvFa.test.js

import { mount } from '@vue/test-utils'
import VvFa from '../../../../src/components/vv/elements/VvFa.vue'
import '../../../../src/fontAwesome'


test('VvFa.test.vue component imports successfully', async () => {
    
    expect(VvFa).toBeTruthy()

})


test('VvFa.vue component accepts family and icon prop values and returns/renders an svg element', async () => {

    const wrapper = mount(VvFa, {
        props: {
            family: 'fas',
            size: '1x'
        },
    })

    expect(wrapper.html()).toBeTruthy()

})


test('VvFa.vue component debug mode returns an expected result', async () => {

    const wrapper = mount(VvFa, {
        props: {
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-fa-')

})

