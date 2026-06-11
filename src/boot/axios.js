import axios from 'axios'
import { boot } from 'quasar/wrappers'
import keycloak from 'src/plugins/keycloak'

const api = axios.create({ baseURL: process.env.BASE_API_URL })

api.interceptors.request.use(
  async (config) => {
    if (keycloak.authenticated) {
      try {
        await keycloak.updateToken(30)
        ;((config.headers = config.headers || {}),
          (config.headers['Authorization'] = `Bearer ${keycloak.token}`))
      } catch (error) {
        console.error('Erro ao atualizar o token no interceptor', error)
        keycloak.logout({ redirectUri: window.location.origin })
      }
    } else {
      console.log('token unauthorized')
    }
    return config
  },

  (error) => {
    return Promise.reject(error)
  },
)

export default boot(({ app }) => {
  app.config.globalProperties.$axoios = axios
  app.config.globalProperties.$api = api
})

export { api }
