<template>


  <section id="posts">
  
    <PostPreview
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
    :excerpt="post.previewText"
    :thumbnailImage="post.thumbnailUrl"
    :id="post.id" />
  </section>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview";


export default {
  head() {
      return {
        title: "Maul Score"
      }
    },
  components: {
    PostPreview
  },
  asyncData(context) {
    return context.app.$storyapi
    .get("cdn/stories", {
      version: "draft", 
      starts_with: "blog/"
    })
    .then(res => {
      return {
        posts: res.data.stories.map(bp => {
          return {
            id: bp.slug,
            title: bp.content.title,
            previewText: bp.content.summary,
            thumbnailUrl: bp.content.thumbnail
        }
      })
      };
    });
  }
  // data() {
  //   return {
  //     posts: [
  //       {
  //         title: "pierwszy mecz sezonu",
  //         previewText: "orkan vs skra",
  //         thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1a/ST_vs_Gloucester_-_Match_-_23.JPG",
  //         id: "first"
  //       },
  //       {
  //       title: "drugi mecz sezonu",
  //       previewText: "ogniwo vs pogoń",
  //       thumbnailUrl: 
  //       "https://upload.wikimedia.org/wikipedia/commons/1/1a/ST_vs_Gloucester_-_Match_-_23.JPG",
  //       id: "second"
  //     }
  //     ]
  //   }
  // }
}
</script>

<style scoped>
#posts {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 55px;
}

@media (min-width: 35rem) {
  #posts {
    flex-direction: row;
  }
}


</style>
