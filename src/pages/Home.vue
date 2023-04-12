<template>
  <div>
    <div class="home-page">
      <div class="slideshow-container">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="slideshow-image"
          :style="{
            backgroundImage: `url(${image})`,
            opacity: currentIndex === index ? 1 : 0,
          }"
        ></div>
        <div class="dots-container">
          <span
            v-for="(image, index) in images"
            :key="index"
            class="dot"
            :class="{ active: currentIndex === index }"
            @click="currentIndex = index"
          ></span>
        </div>
      </div>
      <div class="home-category-container">
        <div class="home-category">
          <div class="box">
            <a href="https://eats.redbirdcloud.com/BethanyCafe">
              <img src="../assets/images/egg-roll-img.png" alt="" />
              <h3>Appetizers</h3>
            </a>
          </div>

          <div class="box">
            <a href="https://eats.redbirdcloud.com/BethanyCafe">
              <img src="../assets/images/fried-rice-img.png" alt="" />
              <h3>Fried Rice</h3>
            </a>
          </div>

          <div class="box">
            <a href="https://eats.redbirdcloud.com/BethanyCafe">
              <img src="../assets/images/noodle-soup-img.png" alt="" />
              <h3>Noodles</h3>
            </a>
          </div>

          <div class="box">
            <a href="https://eats.redbirdcloud.com/BethanyCafe">
              <img src="../assets/images/platter-img.png" alt="" />
              <h3>Combination Platter</h3>
            </a>
          </div>

          <div class="box">
            <a href="https://eats.redbirdcloud.com/BethanyCafe">
              <img src="../assets/images//tea-img.png" alt="" />
              <h3>Tea</h3>
            </a>
          </div>

          <div class="box">
            <a href="https://eats.redbirdcloud.com/BethanyCafe">
              <img src="../assets/images/ss-img.png" alt="" />
              <h3>Slush & Smoothies</h3>
            </a>
          </div>
        </div>
      </div>

      <!-- <div class="home-banner">
        <div class="grid-banner row">
          <div class="grid col-md-8">
            <img src="../assets/images/dis-1.jpg" alt="" />
            <div class="content center">
              <span>special offer</span>
              <div />
              <a href="https://eats.redbirdcloud.com/BethanyCafe" class="btn"
                >order now</a
              >
            </div>
          </div>

          <div class="grid col-md-4">
            <img src="../assets/images/dis-2.jpg" alt="" />
            <div class="content center"></div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  // components: {
  //   VueSlickCarousel,
  // },
  data() {
    return {
      images: [
        require("@/assets/images/home1.png"),
        require("@/assets/images/home2.png"),
        require("@/assets/images/home3.png"),
        require("@/assets/images/home5.png"),
        require("@/assets/images/home6.png"),
      ],
      currentIndex: 0,
      intervalId: null,
    };
  },

  mounted() {
    this.startSlideshow();
  },
  beforeUnmount() {
    this.stopSlideshow();
  },

  methods: {
    startSlideshow() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 3000);
    },
    stopSlideshow() {
      clearInterval(this.intervalId);
    },
  },
};
</script>

