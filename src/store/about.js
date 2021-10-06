export default {
  namespaced: true,
  state: () => ({
    name: 'rncst',
    email: 'rk51302928@gmail.com',
    blog: 'https://rncst.github.io',
    phone: '+82-10-3490-0928',
    image: 'https://avatars.githubusercontent.com/u/76672259?v=4'
  })
  // return으로 객체를 내보낸다.
  //객체데이터는 배열과 똑같이 참조형데이터이고 데이터의 불변성을 유지하려면
  //함수로만들어반환을 해줘야한다. == state가 고유해진다.

}