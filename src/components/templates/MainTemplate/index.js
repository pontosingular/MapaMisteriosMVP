import React from 'react'

import TabMenu from '../../molecules/TabMenu'
import ContentResumePopup from '../../molecules/ContentResumePopup'
import { Container } from './styles'

import useUiControl from '../../../hooks/useUiControl'

const typeToIcon = {
  assombracao: 'laursa',
  local: 'casa'
}

export default function MainTemplate (props) {
  const {
    closeResume,
    resumeContent
  } = useUiControl()
  return (
    <Container>
      <main>
        {props.children}
      </main>
      <TabMenu
        explorar={props.current === 'explorar'}
        inventario={props.current === 'inventario'}
        perfil={props.current === 'perfil'}
      />
      {console.log(resumeContent)}
      <ContentResumePopup
        id={resumeContent.content.id}
        visible={resumeContent.open}
        title={resumeContent.content.name}
        icon={typeToIcon[resumeContent.content.type]}
        img={resumeContent.content.coverImg}
        onClose={closeResume}
        onRange
      />
    </Container>
  )
}
