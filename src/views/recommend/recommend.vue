<template>

  <div class="scroll-list-wrap" ref="wrapper" :style="{height:`${scrollHeight}px`}">
    <cube-scroll ref="scroll">
      <MSwiper :swiperList="swiperList" />
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul>
          <li v-for="item in disclist" class="item" :key="item.id">
            <div class="icon">
              <img width="60" height="60" v-lazy="item.imgurl" />
            </div>
            <div class="text">
              <h2 class="name" v-html="item.creator.name"></h2>
              <p class="desc" v-html="item.dissname"></p>
            </div>
          </li>
        </ul>
      </div>
    </cube-scroll>
  </div>
</template>
<script>
import MSwiper from "base/swiper.vue";
import { mapState, mapActions } from "vuex";
export default {
    data(){
       return {
           scrollHeight:0
       }
    },
  components: {
    MSwiper
  },
  computed: {
    ...mapState(["swiperList", "disclist"])
  },
  created() {
    this._initRecommend();
  },
  methods: {
    ...mapActions(["_initRecommend"])
  },
  mounted(){
       this.scrollHeight = document.documentElement.clientHeight-this.$refs.wrapper.getBoundingClientRect().top;
  }
};
</script>


<style scoped lang="stylus">

      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
</style>