<template>
  <div>
    <TheHeader />     
    <main class="main-content">
      <Nuxt />

      
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import TheFooter from '@/components/TheFooter/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter
  },
  head() {
    return {
      link: [
        {
          "rel": "stylesheet",
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  }
}
</script>

<style>
.intro {
  height:100%;
  
}

* {
  box-sizing: border-box;
}

body {
  font-family: "Lato", sans-serif;
  margin: 0;
  
}

.main-content {
  margin-top: 4.5rem;
  margin-bottom: 2.5rem;
  background: url("/assets/mainbackground.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  
}

</style>
