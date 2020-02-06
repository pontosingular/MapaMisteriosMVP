import React from 'react'

import Icon from '../../atoms/Icon'
import { AiOutlineEnvironment, AiOutlineUser } from 'react-icons/ai'
import { FaRunning } from 'react-icons/fa'
import history from '../../../routes/history'

import { colors } from '../../../styles/colors'
import { Container, Button, Mask } from './styles'

export default function ContentResumePopup ({
  id,
  title,
  points,
  length,
  visitedCount,
  icon,
  onRange,
  distance,
  onClose,
  visible,
  img
}) {
  const discoverHandler = () => (onRange && history.push(`/history/${id}`))
  if (visible) {
    return (
      <>
        <Mask onClick={() => onClose()}/>
        <Container >
          <div>
            <header><Icon type={icon} color={colors.secondary} /></header>
            <main>
              <img className='avatar' src={img} />
              <div>
                <h3>{title}</h3>
                <div>
                  {
                    points
                      ? (
                        <span>
                          <AiOutlineEnvironment size={16} color={colors.secondary}/>
                          {`${points} Pontos`}
                        </span>
                      )
                      : ''
                  }
                  {
                    visitedCount
                      ? (
                        <span>
                          <AiOutlineUser size={16} color={colors.secondary}/>
                          {`${visitedCount} Pessoas concluíram`}
                        </span>
                      )
                      : ''
                  }
                </div>
              </div>
            </main>
          </div>
          <footer>
            <Button available={onRange} onClick={discoverHandler} >
              {
                onRange
                  ? 'Descobrir'
                  : `Ponto a ${distance} km de distância!`
              }
            </Button>
          </footer>
        </Container>
      </>
    )
  } else return ''
}
