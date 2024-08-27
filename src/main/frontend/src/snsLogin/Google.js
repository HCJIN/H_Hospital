// SocialGoogle.js
import React from 'react'

export const handleGoogleLogin = () => {
    const url = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=' + process.env.VUE_APP_GOOGLE_CLIENT_ID + '&redirect_uri=' + process.env.VUE_APP_GOOGLE_REDIRECT_URL + '&response_type=code' + '&scope=email profile';
}

export default handleGoogleLogin