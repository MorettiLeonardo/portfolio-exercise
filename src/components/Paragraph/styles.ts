import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => (props.type === 'main' ? '#282a35' : '#949494')};
`
