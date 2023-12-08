import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { SectionGithub } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragraph type="main">
      Olá, eu sou o Leonardo, programador front-end Tenho interesse pelas áreas
      de UX, front-end, ecossistema JavaScript. Atualmente estou atuando na área
      de freelancer, cursando Análise e Desenvolvimento de Sistemas na PUCPR,
      Curso OneBitCode FullStack JavaScript e Engenheiro Front-End na EBAC.
    </Paragraph>
    <SectionGithub>
      <img src="https://github-readme-stats.vercel.app/api?username=MorettiLeonardo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=morettileonardo&layout=compact&langs_count=7&theme=dracula" />
    </SectionGithub>
  </section>
)

export default About
