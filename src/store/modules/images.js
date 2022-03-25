import api from '../../api/imgur';
import { router } from '../../main';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    async fetchImages({ rootState, commit }) {
        const { token } = rootState.auth;
        const repsonse = await api.fetchImages(token);
        // First .data comes from axios
        // Second .data comes from imgur api
        commit('setImages', repsonse.data.data);
    },
    async uploadImages({ rootState }, images) {
        // Get the access token
        const { token } = rootState.auth;
        // Call the API module to perform the upload
        await api.uploadImages(images, token);
        // Redirect to ImageList
        router.push("/");
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
