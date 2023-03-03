// import {AuthorizationCode} from 'simple-oauth2';
import * as dotenv from 'dotenv' 
dotenv.config()

const getAccessToken = async (client, authorizationCode,redirect_uri) => {

    const tokenParams = {
        code: authorizationCode,
        redirect_uri: redirect_uri
    };
    console.log("getting token with tokenParams",tokenParams)
    const accessToken = await client.getToken(tokenParams)
    console.log('Access token:', accessToken.token.access_token);
    return accessToken
}
export default getAccessToken