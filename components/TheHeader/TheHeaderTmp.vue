    <header class="main-header">
      
        <nav class="main-nav">

          <b-button v-b-toggle.sidebar-1 width="100px" height="30px">rugby</b-button>
          <b-sidebar id="sidebar-1" title="Sidebar" bg-variant="light" shadow>
            <div class="px-3 py-2">
              <nav class="mb-3">
                <b-nav vertical>
                  <b-nav-item active @click="hide">Active</b-nav-item>
                  <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
                  <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
                  
                </b-nav>
              </nav>
            </div>
          </b-sidebar>
            


            <ul class="nav-links">

                

                <nuxt-link to="/" tag="li" class="nav-link"><a>Mecze</a></nuxt-link>
                <nuxt-link to="/about" tag="li" class="nav-link"><a>About</a></nuxt-link>
            </ul>

            
            


        </nav>
    </header>
</template>



<template>
   <div>
  <b-navbar toggleable="lg" type="dark" variant="dark" sticky="true">
    
    
    <b-collapse id="nav-collapse" is-nav>
    
      <b-navbar-nav class="p-2">
       
      <b-dropdown text="menu">
        <b-nav-item-dropdown text="menu" color="yellow" lazy="true" left>
          <b-dropdown-item> 
            <nuxt-link to="/" tag="li" class="nav-link"><a>Mecze</a></nuxt-link>
          </b-dropdown-item>

          <b-dropdown-item> 
            <nuxt-link to="/ekstraliga" tag="li" class="nav-link"><a>tabela</a></nuxt-link>
          </b-dropdown-item>

          <b-dropdown-item> 
            <nuxt-link to="/kalendarz" tag="li" class="nav-link"><a>kalendarz</a></nuxt-link>
          </b-dropdown-item>

          <b-dropdown-item> 
            <nuxt-link to="/about" tag="li" class="nav-link"><a>About</a></nuxt-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        </b-dropdown>

        
      </b-navbar-nav>

      <b-navbar-brand class=" d-flex justify-content-center" href="#">
        <img src="https://assets.stickpng.com/images/580b585b2edbce24c47b2b6c.png" class="d-inline-block align-top" width="4%" alt="Kitten">
        Maul Score
      </b-navbar-brand>
    </b-collapse>
  </b-navbar>
</div>
</template>