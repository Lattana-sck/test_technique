<template>
  <div class="container">
    <section class="vh-100">
      <div class="container-fluid h-custom">
      <h1 class="text-center">S'enregistrer</h1>
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
              <!-- Name input -->
              <div class="form-outline mb-4">
                <input
                  type="text"
                  name="name"
                  id="form3Example2"
                  class="form-control form-control-lg"
                  placeholder="Nom"
                />
              </div>

              <!-- Email input -->
              <div class="form-outline mb-4">
                <input
                  type="email"
                  name="mail"
                  id="form3Example3"
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
            S'enregistrer
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
