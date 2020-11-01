<template>
<div class="bg" :style="{ backgroundImage: `url(${image})`}">
    <section id="tabela-page" v-editable="bridge">
        
              <div class="container">
            <div class="row">
                <h3>{{ title }}</h3>
            </div>
        </div>
           // <b-table hover :items="table"></b-table>

            <div class="tabel">
                <b-img src="~/assets/tabela.png"  ></b-img>
            </div>
        
        
    </section>
    </div>
</template>

<script>
import rugbyImage from 'assets/rugby-igra-sport.jpg'
export default {
    data() {
        return {
            image: rugbyImage,
        }
    },
    head() {
      return {
        title: "Maul Score"
      }
    },
    asyncData(context) {
        return context.app.$storyapi.get('cdn/stories/tabela', {
            version: 'draft'
        }).then(res => {
            console.log(res.data)
            return {
                bridge: res.data.story.content,
                title: res.data.story.content.title,
                table: res.data.story.content.tabela.object
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
  max-width: 500px;
}

.tabel {
    border-radius: 50px;
  padding: 10px;
  margin: auto;
  text-align: center;
  text-justify: center;
  overflow: auto;
}

#tabela-page {
    margin-top: 10px;
    width: 100%;
    max-width: 950px;
    margin: auto;
    text-align: center;
    font-size: 30px;
    color: black;
    text-decoration: underline;
    //-webkit-text-stroke: 2px black;
    font-weight: 900;
}

#tabela-page p {
    white-space: pre-line;
}
</style>