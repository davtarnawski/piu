<template>
    <div class="bg" :style="{ backgroundImage: `url(${image})`}">
        <section id="about-page" v-editable="bridge">
        <div class="container">
            <div class="row">
                <h3>{{ content }}</h3>
            </div>
        </div>    
  <div>         
  <b-card
    img-src="~/assets/rugby chart.png"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mt-2"
  >
    <b-card-text>
      {{ title }}
    </b-card-text>
    
    
  </b-card>

</div>

        </section>
    </div>
</template>

<script>
import rugbImage from "assets/scrum.png";
export default {
    data(){
        return {
            image: rugbImage
        };
    },
    head() {
      return {
        title: ""
      }
    },
    asyncData(context) {
        return context.app.$storyapi.get('cdn/stories/frontpage', {
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
  padding-left: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50px;
  
  margin: auto;
  text-align: center;
  text-justify: center;
  overflow: auto;
  width: 140%;
  
}

.bg {
        
}

.bg img {
        
}

.tytuł {
    //padding-left: 70px;
}

#about-page {
    align-content: center;
    width: 80%;
    max-width: 1000px;
    //margin: auto;
    //column-count: 2;
}

.opis {
    text-justify: center;
    text-align: center;
    //margin: auto;
    //overflow: auto;
    //padding: 65px 0;
    //max-width: 220px;
}

#about-page p {
    white-space: pre-line;
}
</style>