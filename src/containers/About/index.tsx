import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { SectionGithub } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragraph type="main">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum architecto
      reprehenderit amet dicta recusandae? Quo quibusdam aperiam fuga,
      voluptates similique sapiente quae officiis! Perferendis eum ad
      blanditiis, sunt soluta a?
    </Paragraph>
    <SectionGithub>
      <img src="https://github-readme-stats.vercel.app/api?username=MorettiLeonardo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=morettileonardo&layout=compact&langs_count=7&theme=dracula" />
    </SectionGithub>
  </section>
)

export default About
