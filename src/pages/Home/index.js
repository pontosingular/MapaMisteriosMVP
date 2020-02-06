import React from 'react'

import Map from '../../components/MapTest'
import MainTemplate from '../../components/templates/MainTemplate'

export default function Home () {
  return (
    <MainTemplate current='explorar'>
      <Map />
    </MainTemplate>
  )
}
