<template>

    
    <section id="front-page" v-editable="bridge">
        <div class="bg" :style="{ backgroundImage: `url(${image})`}">
          
        
    
        
        <div class="container">
            <div class="row">
                <h3>{{ content }}</h3>
            </div>
        </div>
        
    
    
<div class="photos">
<a href="https://juvenia.info/">
    <b-img src="~/assets/juvenia.png" width="60%" fluid alt="Responsive image"></b-img>
    </a>

    <a href="https://arkarugby.pl/">
    <b-img src="~/assets/arka.png" width="60%" fluid alt="Responsive image"></b-img>
    </a>

    <a href="https://lechiarugby.pl/">
    <b-img src="~/assets/lechia.png" width="60%" fluid alt="Responsive image"></b-img>
    </a>

    <a href="https://ksbudowlani.com/">
    <b-img src="~/assets/lublin.png" width="60%" fluid alt="Responsive image"></b-img>
    </a>

    <a href="https://ogniwosopot.pl/">
    <b-img src="~/assets/ogniwo.png" width="60%" fluid alt="Responsive image"></b-img>
    </a>

    <a href="https://juvenia.info/">
    <b-img src="~/assets/orkan.jpg" width="60%" fluid alt="Responsive image"></b-img>
    </a>

    <a href="https://pogon.siedlce.pl/">
    <b-img src="~/assets/siedlce.jpg" width="60%" fluid alt="Responsive image"></b-img>
    </a>

    <a href="https://skra-rugby.pl/">
    <b-img src="~/assets/skra.png" width="60%" fluid alt="Responsive image"></b-img>
    </a>

    <a href="https://spartajarocin.pl/">
    <b-img src="~/assets/sparta.png" width="60%" fluid alt="Responsive image"></b-img>
    </a>

    <a href="https://budowlanilodz.dbv.pl/">
    <b-img src="~/assets/spółka.png" width="60%" fluid alt="Responsive image"></b-img>
    </a>

    
  </div>
</div>
    </section>
    
</template>

<script>
import bikeImg from "assets/background.jpg";
export default {
    data() {
    return {
      image: bikeImg,
    };
  },
  head() {
      return {
        title: "Maul Score"
      }
    },
    asyncData(context) {
        return context.app.$storyapi.get('cdn/stories/about', {
            version: 'draft'
        }).then(res => {
            console.log(res.data)
            return {
                bridge: res.data.story.content,
                title: res.data.story.content.title,
                content: res.data.story.content.content
            }
        })
    },
    mounted() {
        this.$storybridge.on('change', () => {
            location.reload(true);
        })
    }
}
</script>

<style>

.row {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50px;
  padding: 10px;
  margin: auto;
  text-align: center;
  text-justify: center;
  overflow: auto;
  width: 120%;
}

.bg {
    
  /* Full height */
  

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


.photos {
  max-width: 650px;
  text-align: center;
  margin: auto;
  margin-top: 14.95rem;
}



#front-page p {
    white-space: pre-line;
}
</style>