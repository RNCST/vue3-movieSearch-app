import {createApp} from 'vue'
import App from './App'
// import router from './routes/index.js'index.js를 쓰는경우 생략가능.
import router from './routes'
import store from './store'
import loadImage from './plugins/loadImage'

createApp(App)
.use(loadImage)
.use(router) // use => 프로젝트에 특정한 플러그인을 연결할떄 쓴느 메소드 
.use(store)
.mount('#app')