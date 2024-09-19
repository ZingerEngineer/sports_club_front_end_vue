export const getGoogleURL = () => {
  const rootURL = 'https://accounts.google.com/o/oauth2/v2/auth'
  const URLOptions = {
    client_id: process.env.VUE_APP_CLIENT_ID_SECRET as string,
    redirect_uri: process.env
      .VUE_APP_GOOGLE_OAUTH_REDIRECT_URI_SECRET as string,
    response_type: 'code',
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile'
    ].join(' '),
    state: process.env.VUE_APP_GOOGLE_OAUTH_STATE_SECRET as string,
    prompt: 'consent'
  }

  const URLParams = new URLSearchParams(URLOptions)
  return `${rootURL}?${URLParams.toString()}`
}
