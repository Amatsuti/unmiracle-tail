/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import loader from './card_loader'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  global.config = siteData
  global.loader = loader
  global.Unmiracle = {
    list: loader,
    print: ()=>{ console.log("dummy") },
    simu: ()=>{ console.log("dummy") },
    getText: ()=>{ console.log("dummy") }
  }
}
