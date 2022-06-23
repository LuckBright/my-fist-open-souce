import { createApp } from 'vue'
import App from './App.vue'

import './index.scss'
// import Button from './button'
import SheepUi from '../build/'

createApp(App).use(SheepUi).mount('#app')
