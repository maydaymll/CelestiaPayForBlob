import './index.scss'
import logoImgUrl from '@/imgs/logo.svg'

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="logo-wraper">
          <a href="/">
            <img src={logoImgUrl} alt="" className="logo-img" />
          </a>
        </div>
      </div>
      <div className="header-placholder"></div>
    </>
  )
}

export default Header
