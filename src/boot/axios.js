import axios from 'axios'
import { boot } from 'quasar/wrappers'

const api = axios.create({ baseURL: process.env.BASE_API_URL })

export default boot(({ app }) => {
  app.config.globalProperties.$axoios = axios
  app.config.globalProperties.$api = api
})

export { api }
