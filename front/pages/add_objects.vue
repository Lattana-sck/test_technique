<template>
  <div>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else class="container">
      <div>
        <h1 class="text-center">Ajouter un objet</h1>
      </div>
      <div>
        <br />
        <div class="card" style="width: 18rem">
          <img class="card-img-top" src="" alt="Card image cap" />
          <div class="card-body">
            <h5 v-for="object of objects" :key="object.id" class="card-title">
              {{ object.name }}
            </h5>
            <p class="card-text"></p>
            <a href="#" class="btn btn-primary">Modifier</a>
            <a href="#" class="btn btn-danger">Supprimer</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    console.log("hello");
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
