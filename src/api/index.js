import ajax from "./ajax";

export const getRecommendSwiper = () => ajax({
    url: "/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg"
})

export const getDiscList = () => ajax({
    url: '/api/getDiscList',
    params: {
        platform: 'yqq',
        hostUin: 0,
        sin: 0,
        ein: 29,
        sortId: 5,
        needNewCode: 0,
        categoryId: 10000000,
        rnd: Math.random(),
        format: 'json',
        // notice: 0,
        outCharset: "utf-8",
        inCharset: "utf-8"
            // g_tk: "1928093487"
    }
})



// export const getSinger = () => ajax({
//     url: "/singer/v8.fcg",
//     params: {
//         channel: 'singer',
//         page: 'list',
//         key: 'all_all_all',
//         pagesize: 100,
//         pagenum: 1,
//         hostUin: 0,
//         needNewCode: 0,
//         platform: 'yqq',
//         g_tk: 2001751543
//     }
//     // params: {
//     //     g_tk: 1928093487,
//     //     inCharset: "utf-8",
//     //     outCharset: "utf-8",
//     //     notice: 0,
//     //     format: "jsonp",
//     //     channel: "singer",
//     //     page: "list",
//     //     key: "all_all_all",
//     //     pagesize: 100,
//     //     pagenum: 1,
//     //     hostUin: 0,
//     //     needNewCode: 0,
//     //     platform: "yqq"
//     //         // jsonpCallback: "jp0"
//     // }
// })