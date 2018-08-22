<template lang="pug">
  .docs
    h3 Usage
    pre
      code(v-text="sourcecode")
    demo(emoji="🤔")
</template>

<script>
import demo from './demo.vue'

export default {
  name: 'App',
  components: {demo},

  data() {
    return {
      sourcecode: `import VScroll from '../src/'
 Vue.use(VScroll)
`
    }
  }
}
</script>

<style lang="scss">
.docs {
  width: 80%;
  margin: auto;
  padding: 10px;
  max-width: 500px;
}

code {
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  background: #3d3d3d;
  color: #f3f3fe;
  line-height: 260%;
}

img {
  width: 100%;
  max-width: 250px;
}
</style>
