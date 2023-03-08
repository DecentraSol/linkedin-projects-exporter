# linkedin-projects-exporter

This is a NodeJS project which is connecting to the LinkedIn-API. It generates an AccessCode and with this another AccessToken.

It is possible to retrieve the personal information such as my name.  
Obviously this is not much and I found out it is necessary to becoe LinkedIn Partner to get more information from the API.

You maybe read this blog and try and let me know if that might work in a better way - https://www.jcchouinard.com/linkedin-api/

- clone repo
- npm i
- npm start
- in browser go to http://localhost:8000/export to get authorization code
- in browser go to http://localhost:8000/getToken to get token (still broken) see getAccessToken.js to make curl instead useing the API