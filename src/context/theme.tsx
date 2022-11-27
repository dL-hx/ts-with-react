import React from 'react'
import { IThemeProps } from './types'

// 定义传递的主题
export const themes: IThemeProps = {
    'light': {
        color: '#000',
        background: '#eee',
    },
    'dark': {
        color: '#fff',
        background: '#222',
    },
    'green':{
        color: '#fff',
        background: '#0f0',
    },
}

export const ThemeContext = React.createContext(themes.light)