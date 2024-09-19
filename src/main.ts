import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGoogle,
  faTwitter,
  faFacebook,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faGoogle, faFacebook, faTwitter, faGithub])

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app')
