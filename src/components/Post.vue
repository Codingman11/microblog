<template>
  <div>
    <b-card tag="article" style="max-width: 50em; padding-top: 100px; padding-bottom: 100px; text-align: center;" class="post-item">
        <h1>{{post.title}} </h1>
      <b-card-text>
        {{post.description}}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: "Post",
  props: ["post"]
};
</script>

<style scoped>
 .post-item {
        background: #f4f4f4;
        padding: 10px;
        margin: auto ;
     
        border-bottom: 1px #ccc dotted;
    }
</style>