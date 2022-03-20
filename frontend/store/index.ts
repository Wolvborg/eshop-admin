import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import RootState from '../interface/RootState';
import global from './global';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {},
  modules: {
    global,
  },
};

export default new Vuex.Store<RootState>(store);
