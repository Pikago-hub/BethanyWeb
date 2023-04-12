<template>
  <section class="about-section">
    <div class="heading">
      <span>about us</span>
      <h3>good quality dishes</h3>
    </div>

    <div class="image-section">
      <img
        src="../assets/images/aboutpage.png"
        alt="About Page"
        class="aboutpage-image"
      />
    </div>

    <div class="row">
      <div class="about-article">
        <h3>food brings people together</h3>
      </div>
    </div>

    <div class="row gallery">
      <div class="wrapper">
        <img src="../assets/images/about1.jpg" alt="" />
        <img src="../assets/images/about2.jpg" alt="" />
        <img src="../assets/images/about3.jpg" alt="" />
        <img src="../assets/images/about4.jpg" alt="" />
        <img src="../assets/images/about5.jpg" alt="" />
        <img src="../assets/images/about6.jpg" alt="" />
        <img src="../assets/images/about7.jpg" alt="" />
        <img src="../assets/images/about11.jpg" alt="" />
        <img src="../assets/images/about9.jpg" alt="" />
        <img src="../assets/images/about10.jpg" alt="" />
      </div>
    </div>

    <div class="contact-form-section">
      <h3 class="contact-form-title">Want to Join us?</h3>
      <div class="contact-container">
        <form class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" class="submit-button">Submit</button>
        </form>

        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.770019711227!2d-97.12390668481879!3d32.73525898098813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d7c1d413a69%3A0x76d751f1bfc0d7d2!2s705%20W%20Park%20Row%20Dr%2C%20Arlington%2C%20TX%2076013!5e0!3m2!1sen!2sus!4v1649613304139!5m2!1sen!2sus"
            width="100%"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");

.about-section {
  padding: 2rem 9%;
}

.about-section .about-content {
  display: flex;
  width: 100%;
}

.about-section .about-content img {
  background-color: rgb(249, 249, 249);
}

.about-section .about-content .about-content-text {
  font-size: 16px;
  padding-left: 50px;
}

.about-section .about-article {
  margin-top: 50px;
  padding: 10px;
  text-align: center;
  background-color: #27ae60;
  width: 100%;
}

.about-section .about-article h3 {
  font-family: "Satisfy", cursive;
  font-size: 32px;
  color: white;
}

.about-section .gallery {
  overflow: hidden;
  padding: 100px;
}

.about-section .gallery .wrapper {
  position: relative;
  flex-grow: 1;
  margin: auto;
  max-width: 1200px;
  max-height: 1200px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 2vmin;
  justify-items: center;
  align-items: center;
}

.about-section .gallery .wrapper img {
  z-index: 1;
  grid-column: span 2;
  max-width: 100%;
  margin-bottom: -52%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  transform: scale(1);
  transition: all 0.25s;
}

.about-section .gallery .wrapper img:nth-child(7n + 1) {
  grid-column: 2 / span 2;
}

.about-section .gallery .wrapper img:hover {
  z-index: 2;
  transform: scale(2);
}

.image-section {
  text-align: center; /* Center the image */
  margin-bottom: 20px; /* Add a gap between the image section and the next section */
}

.aboutpage-image {
  border-radius: 10px; /* Slightly rounded corners */
  max-width: 100%; /* Ensure the image does not overflow its container */
}

.contact-form-section {
  padding: 2rem;
}

.contact-form-title {
  text-align: center;
  margin-bottom: 1rem;
}

.contact-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.contact-form {
  flex: 1;
  max-width: calc(50% - 1rem);
  margin-right: 1rem;
}

.map-container {
  flex: 1;
  max-width: calc(50% - 1rem);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form-group label,
.form-group input,
.form-group textarea {
  font-size: 18px;
}

.submit-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #27ae60;
  color: #fff;
  cursor: pointer;
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column; /* Stack items vertically on small screens */
  }

  .contact-form {
    max-width: 100%;
    margin-right: 0;
  }

  .map-container {
    max-width: 100%;
    margin-top: 1rem;
  }
}

@media (max-width: 576px) {
  .aboutpage-image {
    width: 80%; /* Adjust the width of the image on small screens */
  }
}
@media (max-width: 768px) {
  .about-section .about-content img {
    width: 250px;
  }

  .about-section .gallery .wrapper img:hover {
    transform: scale(2.5);
  }
}

@media (max-width: 576px) {
  .about-section .about-content img {
    width: inherit;
  }

  .about-section .about-content {
    display: block;
  }

  .about-section .about-content .about-content-text {
    padding-left: 0px;
  }

  .about-section .gallery {
    padding: 50px 0px;
  }

  .about-section .gallery .wrapper img {
    max-width: 100%;
  }

  .about-section .gallery .wrapper {
    grid-gap: 2vmin;
  }

  .about-section .gallery .wrapper img:hover {
    transform: scale(2);
  }
}
</style>
