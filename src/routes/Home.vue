<template>
  <HeadLine />
  <Search />
  <MovieList />
  <!-- 형제 컴포넌트들 -->
  <!-- 부모자식 간의 데이터통신은 provide inject props 등등으로 데이터를 주고받았다. -->
  <!-- 가까운 거리간의 이동은 괜찮지만 조금만 복잡해지면 데이터를 직접 쓰지 않는 컴포넌트까지 넘어가면서
  복잡해질수 있다. -->
  <!-- VueX라는 라이브러리를 통해 Store라는 데이터저장소를 만들어서 Store라는 매개체만 통해서 어디든지 
  다 보내줄 수 있다.-->
</template>


<script>
import HeadLine from '~/components/Headline'
import Search from '~/components/Search'
import MovieList from '~/components/MovieList'

export default {
  components:{
    HeadLine,
    Search,
    MovieList
  }  
}
</script>