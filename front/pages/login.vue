<template>
  <div class="container vh-100">
      <h1 class="text-center">Se connecter</h1>
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
              class="img-fluid"
              alt="Sample image"
            />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  class="form-control form-control-lg"
                  placeholder="E-mail"
                  required
                />
              </div>

              <!-- Password input -->
              <div class="form-outline mb-3">
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="form-control form-control-lg"
                  placeholder="Mot de passe"
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div class="text-center text-lg-start mt-4 pt-2">
          <button
            type="button"
            class="btn btn-primary btn-lg"
            style="padding-left: 2.5rem; padding-right: 2.5rem"
            @click="ConnectUser"
          >
            Se connecter
          </button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isLoading: true,
      id: null,
      mail: null,
      name: null,
      password: null,
    };
  },
  methods: {
    ConnectUser() {
      (this.mail = document.getElementById("mail").value),
        (this.password = document.getElementById("password").value);
      fetch("http://localhost:10000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail: this.mail,
          password: this.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          localStorage.setItem('token', data.token)
          this.$router.push("/");
        })
        .catch(function () {
          alert("Mauvais identifiant ou mot de passe !");
        });
    },
  },
};
</script>

<style></style>
