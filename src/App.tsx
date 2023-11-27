import { ThemeProvider } from 'styled-components'

import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import LightTheme from './themes/Light'
import DarkTheme from './themes/Dark'
import { useState } from 'react'

function App() {
  const [usingDarkTheme, setUsingDarkTheme] = useState(true)

  function chageTheme() {
    setUsingDarkTheme(!usingDarkTheme)
  }

  return (
    <ThemeProvider theme={usingDarkTheme ? DarkTheme : LightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar changeTheme={chageTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
