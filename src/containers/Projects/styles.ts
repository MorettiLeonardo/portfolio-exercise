import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;

  li {
  }

  a {
    background-color: #4a94cc;
    text-decoration: none;
    color: white;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0px;
    row-gap: 16px;
  }
`
