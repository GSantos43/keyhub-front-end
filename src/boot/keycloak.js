import { boot } from "quasar/wrappers";
import keycloak from "src/plugins/keycloak";

export default boot(async ({app} )=> {

    const authenticated = await keycloak
    .init({
        onLoad: 'login-required',
        checkLoginIframe: false,
        pkceMethod: 'S256',
    })
    .catch((err) => {
        console.log('Falha ao inicializar o keycloak', err)
        return false;
    })

    if(!authenticated){
        window.location.reload();
        return;
    }
    app.config.globalProperties.$keycloak = keycloak;
})  