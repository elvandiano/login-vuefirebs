<template>
 <div class="login">
   <p>Sign in</p>
   <input type="text" v-model="email" placeholder="Email" onfocus="this.placeholder=''" onblur="this.placeholder='Email'">
   <input type="password" v-model="password" placeholder="Password" onfocus="this.placeholder=''" onblur="this.placeholder='Password'">
   <button @click="login">Sign In</button>
   <p>you don't have account? you can <router-link to="/sign-up">sign up</router-link></p>
 </div>
</template>

<script>
  import firebase from 'firebase'
    export default {
      name: "login",
      data : function() {
          return {
            email : '',
            password : ''
          }
      },
      methods : {
        login : function () {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
           (user) => {
             this.$router.replace('hello')
           },
            (err) => {
             alert('Sorry, ' + err.message);
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

</style>
