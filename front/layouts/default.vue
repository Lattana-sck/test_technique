<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/">Acceuil</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login">Se connecter</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/register">S'enregistrer</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/objects">Les objets</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="container">
        <nuxt />
      </div>
    </nav>
  </div>
</template>

<style>
</style>
