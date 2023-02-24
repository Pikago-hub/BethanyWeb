<template>
  <div class="header">
    <router-link @click="scrollToTop()" to="/" class="logo">
      <img src="../assets/images/bethany.png" />
    </router-link>

    <nav class="navbar navbar-expand-lg navbar-light">
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
  </div>
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
  position: sticky;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;

  background: #fff;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  /*justify-content: space-between;*/
  padding: 2rem 9%;
}

.header .logo {
  font-size: 2.5rem;
  font-weight: bolder;
  color: #130f40;
}

.header .logo img {
  padding-right: 0.5rem;
  color: #27ae60;
  max-inline-size: 100%;
  /*
  block-size: auto;
  */
}

.header .navbar a {
  font-size: 1.5rem;
  margin: 0 1rem;
  color: #666;
}

.header .navbar a:hover {
  color: #27ae60;
}

.header .navbar a.router-link-exact-active {
  color: #f38609;
}

.header .icons div {
  height: 4rem;
  width: 4rem;
  line-height: 4rem;
  font-size: 1.5rem;
  background: #f7f7f7;
  color: #130f40;
  border-radius: 0.5rem;
  margin-left: 0.3rem;
  cursor: pointer;
  text-align: center;
}

.header .icons div:hover {
  color: #fff;
  background: #27ae60 !important;
}

.header .icons a.router-link-exact-active .cart {
  background: #f38609;
  color: white;
}

/*
.header .icons .account .drop-down-select {
    display: none;
    position: absolute;
    margin-left: -50px;
    list-style-type: none;
}

.header .icons .account .drop-down-select a {
    text-decoration: none;
    color: #130f40;
    font-size: 15px;
    font-weight: 500;
    float: left;
    width: 95px;
    border-radius: 5%;

}

.header .icons .account .drop-down-select.active {
    display: block !important;
}

.header .icons .account .drop-down-select.active a {
    background-color: #f7f7f7;
}

.header .icons .account .drop-down-select.active a:hover {
    background-color: #f38609;
    color: white;
}

 .header .icons .account:hover .drop-down-select {
    display: block;
} 

.header .icons .account:hover .drop-down-select a {
    background-color: #f7f7f7;

}

.header .icons .account:hover .drop-down-select a:hover {
    background-color: #f38609;
    color: white;
}
*/
/*
@media (min-width: 769px) {
  .header .icons .account:hover .drop-down-select {
    display: block;
  }
}
*/

@media (max-width: 768px) {
  .header .navbar {
    /*position: absolute;
        top: 99%;
        left: 0;
        right: 0;
        background: #fff;
        
        border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
        border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
        
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        */
  }
/*
  .header .navbar.active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  .header .navbar a {
    font-size: 1.5rem;
    margin: 1.5rem;
    display: block;
  }
  */
}

@media (max-width: 576px) {
  .header .navbar a {
    font-size: 1.5rem;
    margin: 0;
  }
}
</style>
