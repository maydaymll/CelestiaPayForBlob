import React from 'react'
import ReactDOM from 'react-dom'
import deviceQuery from '@/utils/device-query'

import MobilePage from './view-mobile'
import DesktopPage from './view-desktop'

import '@/styles/reset.css'

ReactDOM.render(
  <React.StrictMode>
    {deviceQuery.isMobile && !deviceQuery.isIpad ? (
      <MobilePage />
    ) : (
      <DesktopPage />
    )}
  </React.StrictMode>,
  document.getElementById('root')
)
