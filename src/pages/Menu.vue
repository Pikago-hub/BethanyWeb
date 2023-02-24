<template>
  <div class="heading" style="padding-top: 2%;">
    <span>Menu</span>
    <h3>Our Full Menu</h3>
  </div>
  <div class="categories-grid">
    <div
      v-for="(item, index) in categories"
      :key="index"
      class="category"
      @click="openModal(item)"
    >
      <div class="card">
        <div class="image">
          <img
            v-if="item.image"
            :src="imageUrlFor(item.image)"
            :alt="item.image.alt"
            width="240"
            height="240"
            style="object-fit: cover;"
          />
        </div>
        <div class="category-content">
          <h2>{{ item.name }}</h2>
        </div>
      </div>
    </div>
  </div>

  <div v-show="showModal">
    <div class="modal-overlay" @click="closeModal">
      <div class="card-modal">
        <div v-for="(item, index) in dishes" :key="index" class="card">
          <div>
            <h6>{{ item.name }}</h6>
            <p>{{ item.short_description }}</p>
          </div>
          <div class="image">
            <img
              class="check card-img"
              v-if="item.image"
              :src="imageUrlFor(item.image).ignoreImageParams().width(240)"
              :alt="item.image.alt"
            />
          </div>
        </div>

        <button @click="closeModal">Back</button>
      </div>
    </div>
  </div>
</template>

<script>
import sanity from '../sanity'
import imageUrlBuilder from '@sanity/image-url'

const imageBuilder = imageUrlBuilder(sanity)
//gets the "restaurants" which just are the 10 categories, then also gets the dishes belonging to each one

const query = `
*[_type == 'restaurant'] {
        ...,
       dishes[]->{
        ...,
      }
         }
      `
export default {
  name: 'Categories',
  data() {
    return {
      loading: true,
      categories: [],
      dishes: [],
      showModal: false,
    }
  },
  created() {
    this.fetchData()
  },

  watch: {
    $route: 'fetchData',
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source)
    },
    fetchData() {
      this.error = this.post = null
      this.loading = true
      sanity.fetch(query).then(
        (categories) => {
          this.loading = false
          this.categories = categories
          //don't need this
          this.dishes = categories[0].dishes
        },
        (error) => {
          this.error = error
        },
      )
    },

    openModal(item) {
      this.dishes = item.dishes

      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
  },
}
</script>

<style scoped>
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, calc(100% / 3 - 2rem)));
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
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.card-modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 20%;
  padding: 60px 0;
  border-radius: 20px;
  overflow-y: auto;
  padding: 2%;
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

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
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
