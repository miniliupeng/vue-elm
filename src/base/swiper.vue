<template>
  <div>
    <cube-slide ref="slide" :data="swiperList">
      <cube-slide-item
        v-for="(item, index) in swiperList"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <a :href="item.linkUrl">
          <img :src="item.picUrl" />
        </a>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  props: ["swiperList"]
};
</script>

<style lang="stylus">
img {
    width:100%;
}
.cube-slide-dots{
  position: absolute;
    bottom: 0.266667rem;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    span{
        width: 8px;
        height: 8px;
        display: inline-block;
        border-radius: 100%;
        background: #000;
        opacity: 0.5;
        margin: 0 0.08rem;
    }
}

.cube-slide-dots>span.active {
        width: 20px;
        border-radius: 5rem;
        background: rgba(255,255,255,0.8);
    }
</style>