import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _6bc9f4be = () => import('../pages/brand/index.vue' /* webpackChunkName: "pages/brand/index" */).then(m => m.default || m)
const _33693c7d = () => import('../pages/experice/index.vue' /* webpackChunkName: "pages/experice/index" */).then(m => m.default || m)
const _329845f6 = () => import('../pages/leader/index.vue' /* webpackChunkName: "pages/leader/index" */).then(m => m.default || m)
const _3536ed69 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/brand",
			component: _6bc9f4be,
			name: "brand"
		},
		{
			path: "/experice",
			component: _33693c7d,
			name: "experice"
		},
		{
			path: "/leader",
			component: _329845f6,
			name: "leader"
		},
		{
			path: "/",
			component: _3536ed69,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
