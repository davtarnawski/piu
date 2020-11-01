<template>
  <div id="post" v-editable="bridge">
    <div class="post-thumbnail" :style="{backgroundImage: 'url(' + image + ')'}"></div>
    <section class="post-content">
      <div class="post-opis">
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
      </div>
      <b-carousel class="slajd"
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="2048"
        img-height="960"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
   
      <b-carousel-slide
        
        
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=55">
           
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
    </section>  
  </div>
</template>

<script>
export default {
  head() {
      return {
        title: "Maul Score"
      }
    },
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/blog/' + context.params.postId, {
      version: 'draft'
    })
    .then(res => {
      return {
        bridge: res.data.story.content,
        image: res.data.story.content.thumbnail,
        title: res.data.story.content.title,
        content: res.data.story.content.content
      };
    });
  },
  mounted() {
    this.$storybridge.on('change', () => {
      location.reload(true);
    })
  }
};
</script>

<style >

.slajd {
  margin-bottom: 5rem;
}
.post-thumbnail {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
}

.post-content {
  width: 100%;
  max-width: 900px;
  margin: auto;
}
.post-opis {
  width: 100%;
  max-width: 500px;
  margin: auto;
}

.post-content p {
  white-space: pre-line;
}
</style>