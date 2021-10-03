<template>
  <div class="container">
    <input
      class="form-control"
      v-model="title"
      type="text"
      placeholder="Search for Movies" 
      @keyup.enter="apply" />
    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option
          v-if="filter.name=== 'year'"
          value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button
      class="btn btn-primary"
      @click="apply">
      Apply
    </button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: "",
      type: "movie",
      number: 10,
      year: "",
      filters: [
        {
          name: "type",
          items: ["movie", "series", "episode"],
        },
        {
          name: "number",
          items: [10, 20, 30],
        },
        {
          name: "year",
          items: (() => {
            const years = [];
            const thisYear = new Date().getFullYear();
            for (let i = thisYear; i >= 1985; i--) {
              years.push(i);
            }
            return years;
          })(),
        },
      ],
    };
  },
  methods:{
    async apply() {
      this.$store.dispatch('movie/searchMovies', {
        // Store의 Mutation을 실행할떄는 .commit() 메소드를 Actions를 실행할떄는 dispatch()메소드를 사용한다.
        // 이 movie 라는 이름은 store/index.js에 정의한 모듈의 이름을 써야한다.
        title:this.title,
        type:this.type,
        number: this.number,
        year: this.year
        // 데이터들을 movie store에 있는 actions의 payload라는 객체의 인수로 넘겨준다.,
      })
    },
  }
};
</script>


<style lang="scss" scoped>
.container {
  > * {
    margin-right: 10px;
    font-size: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  display: flex;
  .selects {
    display: flex;
    select {
      width: 120px;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .btn {
    width: 120px; // 상위의 flex 속성떄문에 120px 유지가안된다.,
    flex-shrink: 0; // flex가 강제로 너비를 조작하는것을 방지
    height: 50px;
    font-weight: 700;
  }
}
</style>