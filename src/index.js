import Carousel from "./Carousel.vue";
import Slide from "./Slide.vue";

const install = Vue => {
  Vue.component("carousel", Carousel);
  Vue.component("slide", Slide);
};

export default {
  install
};

// module.exports = {
//   methods: {
//       returrnCurrentPage: function () {
//           return Carousel.data().currentPage;
//       },
//       goToPage: function (val) {
//           Carousel.methods.goToPage(val);
//       }
//   }
// };

export { Carousel, Slide };
