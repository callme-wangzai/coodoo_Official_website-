import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _3c97e3b2 = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _6bc9f4be = () => import('../pages/brand/index.vue' /* webpackChunkName: "pages/brand/index" */).then(m => m.default || m)
const _33693c7d = () => import('../pages/experice/index.vue' /* webpackChunkName: "pages/experice/index" */).then(m => m.default || m)
const _329845f6 = () => import('../pages/leader/index.vue' /* webpackChunkName: "pages/leader/index" */).then(m => m.default || m)
const _f9697c10 = () => import('../pages/about/contact/index.vue' /* webpackChunkName: "pages/about/contact/index" */).then(m => m.default || m)
const _8ce2f7da = () => import('../pages/about/cooperation/index.vue' /* webpackChunkName: "pages/about/cooperation/index" */).then(m => m.default || m)
const _14f5fd28 = () => import('../pages/about/history/index.vue' /* webpackChunkName: "pages/about/history/index" */).then(m => m.default || m)
const _ee68e03a = () => import('../pages/about/joinUs.vue' /* webpackChunkName: "pages/about/joinUs" */).then(m => m.default || m)
const _920f9184 = () => import('../pages/about/joinUs.vue/index.vue' /* webpackChunkName: "pages/about/joinUs.vue/index" */).then(m => m.default || m)
const _2ddd30f0 = () => import('../pages/experice/download/index.vue' /* webpackChunkName: "pages/experice/download/index" */).then(m => m.default || m)
const _75e4121d = () => import('../pages/experice/increment/index.vue' /* webpackChunkName: "pages/experice/increment/index" */).then(m => m.default || m)
const _5a4f5c88 = () => import('../pages/experice/productSupport/index.vue' /* webpackChunkName: "pages/experice/productSupport/index" */).then(m => m.default || m)
const _5f59b4f5 = () => import('../pages/experice/repair/index.vue' /* webpackChunkName: "pages/experice/repair/index" */).then(m => m.default || m)
const _5ac80a12 = () => import('../pages/home/activities/index.vue' /* webpackChunkName: "pages/home/activities/index" */).then(m => m.default || m)
const _7be7424b = () => import('../pages/home/meituan/index.vue' /* webpackChunkName: "pages/home/meituan/index" */).then(m => m.default || m)
const _3d6497f3 = () => import('../pages/home/onlineShop/index.vue' /* webpackChunkName: "pages/home/onlineShop/index" */).then(m => m.default || m)
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
			path: "/about",
			component: _3c97e3b2,
			name: "about"
		},
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
			path: "/about/contact",
			component: _f9697c10,
			name: "about-contact"
		},
		{
			path: "/about/cooperation",
			component: _8ce2f7da,
			name: "about-cooperation"
		},
		{
			path: "/about/history",
			component: _14f5fd28,
			name: "about-history"
		},
		{
			path: "/about/joinUs",
			component: _ee68e03a,
			name: "about-joinUs"
		},
		{
			path: "/about/joinUs.vue",
			component: _920f9184,
			name: "about-joinUs.vue"
		},
		{
			path: "/experice/download",
			component: _2ddd30f0,
			name: "experice-download"
		},
		{
			path: "/experice/increment",
			component: _75e4121d,
			name: "experice-increment"
		},
		{
			path: "/experice/productSupport",
			component: _5a4f5c88,
			name: "experice-productSupport"
		},
		{
			path: "/experice/repair",
			component: _5f59b4f5,
			name: "experice-repair"
		},
		{
			path: "/home/activities",
			component: _5ac80a12,
			name: "home-activities"
		},
		{
			path: "/home/meituan",
			component: _7be7424b,
			name: "home-meituan"
		},
		{
			path: "/home/onlineShop",
			component: _3d6497f3,
			name: "home-onlineShop"
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
