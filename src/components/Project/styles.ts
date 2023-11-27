import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
`

export const ButtonLink = styled.a`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.buttonBackgroundColor};
  font-size: 14px;
  text-decoration: none;
  padding: 8px;
  margin-top: 24px;
  display: inline-block;
`
