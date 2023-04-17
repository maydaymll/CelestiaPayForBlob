import './index.scss'
import Header from '@/components/view-desktop/header'
import Footer from '@/components/view-desktop/footer'
import { useEffect, useRef, useState } from 'react'
import PayForBlobForm from './components/pay-for-blob-form'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const DesktopPage: React.FC = () => {
  return (
    <section className="home-page ignorevw-width">
      <Header />
      <PayForBlobForm></PayForBlobForm>
      <Footer />
      <ToastContainer draggable={false} />
    </section>
  )
}

export default DesktopPage
