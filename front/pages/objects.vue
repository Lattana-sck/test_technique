<template>
  <div>
    <p v-if="$fetchState.pending">Fetching API...</p>
    <p v-else-if="$fetchState.error">Une erreur s'est produite...</p>
    <div v-else class="container">
      <div>
        <h1 class="text-center">Les objets</h1>
      </div>
      <div>
        <br />
        <div
          v-for="object of objects"
          :key="object.id"
          class="card"
          style="width: 18rem"
        >
          <div class="card-body">
            <h5 class="card-title">
              {{ object.name }}
            </h5>
            <p class="card-text">
              {{ object.description }}
            </p>
            <a href="#" class="btn btn-primary">Modifier</a>
            <a href="#" class="btn btn-danger">Supprimer</a>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objects: [],
    };
  },
  async fetch() {
    this.objects = await fetch("http://localhost:10000/objets").then((res) =>
      res.json()
    );
  },
};
</script>

<style>
</style>
