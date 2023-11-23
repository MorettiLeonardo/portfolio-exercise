import styled from 'styled-components'

type ButtonProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<ButtonProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '12px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;
  cursor: pointer;
`

export default function Teste() {
  return (
    <>
      <Botao principal>Clique aqui</Botao>
      <Botao fontSize="24px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo principal>Não clique aqui</BotaoPerigo>
    </>
  )
}
