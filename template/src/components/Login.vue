<template>
  <div>
    <b-row>
      <b-col>
        <div class="login-container">
          <h4>{{ title }}</h4>
          <div class="error-message">
            <h5>{{ authenticationError }}</h5>
            <div class="stack-trace">
              {{ stackTrace }}
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  // component data accessed in the component template
  data () {
    return {
      title: 'User Authentication Failed!',
      authenticationError: '',
      stackTrace: ''
    }
  },
  // perform authentication on component create (executed when user is not authenticated)
  created () {
    const authServiceURL = `${process.env.BASE_URL}${process.env.AUTH_SERVICE_URL}`
    const authCookieString = 'MyCitrixHash=DomainName=contentpreprod.citrix.com&ModifiedOn=03%2f05%2f2018&ID1=MzAxNjA1MA%3d%3d&ID2=C24F5C29E32D48F63DB9F763BB524D4D2FED28B3&SiteLanguage=English;domain=.citrix.com'
    // authenticate the user using cookie string
    this.authentication.authenticate(authServiceURL, '', authCookieString)
      .then((res) => {
        // get the authenticated user
        const authUser = this.authentication.getAuthenticatedUser()
        const authState = {
          authenticated: true,
          user: authUser
        }

        // set the application state to authenticated
        this.$store.commit('setAuthenticated', authState)

        // navigate to appication home protected route
        this.$router.push({ name: 'Home' })
      })
      .catch((err) => {
        this.$store.commit('setAuthenticated', false)

        // error, component will render component template and not transition to application home
        this.authenticationError = err.message
        this.stackTrace = err.stack
        console.dir(err)
      })
  }
}
</script>

<style scoped>
.login-container {
  margin-top: 50px;
}

.login-container h4 {
  color: #990000;
}

.login-container .error-message {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #990000;
  background-color: #ffe6e6;
}

.login-container .error-message h5 {
  color: #990000;
}

.login-container .error-message .stack-trace {
  margin-top: 20px;
  color: #990000;
  font-style: italic;
}
</style>
