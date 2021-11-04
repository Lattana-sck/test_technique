<template>
  <div class="vh-100">
    <nav class="navbar-expand-lg navbar-light bg-light">
        <ul class="nav justify-content-center">
          <li class="nav-item nav-link">
            <nuxt-link to="/">Acceuil</nuxt-link>
          </li>
          <li class="nav-item nav-link">
            <nuxt-link to="/register">S'enregistrer</nuxt-link>
          </li>
          <li class="nav-item nav-link">
            <nuxt-link to="/login">Se connecter</nuxt-link>
          </li>
          <li class="nav-item nav-link">
            <nuxt-link to="/objects">Les objets</nuxt-link>
          </li>
          <li class="nav-item nav-link">
            <nuxt-link to="/add_objects">Ajouter un objet</nuxt-link>
          </li>
        </ul>
    </nav>

    <div>
      <nuxt />
    </div>

  </div>
</template>

<style>
</style>
