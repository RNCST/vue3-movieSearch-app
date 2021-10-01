// 페이지 관리해주는 파일
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'

export default createRouter({
  history: createWebHashHistory(),
    //Hash모드 History 모드
    //Hash모드 => google.com/#/search
    //History모드 => Server셋팅작업이 필요함. 
  routes: [
    //pages를 저장
    {
      path:'/',
      // 페이지를 구분해주는경로
      // http://google.com + '/' mainPage
      component:Home
    },
    {
      path:'/movie',
      component:Movie
    },
    {
      path:'/about',
      // http://google.com + '/about' 
      component:About
    },
    
  ]
})