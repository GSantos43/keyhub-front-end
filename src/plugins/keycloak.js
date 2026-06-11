import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: process.env.KEYCLOAK_URL,
    clientId: process.env.KEYCLOAK_CLIENT_ID,
    realm: process.env.KEYCLOAK_REALM
})

export default keycloak;