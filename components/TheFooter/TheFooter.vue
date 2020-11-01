<template>
    <footer class="main-footer">
        <nav class="main-nav">
            <ul class="nav-links">
                <a href="https://facebook.com">
                <b-img src="~/assets/facebook1.png" width="30%" fluid alt="responsive image"></b-img>
                </a>

                <a href="https://instagram.com">
                <b-img src="~/assets/instagram.png" width="30%" fluid alt="responsive image"></b-img>
                </a>

                <a href="https://twitter.com">
                <b-img src="~/assets/twitter1.png" width="30%" fluid alt="responsive image"></b-img>    
                </a>
            </ul>
        </nav>
    </footer>
</template>

<script>

</script>

export default {
    mounted() {
    this.$nextTick(()=> {
      this.$nuxt.$loading.start()

      setTimeout(() =>this.$nuxt.$loading.finish(), 500)
    })
  }
}

<style scoped>
 .main-footer {
     position: fixed;
     bottom: 0;
     left: 0;
     width: 100%;
     background: #022d30;
     height: 2.5rem;
 }

 .main-nav {
     height: 100%;
 }

 .nav-links {
     padding-top: 5px;
     //padding-bottom: 5px;
     justify-content: start;
     padding-left: 50px;
 }

.nav=link{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    padding: 0.3rem;
}

.nav-link.nuxt-link-exact-active {
    border-bottom: 3px solid #06c4d1;
}

.nav-link a{
    display: block;
    text-decoration: none;
    color: white;
}

.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active a {
    color: #06c4d1;
}
</style>