<template>
  <div class="header">
    <router-link @click="scrollToTop()" to="/" class="logo">
      <img src="../assets/images/bethany.png" />
    </router-link>

    <nav class="navbar navbar-expand-lg navbar-light">
      <button class="navbar-toggler" type="button" @click="showNav()">
        <span class="navbar-toggler-icon"></span>
      </button>

      <button class="promo-button" @click="openPromoLink">
        <span class="promo-highlight">HUGE SAVING</span><br />
        <span class="promo-text">FREE TEA OR 50% OFF</span><br />
        <span class="promo-text">ORDER HERE</span>
      </button>

      <div class="collapse navbar-collapse" :class="{ show: modalOpen }">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/menu">Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/CoffeeTea"
              >Coffee & Tea</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/promotions">
              Promotions
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import Modal from "@/admin/Modal";

export default {
  name: "NavBar",
  data() {
    return {
      modalOpen: false,
    };
  },
  methods: {
    showNav() {
      this.modalOpen = !this.modalOpen;
    },
    openPromoLink() {
      // Open the specified URL in a new tab
      window.open("https://eats.redbirdcloud.com/BethanyCafe", "_blank");
    },
    components: {
      Modal,
    },
  },
};
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
.promo-button {
  background-color: red;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  margin: 10px;
  white-space: nowrap; /* Prevent text from wrapping to the next line */
}

.promo-button .promo-text {
  color: white;
}

.promo-button .promo-highlight {
  color: yellow;
  animation: flashing 0.5s infinite;
}
@keyframes flashing {
  0% {
    color: rgb(241, 207, 14);
  } /* Starting color */
  50% {
    color: rgb(199, 202, 36);
  } /* Lighter yellow color */
  100% {
    color: rgb(238, 226, 54);
  } /* Ending color */
}

.promo-button:hover {
  background-color: #e07507;
}

/* Adjust font size and padding for smaller screens */
@media (max-width: 576px) {
  .promo-button {
    font-size: 12px;
    padding: 8px 16px;
  }
}

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
