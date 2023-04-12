<template>
  <div class="image-section">
    <img
      class="above-menu-image"
      src="@/assets/images/b.png"
      alt="Above Menu Image"
    />
  </div>
  <div class="heading">
    <img class="pdf-menu" src="@/assets/images/menu.jpg" alt="PDF Menu" />
  </div>
</template>

<script>
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);
//gets the "restaurants" which just are the 10 categories, then also gets the dishes belonging to each one

const query = `
*[_type == 'restaurant'] {
        ...,
       dishes[]->{
        ...,
      }
         }
      `;
export default {
  name: "Categories",
  data() {
    return {
      loading: true,
      categories: [],
      dishes: [],
      showModal: false,
    };
  },
  created() {
    this.fetchData();
  },

  watch: {
    $route: "fetchData",
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      sanity.fetch(query).then(
        (categories) => {
          this.loading = false;
          this.categories = categories;
          //don't need this
          this.dishes = categories[0].dishes;
          console.log(categories);
        },
        (error) => {
          this.error = error;
        }
      );
    },

    openModal(item) {
      this.dishes = item.dishes;

      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
/* Styles for the new image section */
.image-section {
  text-align: center; /* Center the image */
  margin-bottom: 20px; /* Add a gap between the image and the menu */
}

.above-menu-image {
  max-width: 80%; /* Ensure the image fits within the container */
  border-radius: 20px; /* Make the image rounded */
  /* Additional styles for the image (e.g., margin) */
}
.pdf-menu {
  border-radius: 20px;
  max-width: 80%; /* Ensure the image fits within the container */
  width: 100%; /* Set the width to 100% to make the image responsive */
}
.categories-grid {
  display: grid;

  gap: 2rem;
  padding: 3rem;
}

.category {
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
}

.category-content {
  padding: 1rem;
}

.category img {
}

.modal-overlay {
  position: fixed;
  height: 100vh;
  left: 0;
  right: 0;

  top: 0;
  /*
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  */

  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.card-modal {
  border-radius: 5%;
  text-align: center;
  background-color: white;
  /*
  height: 500px;
  width: 500px;
  */
  height: 50%;
  width: 50vh;
  margin: auto;

  position: relative;

  /*
  margin-top: 20%;
  padding: 60px 0;
  */
  overflow-y: auto;
}

.card {
  display: flex;
  flex-direction: row;
  padding: 2%;
}

.image {
  margin-left: 0.5 rem;
  padding: 2rem;
}

.image img {
  border-radius: 5%;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
  border-radius: 5%;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
  color: #1a1a1a;
}

p {
  font-size: 16px;
  margin: 20px 0;
  color: #6b6b6b;
}

button {
  background-color: #ff2d55;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  font-weight: 600;
}
</style>
