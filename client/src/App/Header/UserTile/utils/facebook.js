export const getLoginStatus = async () => {
  const fb = await getFB()
  return promisify(fb.getLoginStatus)()
}

export const login = async () => {
  const fb = await getFB()
  const loginStatus = await promisify(fb.login)({ scope: 'public_profile,email' })
  const userInfos = await promisify(fb.api, false)('/me')
  return {
    ...userInfos,
    auth: loginStatus.authResponse
  }
}

export const logout = async () => {
  const fb = await getFB()
  return promisify(fb.logout)()
}

async function getFB() {
  if(typeof FB !== 'undefined') { // eslint-disable-line no-undef
    return Promise.resolve(FB) // eslint-disable-line no-undef
  }

  return new Promise((resolve) => {
    setTimeout(async () => {
      const fb = await getFB()
      resolve(fb)
    }, 100)
  })
}

function promisify(fn, callbackFirst = true) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      const handleResponse = (response) => {
        resolve(response)
      }
      try {
        if(callbackFirst) {
          fn(handleResponse, ...args)
        } else {
          fn(...args, handleResponse)
        }
      } catch(e) {
        reject(e)
      }
    })
  }
}
