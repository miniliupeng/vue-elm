export default {
    _initRecommend(state, val) {
        state.swiperList = val[0].data.slider;
        state.disclist = val[1].data.list
    }
}