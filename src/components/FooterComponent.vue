<template>
  <div class="footer">
    <div class="box-container">
      <div class="box">
        <h3>our menu</h3>
        <router-link @click="scrollToTop()" to="/menu"
          ><i class="fas fa-arrow-right"></i> Appetizers</router-link
        >
        <router-link @click="scrollToTop()" to="/menu"
          ><i class="fas fa-arrow-right"></i> Fried Rice</router-link
        >
        <router-link @click="scrollToTop()" to="/menu"
          ><i class="fas fa-arrow-right"></i> Rice Cake</router-link
        >
        <router-link @click="scrollToTop()" to="/menu"
          ><i class="fas fa-arrow-right"></i> Steam Rice</router-link
        >
        <router-link @click="scrollToTop()" to="/menu"
          ><i class="fas fa-arrow-right"></i> Lo Mein</router-link
        >
        <router-link @click="scrollToTop()" to="/menu"
          ><i class="fas fa-arrow-right"></i> Rice Noddle</router-link
        >
        <router-link @click="scrollToTop()" to="/menu"
          ><i class="fas fa-arrow-right"></i> Dry Noddle</router-link
        >
        <router-link @click="scrollToTop()" to="/menu"
          ><i class="fas fa-arrow-right"></i> Sizzling</router-link
        >
        <router-link @click="scrollToTop()" to="/menu"
          ><i class="fas fa-arrow-right"></i> Noodle Soup</router-link
        >
        <router-link @click="scrollToTop()" to="/menu"
          ><i class="fas fa-arrow-right"></i> Combination Platter</router-link
        >
      </div>

      <div class="box">
        <h3>our menu</h3>
        <router-link @click="scrollToTop()" to="/menu"
          ><i class="fas fa-arrow-right"></i> Fusion Tea</router-link
        >
        <router-link @click="scrollToTop()" to="/menu"
          ><i class="fas fa-arrow-right"></i> Bethany's Classic</router-link
        >
        <router-link @click="scrollToTop()" to="/menu"
          ><i class="fas fa-arrow-right"></i> Coffee</router-link
        >
        <router-link @click="scrollToTop()" to="/menu"
          ><i class="fas fa-arrow-right"></i> Bethany Café Top 10</router-link
        >
        <router-link @click="scrollToTop()" to="/menu"
          ><i class="fas fa-arrow-right"></i> Fizzy Drinks</router-link
        >
      </div>

      <div class="box">
        <h3>quick links</h3>
        <router-link @click="scrollToTop()" to="/">
          <i class="fas fa-arrow-right"></i> home</router-link
        >
        <router-link @click="scrollToTop()" to="/about">
          <i class="fas fa-arrow-right"></i> about</router-link
        >
        <router-link @click="scrollToTop()" to="/promotions">
          <i class="fas fa-arrow-right"></i> promotions
        </router-link>
        <router-link @click="scrollToTop()" to="/menu">
          <i class="fas fa-arrow-right"></i> menu</router-link
        >
      </div>

      <div class="box">
        <h3>opening hours</h3>
        <p>open daily : 11am to 10:00pm</p>
      </div>
    </div>

    <div class="bottom">
      <div class="share">
        <a
          href="https://www.facebook.com/profile.php?id=100063817472361"
          class="fab fa-facebook-f"
        ></a>
        <a href="https://twitter.com/?lang=en" class="fab fa-twitter"></a>
        <a
          href="https://www.instagram.com/bethanycafe_arlington/?hl=en"
          class="fab fa-instagram"
        ></a>
        <a
          href="https://www.yelp.com/biz/bethany-boba-tea-and-cafe-arlington"
          class="fab fa-yelp"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FooterComponent",

  computed: {
    ...mapState(["user"]),
  },

  methods: {
    scrollToTop() {
      window.location.href = "https://eats.redbirdcloud.com/BethanyCafe";
    },
  },
};
</script>

<style scoped>
/* footer */
.footer {
  background: #f7f7f7;
  padding: 2rem 9%;
}

.footer .news-letter {
  text-align: center;
  margin-bottom: 2rem;
}

.footer .news-letter h3 {
  font-size: 2.5rem;
  color: #130f40;
  padding-bottom: 1rem;
}

.footer .news-letter form {
  max-width: 70rem;
  margin: 1rem auto;
  max-width: 70rem;

  display: flex;
  border-radius: 0.5rem;
  overflow: hidden;
}

.footer .news-letter form input[type="email"] {
  height: 100%;
  width: 100%;
  padding: 1rem 1.2rem;
  font-size: 1.6rem;
  color: #130f40;
  text-transform: none;
}

.footer .news-letter form input[type="submit"] {
  padding: 0 2rem;
  font-size: 1.6rem;
  color: #fff;
  background: #27ae60;
  cursor: pointer;
}

.footer .news-letter form input[type="submit"]:hover {
  background: #130f40;
}

.footer .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1.5rem;
}

.footer .box-container .box h3 {
  font-size: 2.2rem;
  color: #130f40;
  padding: 1rem 0;
}

.footer .box-container .box p {
  font-size: 1.4rem;
  color: #666;
  padding: 1rem 0;
}

.footer .box-container .box a {
  display: block;
  font-size: 1.4rem;
  color: #666;
  padding: 1rem 0;
}

.footer .box-container .box a:hover {
  color: #27ae60;
}

.footer .box-container .box a:hover i {
  padding-right: 2rem;
}

.footer .box-container .box a i {
  padding-right: 0.5rem;
  color: #27ae60;
}

.footer .bottom {
  padding-top: 1rem;
  text-align: center;
}

.footer .bottom .share {
  margin: 1.5rem 0;
}

.footer .bottom .share a {
  height: 4.5rem;
  width: 4.5rem;
  line-height: 4.5rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  margin: 0 0.3rem;
  color: #fff;
  background: #27ae60;
}

.footer .bottom .share a:hover {
  background: #130f40;
}

@media (max-width: 576px) {
  .footer .box-container {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
}
</style>
