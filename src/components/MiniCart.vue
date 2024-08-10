<template>
  <article class="category-card">
    <router-link :to='{ name: link }'>
      <div class="card-thumbnail">
        <figure class="category-card-img">
          <img alt="#" :src="thumbnail">
        </figure>
      </div>

      <div class="card-content">
        <h4 class="card-title">{{ title }}</h4>
        <span class="card-subtitle">{{ subtitle }}</span>
      </div>
    </router-link>
  </article>
</template>


<script>


export default {
  name: 'MiniCart',

  props: {
    link: {
      type: String,
      default: 'homePageRoute'
    },
    thumbnail: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  },

  data() {
    return {

    }
  }
}
</script>


<style scoped lang="scss">
.category-card {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 20px;
  padding: 15px;

  a {
    text-decoration: none;
  }

  &:is(:hover, :focus) {
    background-color: #651fff;
  }
}

.category-card:hover .card-title {
  color: #fff;
}

.category-card:hover .card-subtitle {
  color: #fff;
}

.card-title {
  font-size: 16px;
  margin-bottom: 0;
  color: #444;
  transition: 0.2s;
  white-space: nowrap;
}

.card-subtitle {
  margin-top: 5px;
  font-size: 13px;
  color: #666;
  transition: 0.2s;
  white-space: nowrap;
}

.category-card-img {
  display: block;
  border-radius: 20px;
  width: 60px;
  height: 60px;
  position: relative;
  overflow: hidden;
  margin-bottom: 15px;
  margin-right: auto;
  margin-left: auto;


  img {
    display: block;
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
  }
}
</style>