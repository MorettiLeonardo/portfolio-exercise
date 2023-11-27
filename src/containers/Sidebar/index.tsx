import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, ThemeButton, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Leonardo M.</Title>
      <Paragraph fontSize={16} type="secondary">
        MorettiLeonardo
      </Paragraph>
      <Description type={'main'} fontSize={12}>
        Engenheiro Front-end
      </Description>
      <ThemeButton>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
