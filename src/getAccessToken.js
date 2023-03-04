// import {AuthorizationCode} from 'simple-oauth2';
import axios from 'axios'
import * as dotenv from 'dotenv' 
dotenv.config()

// const getAccessToken = async (client, authorizationCode,redirect_uri) => {
const getAccessToken = async (credentials,authorizationCode) => {
    // const tokenParams = {
    //     code: authorizationCode,
    //     redirect_uri: redirect_uri
    // };
    // console.log("getting token with tokenParams",tokenParams)
    // const accessToken = await client.getToken(tokenParams)
    // console.log('Access token:', accessToken.token.access_token);
    //https://learn.microsoft.com/en-us/linkedin/shared/authentication/client-credentials-flow?context=linkedin%2Fconsumer%2Fcontext
     
    //https://learn.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?tabs=cURL2

//    redirect_uri=http://orbit-db-pinner.decentrasol.network:8000/linkedin&grant_type=authorization_code&code=AQRnAEeGtNpEqFj2l5Bo5pPkj9VXkrBTwx2DXKtV0BqrfuNVd0JrITO5Oqy4oSpYXODGaTPMTPXLMIxrIj2SL_5PB4X_BIvAyhW5LqqwZtGQnYzmw3rtWExIe5t_OxQ6AlEl_mJKrCDgc1fatRAPbR5ka5FvKPEAqEHgxZbLyW3qCSol3zqHbRJrvLOOgbYigx0KTUcM_LVnwYkOtEg&client_id=86j0rqbkihw3f3&client_secret=veL9Uo1zp8NBS13w

/*
    curl --location --request POST 'https://www.linkedin.com/oauth/v2/accessToken' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'grant_type=authorization_code' \
    --data-urlencode 'code=AQRCRrH6PqtaO3H4PbIToeGoXpFGGQbilqnR3ydgumo_vlGyK0x8TtJQX-AI7uWuucITShIZc8neyNZhojDxLtytZz5Vu96-hqCnWaTBsFcY4iXtXA2ztrQyfOO9qae2VhbEh6z1UPr4DF8pEJ_sv11LZ1ixenAK4ryKFMvUYqkGuCrWuy1aasJz1P6iLa-hesnKVcXEIMzPr45RlfQ' \
    --data-urlencode 'client_id=86j0rqbkihw3f3' \
    --data-urlencode 'client_secret=veL9Uo1zp8NBS13w' \
    --data-urlencode 'redirect_uri=http://orbit-db-pinner.decentrasol.network:8000/linkedin'
*/
    const accessToken = await axios({
            method: 'POST',
            headers: {
             "Content-Type": "application/x-www-form-urlencoded"
            },
            url: `https://www.linkedin.com/oauth/v2/accessToken?redirect_uri=${encodeURI(process.env.REDIRECT_URL)}&grant_type=authorization_code&code=${encodeURI(authorizationCode)}&client_id=${credentials.client.id}&client_secret=${credentials.client.secret}`
      });

    return accessToken
}
export default getAccessToken
