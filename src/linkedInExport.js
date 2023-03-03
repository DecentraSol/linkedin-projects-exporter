import {v4} from 'uuid';

const linkedInExport = (client) => {
  // Set up the OAuth2 authorization URL
  const authorizationUri =  client.authorizeURL({
    redirect_uri: encodeURI(process.env.REDIRECT_URL),
    //scope: ['r_liteprofile', 'r_emailaddress', 'w_member_social'],
    scope: ['r_liteprofile', 'r_emailaddress'],
    state: v4()
  });

  // Redirect the user to the authorization URL to obtain consent
  console.log(`Please visit the following URL to authorize your LinkedIn account:\n${authorizationUri}`);
  return authorizationUri
}

export default linkedInExport
