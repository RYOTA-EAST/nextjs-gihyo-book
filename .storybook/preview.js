import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../src/themes'
import * as NextImage from 'next/image'
import React from 'react'

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    transition: .25s;
    color: #000000;
  }
`

// Themeの適用
export const decorators = [
  (Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {Story()}
  </ThemeProvider>
),
];

// next/imageの差し替え
const OriginalNextImage = NextImage.default;