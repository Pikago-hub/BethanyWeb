<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    style="height: 80px;"
  >
    <router-link @click="scrollToTop()" to="/" class="navbar-brand">
      <img
        src="../assets/images/bethany.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
      />
      Bethany
    </router-link>

    <button class="navbar-toggler" type="button" @click="showNav()">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" :class="{ show: modalOpen }">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/promotions">
            Promotions
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/menu">Menu</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Modal from '@/admin/Modal'

export default {
  name: 'NavBar',
  data() {
    return {
      modalOpen: false,
    }
  },
  methods: {
    showNav() {
      this.modalOpen = !this.modalOpen
    },
    components: {
      Modal,
    },
  },
}
</script>
<style scoped>
.header {
  padding: 3rem 9%;
}

.header .logo {
  font-size: 3rem;
}

.header .navbar a {
  font-size: 2rem;
  margin: 0 2rem;
}
</style>
