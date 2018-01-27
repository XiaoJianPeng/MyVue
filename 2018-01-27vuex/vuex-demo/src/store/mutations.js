import {
    INCREMENT ,DECREMENT
} from './typeS'
import getters from './getters'
const state ={
    count:20
};
//处理状态变化
const mutations={
    [INCREMENT](state){
        state.count++;
    },
    [DECREMENT](state){
        state.count--;
    }
};
export default({
    state,
    mutations,
    getters
})