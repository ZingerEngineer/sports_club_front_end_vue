export const getFaceBookURL = () => {
  const faceBookAppId = process.env.VUE_APP_FB_APPID_SECRET
  const faceBookRedirectURI = process.env.VUE_APP_FB_OAUTH_REDIRECT_URI_SECRET
  const faceBookStateSecret = process.env.VUE_APP_FB_OAUTH_STATE_SECRET
  const redirectUrl = `https://www.facebook.com/v20.0/dialog/oauth?client_id=${faceBookAppId}&redirect_uri=${faceBookRedirectURI}&state=${faceBookStateSecret}&scope=email,public_profile&response_type=code`
  return redirectUrl
}
