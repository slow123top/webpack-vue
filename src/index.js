import HelloWorld from './components/helloworld'
import Radio from './components/radio'

const components = [HelloWorld, Radio]
// HelloWorld.install = (Vue) => { Vue.component(HelloWorld.name, HelloWorld) }
const install = (Vue, opts = {}) => { components.map(component => { Vue.component(component.name, component) }) }
if (typeof window !== 'undefined' && window.Vue) { install(window.Vue) }
const API = { install, HelloWorld, Radio }
export default API
