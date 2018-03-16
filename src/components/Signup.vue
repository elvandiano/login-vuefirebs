<template>
  <div class="sign-up">
    <p>Let's create new account!!</p>
    <input type="email" v-model="email" placeholder="Email" onfocus="this.placeholder=''" onblur="this.placeholder='Email'">
    <input type="password" v-model="password" placeholder="Password" onfocus="this.placeholder=''" onblur="this.placeholder='Password'">
    <button @click="signup">Sign Up</button>
    <span>or go back to <router-link to="/login">login</router-link></span>
  </div>
</template>
<script>

  import firebase from 'firebase'
    export default {
      name: "signup",
      data :  function () {
          return {
            email : '',
            password : ''
          }
      },
      methods : {
        signup : function () {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
             (user) => {
              this.$router.replace('hello')
            },
             (err) => {
              console.log('Oops ' + err.message);
              alert('Oops ' + err.message);
            }
          );
        }
      }
    }
</script>

<style scoped>
  input {
    padding: 7px;
    width: 10%;
    margin: 10px 0;
  }
  button {
    padding: 7px;
    cursor: pointer;
  }
  span {
    display: block;
  }


</style>
