const state = {
    ProductLine: 1, //Commercial -- 1
    tab: 0, // Your Data -- 1
    alert: '',
    isError: false,
    routerlinks: [
        {
            'routerlink': {
                text: 'Home',
                value: '/'
            }
        },
        {
            'routerlink': {
                text: 'Products',
                value: '/SpiderWebProducts'
            }
        },
        {
            'routerlink': {
                text: 'Creator IDE',
                value: '/CreatorIDE'
            }
        },
    ]
}

// getters
const getters = {
    ProductLine: state => state.ProductLine,
    Tab: state => state.tab,
    RouterLinks: state => state.routerlinks
}

// actions
const actions = {
    SetAlert({ commit }, { alert, isError }) {
        commit('setAlert', { alert, isError });
    },
    SetProductLine({ commit }, payload) {
        commit('setProductLine', { payload });
    },
    SetTab({ commit }, payload) {
        commit('SetTab', { payload });
    },
    SetRouterLink({ commit }, routerlink) {
        commit('SetRouterLink', { routerlink });
    },
    ResetRouterLink({ commit }) {
        commit('ResetRouterLink');
    },
}

// mutations
const mutations = {
    setAlert(state, { alert, isError }) {
        state.alert = alert;
        state.isError = isError;
    },
    setProductLine(state, payload) {
        state.ProductLine = payload
    },
    SetTab(state, payload) {
        state.tab = payload
    },
    SetRouterLink(state, routerlink) {
        state.routerlinks = [];
        state.routerlinks.push(
            {
                'routerlink': {
                    text: 'Home',
                    value: '/'
                }
            }
        );
        state.routerlinks.push(routerlink);
    },
    ResetRouterLink(state) {
        state.routerlinks = [];
        state.routerlinks.push(
            {
                'routerlink': {
                    text: 'Home',
                    value: '/'
                }
            },
        );
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}