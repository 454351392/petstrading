import Vue from 'vue'
import Router from 'vue-router'
import AdminLogin from './views/admin/AdminLogin.vue'
import AdminHome from './views/admin/AdminHome.vue'
import AdminIndex from './views/admin/AdminIndex.vue'
import AdminInfo from './views/admin/AdminInfo.vue'
import AdminUpdata from './views/admin/AdminUpdata.vue'
import AdminUpkey from './views/admin/AdminUpkey.vue'
import AdminAddkw from './views/admin/AdminAddkw.vue'
import AdminCatkw from './views/admin/AdminCatkw.vue'
import AdminCatkwedit from './views/admin/AdminCatkwedit.vue'
import AdminUserm from './views/admin/AdminUserm.vue'
import AdminGdm from './views/admin/AdminGdm.vue'
import AdminContactus from './views/admin/AdminContactus.vue'
import AdminAddcatclass from './views/admin/AdminAddcatclass.vue'

//**************************user****************************************** */
import UserReg from './views/user/UserReg.vue'
import UserLogin from './views/user/UserLogin.vue'
import UserHome from './views/user/UserHome.vue'
import UserIndex from './views/user/UserIndex.vue'
import UserInfo from './views/user/UserInfo.vue'
import UserUpdata from './views/user/UserUpdata.vue'
import UserUpkey from './views/user/UserUpkey.vue'
import UserAddgs from './views/user/UserAddgs.vue'
import UserGdlist from './views/user/UserGdlist.vue'



//**************************前台展示页面****************************************** */
import Home from './views/Home.vue'
import Salebuy from './views/Salebuy.vue'
import Knowledge from './views/Knowledge.vue'
import Variety from './views/Variety.vue'
import Contactus from './views/Contactus.vue'
import Aboutus from './views/Aboutus.vue'
import Catdetail from './views/Catdetail.vue'
import Car from './views/Car.vue'

import firstpage from './components/style_tag/first_page.vue'
import Searchpage from "./views/Searchpage.vue"
import catkwpage from './components/style_tag/catkw_page.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/adminlogin',
      name: 'adminlogin',
      component: AdminLogin
    },
    {
      path: '/adminhome',
      name: 'adminlhome',
      component: AdminHome
    },
    {
      path: '/operations',
      name: 'operations',
      component: AdminIndex,
      children: [
        {
          path: 'ainfo',
          component: AdminInfo
        },
        {
          path: 'aupdata',
          component: AdminUpdata
        },
        {
          path: 'aupkey',
          component: AdminUpkey
        },
        {
          path: 'addkw',
          component: AdminAddkw
        },
        {
          path: 'catkwlist',
          component: AdminCatkw
        },
        {
          path: 'catkwedit',
          component: AdminCatkwedit
        },
        {
          path: 'auserm',
          component: AdminUserm
        },
        {
          path: 'adoogsm',
          component: AdminGdm
        },
        {
          path: 'acontactus',
          component: AdminContactus
        },
        {
          path: 'asddcatclass',
          component: AdminAddcatclass
        }
      ]
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/salebuy',
      name: 'salebuy',
      component: Salebuy
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: Knowledge
    },
    {
      path: '/variety',
      name: 'variety',
      component: Variety
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: Contactus
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: Aboutus
    },
    {
      path: '/firstpage',
      name: 'firstpage',
      component: firstpage
    },
    {
      path: '/catdetail',
      name: 'catdetail',
      component: Catdetail
    },
    {
      path: '/catkwpage',
      name: 'catkwpage',
      component: catkwpage
    },
    {
      path: '/reg',
      name: 'reg',
      component: UserReg
    },
    {
      path: '/login',
      name: 'login',
      component: UserLogin
    },
    {
      path: '/login',
      name: 'login',
      component: UserLogin
    },
    {
      path: '/userhome',
      name: 'userhome',
      component: UserHome
    },
    {
      path: '/uoperations',
      name: 'uoperations',
      component: UserIndex,
      children: [
        {
          path: 'uinfo',
          component: UserInfo
        },
        {
          path: 'uupdata',
          component: UserUpdata
        },
        {
          path: 'uupkey',
          component: UserUpkey
        },
        {
          path: 'addgoods',
          component: UserAddgs
        },
        {
          path: 'ugoodlist',
          component: UserGdlist
        },
      ],
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    },
    {
      path: "/searchpage",
      name: "Searchpage",
      component: Searchpage
    }


  ]
})
