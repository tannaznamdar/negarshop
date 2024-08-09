import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import headerCards from '../HeaderCards.vue'


describe('Header Cards', () => {
    it('renders properly', () => {
        const wrapper = mount(headerCards,{
            props:{
                thumbnail:'https://www.uptvs.com/wp-contents/uploads/2024/04/AfieTehran-7-header.jpg',
                hasTag:true,
                tag:{
                    title: '',
                    color: ''
                },
                like:54,
                imdb:'8.1',
                title_en:'Tehran Viper',
                title_fa:'سریال افعی تهران '
            }
        })
        expect(wrapper.text()).toContain('سریال افعی تهران')
    })
})