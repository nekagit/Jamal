import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { gsap } from 'gsap'
import App from './App.vue'
import router from './router'

import { CustomEase } from 'gsap/CustomEase'
import { ExpoScaleEase, RoughEase, SlowMo } from 'gsap/EasePack'

import { Draggable } from 'gsap/Draggable'
import { EaselPlugin } from 'gsap/EaselPlugin'
import { Flip } from 'gsap/Flip'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { Observer } from 'gsap/Observer'
import { PixiPlugin } from 'gsap/PixiPlugin'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable,
  MotionPathPlugin,
  EaselPlugin,
  PixiPlugin,
  TextPlugin,
  RoughEase,
  ExpoScaleEase,
  SlowMo,
  CustomEase
)
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
