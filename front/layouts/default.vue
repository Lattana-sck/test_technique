<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item nav-link">
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li class="nav-item nav-link">
            <nuxt-link to="/register">S'enregistrer</nuxt-link>
          </li>
          <li class="nav-item nav-link">
            <nuxt-link to="/login">Se connecter</nuxt-link>
            <!-- <a class="nav-link" href="/login">Se connecter</a> -->
          </li>
          <li class="nav-item nav-link">
            <nuxt-link to="/objects">Les objets</nuxt-link>
            <!-- <a class="nav-link" href="/objects">Les objets</a> -->
          </li>
          <li class="nav-item nav-link">
            <nuxt-link to="/add_objects">Ajouter un objet</nuxt-link>
            <!-- <a class="nav-link" href="/add_objects">Ajouter un objet</a> -->
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<style>
</style>
