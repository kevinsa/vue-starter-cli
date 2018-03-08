<template>
  <div>
    <b-row>
      <b-col>
        <div class="home-container">
          <h4>Welcome, {{ loggedInUser.userName }}</h4>
          <p>This is the app home page - if you're here you have successfully authenticated... </p>
          <div class="user-details">
            <div>
              <span class="field-name">Name:</span>
              <span class="field-value">{{ loggedInUser.firstName }}, {{ loggedInUser.lastName }}</span>
            </div>
            <div>
              <span class="field-name">PersonId:</span>
              <span class="field-value">{{ loggedInUser.personId }}</span>
            </div>
            <div>
              <span class="field-name">Customer:</span>
              <span class="field-value">{{ loggedInUser.companyName }}</span>
            </div>
            <div>
              <span class="field-name">Customer Id:</span>
              <span class="field-value">{{ loggedInUser.customerId }}</span>
            </div>
            <div>
              <span class="field-name">Org Id:</span>
              <span class="field-value">{{ loggedInUser.customerOrgId }}</span>
            </div>

          </div>
          <b-button @click="sayHello" variant="primary">Say Hello</b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        pageTitle: 'Home Page'
      }
    },
    created () {
      // created lifecycle hook...
    },
    computed: {
      loggedInUser () {
        // get the authernicated user object from application state
        return this.$store.getters.authenticatedUser
      }

    },
    methods: {
      sayHello () {
        // simple method used in the component template button click event
        const message = `Hello, ${this.loggedInUser.userName}!!`
        alert(message)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
.home-container {
  margin-top: 50px;
}

.home-container .user-details {
  margin: 20px 0 20px 0;
  padding: 10px;
  border: 1px solid #1879b9;
  background: #e8f4fc;
}

.home-container .user-details .field-name {
  font-weight: bold;
  width: 100px;
}

.home-container .user-details .field-value {
  margin-left: 20px;
}

</style>
