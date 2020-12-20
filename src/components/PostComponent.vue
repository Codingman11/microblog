<template>
  <div>
    <div class="create-post">
      <label for="create-post" class="label1">Say something...</label>
      <div>
        <input id="userName" type="username" v-model="username" placeholder="Your name" />
        <br />
        <textarea
          id="input-1"
          placeholder="Write something..."
          v-model="text"
        />
      </div>
    </div>
    <b-button class="btn" v-on:click="addPost">Tweet</b-button>
    <div class="posts">
      <div
        class="post"
        v-bind:key="post._id"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
      >
        <b-card
          tag="article"
          style="
            max-width: 50em;
            padding-top: 0px;
            padding-bottom: 50px;
            text-align: center;
          "
          class="post-item"
        >
          <div>
            <h3 class="userName" >{{post.username}} </h3>
            <p class="tweet">{{ post.text }}</p>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const url = "http://localhost:3000/posts/";

export default {
  name: "PostComponent",
  data() {
    return {
      posts: [],
      text: "",
      id: "",
      username: ""
    };
  },

  async created() {
    try {
      const response = await axios.get(url);
      this.posts = response.data;
      this.date = this.posts.date;
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async addPost() {
      try {
      const response = await axios.post(url, {username: this.username, text: this.text });
        this.posts.push(response.data);
      } catch(err) {
        console.err(err)
      } 

   
    },
  },
};
</script>

<style scoped>
.post-item {
  background: #f4f4f4;
  padding: 10px;
  margin: auto;

  border-bottom: 1px #ccc dotted;
}

.posts {
  margin-top: 30px;
}

.tweet {
  font-size: 20px;
}

body {
  margin-bottom: 100px;
}
.input-area {
  margin-top: 10em;
}
#input-1 {
  max-width: 50em;
  text-align: center;
  height: 10em;
  width: 25em;
  margin: auto;
  resize: none;
  margin-top: 20px;
}
.label1 {
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
}
.btn {
  margin-top: 20px;
  width: 25em;
  
}

.userName {
  padding-top: 2px;
}
</style>