import Paragraph from '../Paragraph'
import Title from '../Title'

import { Card, ButtonLink } from './styles'

const Project = () => (
  <Card>
    <Title>Nome do projeto</Title>
    <Paragraph type="secondary">Descricao do projeto</Paragraph>
    <ButtonLink>Visualizar</ButtonLink>
  </Card>
)

export default Project
