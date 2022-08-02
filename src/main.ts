// @ts-ignore
import App from './App.svelte'
import "./variables.scss";

const app = new App({
  target: document.getElementById('app'),
  props: {
    name: 'world'
  },
  intro: true
})

export default app
