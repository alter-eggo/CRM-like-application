<template lang="html">
    <div class="wrapper-content wrapper-content--fixed">
      <section>
        <div class="container">
          <h1 class="title">Page not found</h1>
          <router-link to="/" class="link">Go to main page?</router-link>

        </div>
      </section>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.wrapper-content{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
}
</style>
