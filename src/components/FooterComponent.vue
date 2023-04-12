<template>
  <div class="footer">
    <div class="box-container">
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
  display: flex; /* Add this line to enable flex layout */
  justify-content: center; /* Add this line to center the content horizontally */
  flex-direction: column; /* Add this line to stack the content vertically */
  align-items: center; /* Add this line to center the content vertically */
}

.footer .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1.5rem;
  /* Add the following line to limit the width of the .box-container */
  width: fit-content;
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
