import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
//数据源
var state={
    count:10
};
//处理状态变化
const mutations={
    increment(state){
        state.count++;
    },
    decrement(state){
        state.count--;
    }
};
//提交
const actions={
    increment:({
        commit
    })=>{
            commit('increment');
    },
    decrement:({commit})=>{
        commit("decrement");
    },
    clickOdd:({commit,state})=>{
        // alert(state.count);
        if(state.count%2==0)
        {
            commit('increment');
        }
    },
    clickAsync:({commit})=>{
        new Promise((resolve)=>{
            setTimeout(() => {
                commit('increment');
            }, 1000);
        })
    }

};
//获取
const getters ={
    count(state){
        return state.count;
    },
    getOdd(state){
        if(state.count%2==0)
        {
            return '偶数';
        }
        else
            return '奇数';
    }
}
//需要导出store对象
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});