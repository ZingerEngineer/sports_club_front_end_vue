export const getGitHubURL = () => {
  const gitHubClientId = process.env.VUE_APP_GITHUB_CLIENT_ID_SECRET
  const gitHubRedirectURI = process.env.VUE_APP_GITHUB_REDIRECT_URI_SECRET
  const gitHubState = process.env.VUE_APP_GITHUB_STATE_SECRET
  const redirectUrl = `https://github.com/login/oauth/authorize?client_id=${gitHubClientId}&redirect_uri=${gitHubRedirectURI}&scope=user&state=${gitHubState}&prompt=select_account`
  return redirectUrl
}