<style scoped>
.slideshow-container {
  width: 80%;
  max-width: 800px;
  height: 400px;
  margin: 0 auto 40px auto;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.slideshow-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.dots-container {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
}

.dot.active {
  background-color: #333;
}

.home-main {
  display: flex;
  align-items: center;
  flex-wrap: wrap-reverse;
  gap: 2rem;
  position: relative;
  overflow: hidden;
}

.home-main .content {
  flex: 1 1 41rem;
}

.home-main .content span {
  font-size: 2rem;
  color: #27ae60;
}

.home-main .content h3 {
  font-size: 4rem;
  color: #130f40;
  padding-top: 1rem;
}

.home-main .content p {
  font-size: 1.4rem;
  color: #666;
  line-height: 2;
  padding: 1rem 0;
}

.home-main .image {
  flex: 1 1 41rem;
  margin: 2rem 0;
  pointer-events: none;
}

.home-main .image .home-img {
  width: 100%;
  margin-top: 5rem;
}

.home-main .home-parallax-img {
  position: absolute;
  top: -15rem;
  right: -15rem;
  width: 80vw;
}

/* home category */
.home-category-container {
  width: 80%; /* Set the width similar to the slideshow-container */
  max-width: 800px; /* Set a maximum width */
  margin: 0 auto; /* Center the container */
  padding-bottom: 40px; /* Add some padding at the bottom */
}

.home-category {
  display: grid;
  grid-template-columns: repeat(
    3,
    1fr
  ); /* Display a maximum of 3 boxes per row */
  gap: 1.5rem;
  padding-bottom: 5rem;
}

.home-category .box {
  padding: 2rem;
  text-align: center;
  border-radius: 10px;
  background: #fff9db;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem; /* Add padding to create space between text and edges */
}

.home-category .box:hover {
  background: #27ae60;
}

.home-category .box:hover h3 {
  color: #fff;
}

.home-category .box img {
  height: 7rem;
  border-radius: 10px; /* Add rounded corners to the image */
}

.home-category .box h3 {
  font-size: 1.8rem;
  color: #130f40;
  word-break: break-word; /* Break long words if they don't fit in the box */
}

/* home banner */
.home-banner .row-banner {
  height: 45rem;
  background-size: cover;
  background-position: center;
  position: relative;
}

.home-banner .row-banner .content {
  position: absolute;
  top: 50%;
  left: 7%;
  transform: translateY(-50%);
}

.home-banner .row-banner .content span {
  font-family: "Satisfy", cursive;
  font-size: 4rem;
  color: #27ae60;
  color: #130f40;
}

.home-banner .row-banner .content h3 {
  font-size: 6rem;
  color: red;
  text-transform: uppercase;
}

.home-banner .row-banner .content p {
  font-size: 2rem;
  padding-bottom: 1rem;
}

.home-banner .grid-banner .grid {
  border-radius: 1rem;
  overflow: hidden;
  height: 45rem;
}

.home-banner .grid-banner .grid:hover img {
  transform: scale(1.1);
}

.home-banner .grid-banner .grid img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.home-banner .grid-banner .grid .content {
  position: absolute;
  top: 2rem;
  padding: 0 2rem;
  justify-content: center;
}

.home-banner .grid-banner .grid .content.center {
  text-align: center;
  width: 100%;
}

.home-banner .grid-banner .grid .content.center span {
  color: rgb(255, 255, 255);
}

.home-banner .grid-banner .grid .content.center h3 {
  color: #ffffff;
}

.home-banner .grid-banner .grid .content span {
  font-size: 2.5rem;
  color: #fff;
}

.home-banner .grid-banner .grid .content h3 {
  font-size: 3rem;
  color: #fff;
  padding-top: 0.5rem;
}

.home-about {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  background: #f7f7f7;
}

.home-about .image {
  flex: 1 1 40rem;
}

.home-about .image img {
  width: 100%;
}

.home-about .content {
  flex: 1 1 40rem;
}

.home-about .content span {
  font-family: "Satisfy", cursive;
  font-size: 3rem;
  color: #27ae60;
}

.home-about .content .title {
  font-size: 3rem;
  padding-top: 0.5rem;
  color: #130f40;
}

.home-about .content p {
  padding: 1rem 0;
  line-height: 2;
  font-size: 1.4rem;
  color: #666;
}

.home-about .content .icons-container {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.home-about .content .icons-container .icons {
  flex: 1 1 20rem;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
}

.home-about .content .icons-container .icons h3 {
  font-size: 1.7rem;
  color: #130f40;
}

@media (max-width: 576px) {
  .home-category-container {
    width: 90%; /* Adjust the width for smaller screens */
    padding-bottom: 20px; /* Adjust the padding for smaller screens */
  }
}
@media (max-width: 576px) {
  .slideshow-container {
    width: 90%; /* Adjust the width for smaller screens */
    height: 200px; /* Adjust the height for smaller screens */
    margin-bottom: 20px; /* Adjust the margin for smaller screens */
  }
}

@media (max-width: 768px) {
  .home-category {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* Display a maximum of 2 boxes per row on smaller screens */
  }
}

@media (max-width: 768px) {
  #menu-btn {
    display: inline-block;
  }

  .home-main .home-parallax-img {
    top: 0;
    right: 0;
    width: 100%;
  }

  .home-banner .grid-banner .content h3 {
    font-size: 15px !important;
  }

  .home-banner .grid-banner .content.center {
    padding-left: 0px !important;
  }
}

@media (max-width: 576px) {
  .home-main .content h3 {
    font-size: 3rem;
  }

  .home-main .content p {
    font-size: 1.5rem;
  }
}
</style>
