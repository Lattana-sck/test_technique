<template>
  <div>
    <div class="container">
      <div>
        <h1 class="text-center">Les objets</h1>
      </div>
      <div class="d-flex align-content-stretch flex-wrap justify-content-between">
        <div
          v-for="object of objects"
          :key="object._id"
          :id="object._id"
          class="card shadow-lg p-3 mb-5 bg-white rounded"
          style="width: 16rem"
        >
          <div class="card-body">
            <h5 class="card-title">
              {{ object.name }}
            </h5>
            <p class="card-text">
              {{ object.description }}
            </p>
            <button type="button" class="btn btn-primary">+</button>
            <button type="button" class="btn btn-danger" @click="DeleteObject(object._id)">
              X
            </button>
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
      objects: null,
      id: null,
    };
  },
  created() {
    this.list();
  },

  methods: {
    list() {
      this.objects = fetch("http://localhost:10000/objets")
        .then((res) => res.json())
        .then((data) => {
          this.objects = data.result;
        });
    },
    DeleteObject(id) {
      fetch("http://localhost:10000/objets/" + id, {
          method: "DELETE",
          headers: {
          "Content-Type": "application/json",
          }
      })
      .then((response) => response.json())
      .then((data) => {
          this.list();
      }).catch(function(err) {
          console.log(err);
          alert("Une erreur est survenu !")
      });
    },
  },
};
</script>

<style>
</style>
