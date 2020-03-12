<template>
  <div>
    <form>
      <input type="email" id="email" />
      <input type="password" id="password" />
      <button type="submit" id="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loggedIn: true
    };
  },
  methods: {
    logear: function() {
      axios.post().then(res => {
        
      })
      this.loggedIn = true;
    }
  }
};
</script>