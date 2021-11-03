<template>
  <div class="container">
    <section class="vh-100">
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
                  id="form3Example3"
                  name="mail"
                  class="form-control form-control-lg"
                  placeholder="E-mail"
                />
              </div>

              <!-- Password input -->
              <div class="form-outline mb-3">
                <input
                  type="password"
                  name="password"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Mot de passe"
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
          >
            Se connecter
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
