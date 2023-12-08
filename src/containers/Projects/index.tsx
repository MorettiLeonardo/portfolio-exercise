import { useEffect, useState } from 'react'
import Project from '../../components/Project'
import Title from '../../components/Title'

import { List } from './styles'

export default function Projects() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users/morettileonardo/repos`)
      .then((res) => res.json())
      .then((resJson) => {
        setRepos(resJson)
      })
  }, [])
  return (
    <section>
      <Title fontSize={16}>Projeto</Title>
      <List>
        {repos.map(({ id, name, html_url }) => {
          return <Project key={id} title={name} button={html_url}></Project>
        })}
      </List>
    </section>
  )
}
