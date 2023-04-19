import './index.scss'

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div>
          <p className="title">Docs</p>
          <ul>
            <li>
              <a
                className="item"
                href="https://docs.celestia.org/community/overview/"
              >
                Community
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="title">Community</p>
          <ul>
            <li>
              <a className="item" href="https://discord.com/invite/je7UVpDuDu">
                Discord
              </a>
            </li>
            <li>
              <a className="item" href="https://twitter.com/CelestiaOrg">
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="title">More</p>
          <ul>
            <li>
              <a
                href="https://github.com/maydaymll/CelestiaPayForBlob"
                className="item"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy-right">
        <p>Copyright © 2023 Celestia submitting PayForBlob transactions</p>
      </div>
    </div>
  )
}

export default Footer
