<template>   
    <header class="main-header">
        <nav class="main-nav" toggleable="lg">
            <ul class="nav-links">

              <b-dropdown text="menu" variant="info" class="mr-2" right>

              <b-dropdown-item> 
                <nuxt-link to="/" tag="li" class="nav-link"><a>Główna</a></nuxt-link>
              </b-dropdown-item>

              <b-dropdown-item> 
                <nuxt-link to="/galery" tag="li" class="nav-link"><a>fotorelacje</a></nuxt-link>
              </b-dropdown-item>

              <b-dropdown-item> 
                <nuxt-link to="/tabela" tag="li" class="nav-link"><a>tabela</a></nuxt-link>
              </b-dropdown-item>

              <b-dropdown-item> 
                <nuxt-link to="/calendar" tag="li" class="nav-link"><a>kalendarz</a></nuxt-link>
              </b-dropdown-item>

              <b-dropdown-item> 
                <nuxt-link to="/about" tag="li" class="nav-link"><a>About</a></nuxt-link>
              </b-dropdown-item>
            

              //</b-dropdown> 
            <div class="grafika">
              <nuxt-link to="/" tag="return" class="main-page">
                <a><b-img src="~/assets/logo1.png" vertical-align="top" width="140%" fluid alt="Responsive image">
              </b-img></a></nuxt-link>
            

            </div>

            <div class="ogłoszenie">
              
                <b-button v-b-modal.my-modal variant="danger">Nowości!</b-button>

                <b-modal id="my-modal">
                  <b-img src="~/assets/form.png" class="form" vertical-align="top" fluid alt="responsive image"></b-img>
                </b-modal>
              
            </div>
           
            </ul>

            
            </nav>                 
    </header>
</template>

<script>

  export default {
    head() {
      return {
        title: "Maul Score"
      }
    }
  }

</script>

<style scoped>

.modal {
  width: 98%;
  padding-left: 5.2rem;
  padding-right: 50.2rem;
  border-radius: 50px;
  
}

.form{
  align-content: right;
}

.ogłoszenie {
margin-left: 29rem;
}

.grafika {
  justify-content: center;
  align-content: center;
  margin-left: 33rem;
  
}

 .main-header {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     background: #022d30;
     height: 4.5rem;
 }

 .main-nav {
     
 }

 .nav-links {
     list-style: none;
     margin-top: 0;
     margin-left: 0.5em;
     padding: 0;
     display: flex;
     
     align-items: center;
     height: 100%;
 }

.nav-link{
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
    color: #CCCC00;
}

.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active a {
    color: #06c4d1;
}



    
</style>