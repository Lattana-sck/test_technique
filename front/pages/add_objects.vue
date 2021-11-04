<template>
  <div class="container">
    <section class="vh-100">
      <h1 class="text-center">Ajouter un objet</h1>
      <div class="container-fluid h-custom"> 
          <div class="d-flex justify-content-center">
            <form>
              <!-- Titre input -->
              <div class="form-outline mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-control form-control-lg"
                  placeholder="Titre"
                  required
                />
              </div>

              <!-- Description input -->
              <div class="form-outline mb-3">
                <input
                  type="text"
                  name="description"
                  id="description"
                  class="form-control form-control-lg"
                  placeholder="Description"
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div class="text-center text-lg-start mt-4 pt-2">
          <button
            type="button"
            @click="AddObject"
            class="btn btn-primary btn-lg"
            style="padding-left: 2.5rem; padding-right: 2.5rem"
          >
            Ajouter
          </button>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AddObjet",
  data() {
    return {
      isLoading: true,
      id: null,
      name: null,
      description: null,
    };
  },
  methods: {
    AddObject() {
      (this.name = document.getElementById("name").value),
        (this.description = document.getElementById("description").value);
      fetch("http://localhost:10000/objets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          description: this.description,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.$router.push("/");
        })
        .catch(function () {
          alert("Erreur dans l'ajout d'un objet");
        });
    },
  },
};
</script>

<style></style>
