export default {
  install(app) {
    app.config.globalProperties.$loadImage = (src) => {
      return new Promise((resolve) => {
        const img = document.createElement('img')
        img.src = src
        img.addEventListener('load', () => {
          resolve() // 이미지의 로드의 완료를 보장해주기 위해 Promise를 쓴다
        })
      })
    }
  }
}