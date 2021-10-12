module.export ={
  // nodejs 환경에서 돌아간다.

  moduleFileExtensions: [
    'js',
    'vue'
  ],
  // Jest가 검색할 확장자 목록

  moduleNameMapper: {
    '~/(.*)$': '<rootDir>/src/$1'
  },
  // '~' 경로 별칭을 매핑.
  // <rooDir> 토큰을 이용해 루트 경로를 참조할 수 있음.

  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist'
  ],
  // 무시할 경로를 셋팅

  testURL: 'http:;//localhost',
  // jsdom(HTML)환경에서 URL을 설정한다.
  // https://github.com/facegbook/jest/issues/6766

  transform: {
    '^.+\\.vue$' : 'vue-jest',
    '^.+\\.js$': 'babel-jest'
  }
  // 정규식과 일치하는 파일의 변환 모듈을 지정한다.
}