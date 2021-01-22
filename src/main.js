import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' 

Vue.config.productionTip = false
Vue.use(Vuetify)
new Vue({
  vuetify: new Vuetify({
    theme: {
        themes: {
            light: {
            },
        }
    },
    icon: {
        iconfont: 'mdiSvg',
    }
}),
  render: h => h(App),
}).$mount('#app')
