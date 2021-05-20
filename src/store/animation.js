export default {
  mutations: {
    addAnimation({ curComponent }, animation) {
      curComponent.animation.push(animation);
    },

    removeAnimation({ curComponent }, index) {
      curComponent.animation.splice(index, 1);
    },
  },
};
