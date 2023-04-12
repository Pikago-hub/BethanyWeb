<template>
  <div class="coffee-tea">
    <img class="coffee-img" src="@/assets/images/ss-img.png" alt="Coffee" />
    <img class="tea-img" src="@/assets/images/tea-img.png" alt="Tea" />
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
  justify-content: center;
  gap: 1rem;
}

.coffee-img,
.tea-img {
  max-width: 100%;
  height: auto;
}
</style>
