/**
 * vue-scroll-components
 * (c) 2018 ccjoe
 * @license MIT
 */

import Scroll from './Scroll.vue'

/**
 * Plugin API
 */
var install = function (Vue, options) {
  Vue.component('v-scroll', Scroll)
  if (VScroll.install) return
  VScroll.install = true

  // Add global method or property
  Vue.myGlobalMethod = function () {
    // something logic ...
  }

  // Add a global asset
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // something logic ...
    }
  })

  // Inject some component options
  Vue.mixin({
    created: function () {
      // something logic ...
    }
  })

  // Add an instance method
  Vue.prototype.$myMethod = function (options) {
    // something logic ...
  }
}

const VScroll = {install, Scroll}

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VScroll)
}

export default VScroll
