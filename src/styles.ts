import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  salmon: '#FFEBD9',
  lightSalmon: '#fff8f2',
  pink: '#E66767',
  lightPink: '#e97676',
  branco: '#fff'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCSS = createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media(max-width: ${breakpoints.desktop}) {
  width: 80%;
  overflow: hidden;
}
}
`
export const Button = styled.button`
  width: 100%;
  padding: 0.24rem 0;
  border: none;
  background-color: ${colors.salmon};
  font-weight: 700;
  font-size: 0.87rem;
  line-height: 1rem;
  color: ${colors.pink};

  &:hover {
    background-color: ${colors.lightSalmon};
    cursor: pointer;
  }

  &.margin-bottom {
    margin-bottom: 0.5rem;
  }
`

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.1rem;
  color: ${colors.salmon};

  &.margin-bottom {
    margin-bottom: 1rem;
  }
`
