<template>
  <div class="categories-grid">
    <div v-for="(item, index) in categories" :key="index" class="category">
      <div class="category-content">
        <h2>{{ item.name }}</h2>
        <img
          v-if="item.image"
          :src="imageUrlFor(item.image).ignoreImageParams().width(240)"
          :alt="item.image.alt"
        />
      </div>
    </div>
  </div>
</template>

<script>
import sanity from '../sanity'
import imageUrlBuilder from '@sanity/image-url'

const imageBuilder = imageUrlBuilder(sanity)

const query = `
      *[_type == "category"]
      `

export default {
  name: 'Categories',
  data() {
    return {
      loading: true,
      categories: [],
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
        },
        (error) => {
          this.error = error
        },
      )
    },
  },
}
</script>

<style scoped>
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.category {
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.category-content {
  padding: 1rem;
}

.category img {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
}
</style>
