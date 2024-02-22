import { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#2e3e8c',
  warning: '#e08869',
  info: '#B5D99C',
  background: '#E4E9F1'
}

export const shadow = [
  '0px 4px 12px rgba(0,0,0,0.1)',
  '0px 5px 12px rgba(0, 0, 0, 0.2)'
]

export function makeOpaque (col: string, opacity: number): string {
  if (col[0] === '#') {
    col = col.slice(1)
  }
  const num = parseInt(col, 16)
  let r = num >> 16
  if (r > 255) r = 255
  else if (r < 0) r = 0
  let b = (num >> 8) & 0x00ff
  if (b > 255) b = 255
  else if (b < 0) b = 0
  let g = num & 0x0000ff
  if (g > 255) g = 255
  else if (g < 0) g = 0
  return `rgba(${r}, ${b}, ${g}, ${opacity})`
}

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-weight: normal;
    font-family: inherit;
    box-sizing: border-box;
  }
  html, body {
    background: ${colors.background};
    font-size: calc(12px + 2 * ((100vw - 320px) / 880));
    font-family: 'Roboto', 'sans-serif';
  }
  main {
    min-height: 100vh;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  tbody > tr {
    border-bottom: 1px solid #eee;
    vertical-align: middle;
  }
  thead, tbody, tr, th, td {
      border: 0;
      margin: 0;
      font-family: inherit;
      text-align: inherit;
  }
  th {
      padding: 1em;
  }
  td {
      padding: .8em 1em;
  }
  thead {
      font-family: 'Roboto', 'sans-serif';
      font-weight: 200;
      vertical-align: middle;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.45);
  }
  tbody {
      font-family: 'Open Sans', 'sans-serif';
      font-weight: 300;
      font-size: inherit;
      color: rgba(0, 0, 0, 0.65);
  }
  input, textarea, p {
    font-family: 'Open Sans', 'sans-serif';
  }
`
