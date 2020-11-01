<template>
  <nuxt-link
    :to="/calendar/"
    class="game-preview">
    <article>
    
      <div class="game-preview-content">
        <h1>{{ title }}</h1>
        <p>{{ date }}</p>
        <p>{{ place }}</p>
      </div>
    </article> 
  </nuxt-link>
</template>

<script>


export default {
  props: {
    title: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>


<style scoped>
a {
  text-decoration: none;
  color: black;

}

.game-preview {
  border-radius: 3px;
  box-shadow: 10px 10px 20px 10px rgba(0, 0, 0, 0.5);
  width: 90%;
  height: 9rem;
  margin: 1rem;
}



.game-preview-content {
  text-align: center;
  padding: 1rem;
}

@media (min-width: 35rem) {
  .game-preview {
    width: 25rem;
  }
}
</style>