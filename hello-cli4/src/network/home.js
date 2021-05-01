//首页要用好多次request，直接在这里再封装一层，方便管理
import { request } from './request'
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page,
        }
    })
}