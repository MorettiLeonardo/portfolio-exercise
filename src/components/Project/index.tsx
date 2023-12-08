// import Paragraph from '../Paragraph'
import Title from '../Title'

import { Card, ButtonLink } from './styles'

type Props = {
  title: string
  // paragraph: string
  button: string
}

const Project = ({ title, button }: Props) => (
  <Card>
    <Title>{title}</Title>
    {/* <Paragraph type="secondary">{paragraph}</Paragraph> */}
    <ButtonLink>
      <a href={button} target="_blank" rel="noreferrer">
        Visualizar
      </a>
    </ButtonLink>
  </Card>
)

export default Project
