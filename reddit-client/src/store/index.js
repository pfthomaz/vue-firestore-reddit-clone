/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import { firebaseMutations } from 'vuexfire';
import subreddits from './subreddits';
import subreddit from './subreddit';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: firebaseMutations,
  modules: {
    auth,
    subreddits,
    subreddit
  }
});
