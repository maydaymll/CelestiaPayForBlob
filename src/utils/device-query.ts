export class DeviceQuery {
  userAgent = ''

  constructor(userAgent: string) {
    this.userAgent = userAgent
  }

  get isIOS() {
    return /iP(hone|od|ad)/.test(this.userAgent)
  }

  get isAndroid() {
    return /Android|Adr/.test(this.userAgent)
  }

  get isMobile() {
    return /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(
      this.userAgent
    )
  }

  get isPC() {
    return !this.isMobile
  }

  get isIpad() {
    return /iPad/.test(this.userAgent)
  }

  get isIpadMini() {
    return /iPad/.test(this.userAgent) && window?.screen?.width === 768
  }
}

export default new DeviceQuery(window.navigator.userAgent)
