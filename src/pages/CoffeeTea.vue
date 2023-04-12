<template>
  <div class="coffee-tea">
    <!-- Add the new section with the CT.png image -->
    <div class="ct-section">
      <img class="ct-img" src="@/assets/images/CT.png" alt="CT" />
    </div>
    <!-- Wrap the coffee and tea images in a container -->
    <div class="images-container">
      <img class="coffee-img" src="@/assets/images/ss-img.png" alt="Coffee" />
      <img class="tea-img" src="@/assets/images/tea-img.png" alt="Tea" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CoffeeTea",
};
</script>

<style scoped>
.coffee-tea {
  display: flex;
  flex-direction: column; /* Stack the items vertically */
  align-items: center; /* Center the items */
  gap: 2rem; /* Add a gap between items */
}

.ct-section {
  width: 100%; /* Set the width of the CT section */
  text-align: center; /* Center the CT image */
}

.ct-img {
  max-width: 100%; /* Ensure the CT image is responsive */
  height: auto;
}

/* Wrap the coffee and tea images in a container */
.images-container {
  display: flex; /* Display images side by side */
  gap: 1rem; /* Add a gap between the coffee and tea images */
  width: 100%; /* Set the width of the images container */
  justify-content: center; /* Center the images */
}

.coffee-img,
.tea-img {
  max-width: 100%; /* Ensure the coffee and tea images are responsive */
  height: auto;
  border-radius: 10px; /* Make the images rounded */
}

/* Media query for smaller screens */
@media (max-width: 576px) {
  .images-container {
    flex-direction: column; /* Stack the coffee and tea images vertically on smaller screens */
    align-items: center; /* Center the images */
  }

  .ct-img {
    max-width: 80%; /* Set a smaller max-width for the CT image on smaller screens */
  }
}
</style>
