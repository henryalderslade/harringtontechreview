//Entry point for webpack


//Import required libraries
import 'bootstrap'
import 'bootstrap-validator'
import './scss/app.scss'
import './feature-script'
import './init'

//Import Components 
import { registerHeader } from './Components/header'
import { registerCarousel } from './Components/carousel'
import { registerForm } from './Components/form'
import { registerFooter } from './Components/footer'
import { registerSkills } from './Components/skills'


//Register Components
registerHeader()
registerCarousel()
registerForm()
registerSkills()
registerFooter()
