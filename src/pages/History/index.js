import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Icon from '../../components/atoms/Icon'
import { colors } from '../../styles/colors'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

import Chapter from '../../components/molecules/HistoryChapter'

import { Nav, Msg } from './styles'

import history from '../../routes/history'
import histories from '../../repository/index'

const handleOnDragStart = (e) => e.preventDefault()

const typeUi = {
  assombracao: {
    color: 'red',
    icon: 'laursa'
  },
  local: {
    color: 'blue',
    icon: 'casa'
  },
  artefato: {
    color: 'purple',
    icon: 'pote'
  }
}

export default function History (props) {
  const { match } = props
  const currentHistory = histories[match.params.id]
  const { type } = currentHistory

  const notifyHandler = (event) => {
    console.log(event)
    if (event.isNextSlideDisabled) {
      toast((<Msg><Icon type='estandarteEncarnado' color='#2CB67D' /><e>Parabéns!</e>Você desvendou o {currentHistory.name}</Msg>), {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        onClose: () => history.push('/')
      });
    }
  }

  return (
    <>
      <Nav>
        <Link to='/'>
          <AiOutlineArrowLeft/>
        </Link>
        <h1>{currentHistory.name}</h1>
        <Icon type={typeUi[type].icon} color={colors.primary}/>
      </Nav>
      <AliceCarousel mouseTrackingEnabled buttonsDisabled onSlideChanged={notifyHandler} infinite={false} >
        { currentHistory.chapters
          .map((chapter, index) => (
            <Chapter
              key={index}
              onDrag={handleOnDragStart}
              title={chapter.title}
              text={chapter.text}
              img={chapter.img}
            />
          ))
        }
      </AliceCarousel>
    </>
  )
}
