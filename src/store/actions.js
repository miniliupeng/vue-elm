import { getRecommendSwiper, getDiscList } from "api/"
export default {
    async _initRecommend({ commit }) {
        let res = await Promise.all([getRecommendSwiper(), getDiscList()])
        commit("_initRecommend", res)
    }
}