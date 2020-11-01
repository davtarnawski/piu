<template>
<div  class="bg" :style="{ backgroundImage: `url(${image})`}" >
  <section id="games">
    
    <GamePreview
    v-for="game in games"
    :key="game.id"
    :date="game.date.toLocaleDateString()"
    :title="game.title"
    :place="game.place"
    :id="game.id" />
    
  </section>
  </div>
</template>

<script>
import GamePreview from "@/components/GamePreview/GamePreview";
import rugbyImage from "assets/about1.png";

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
  components: {
    GamePreview
  },
  asyncData(context) {
    return context.app.$storyapi
    .get("cdn/stories", {
      version: "draft", 
      starts_with: "calendar/"
    })
    .then(res => {
      return {
        games: res.data.stories.map(bp => {
          return {
            id: bp.slug,
            title: bp.content.title,
            place: bp.content.place,
            date: bp.content.date = new Date(bp.content.date)
        }
      })
      };
    });
  }

}
</script>

<style scoped>

.bg {
  height: 50%;
  padding-top: 20px;
  z-index: -1;
}
#games {
  z-index: 0;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding-left: 50px;
  padding-right: 50px;
  margin-left: 55px;
  margin-right: 55px;
  flex-wrap: wrap;
}

@media (min-width: 35rem) {
  #games {
    flex-direction: row;
  }
}


</style>
