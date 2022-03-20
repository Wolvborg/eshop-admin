import { Module } from 'vuex';
import GlobalState from '../interface/GlobalState';
import RootState from '../interface/RootState';

const state: GlobalState = {
  isAuthenticated: false,
  isAuthorised: false,
};

const mutations = {
  authenticate(state: GlobalState, payload) {
    state.isAuthenticated = payload;
  },
};

const actions = {
  authenticate({ commit }, payload) {
    commit('authenticate', payload);
  },
};

const global: Module<GlobalState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default global;
