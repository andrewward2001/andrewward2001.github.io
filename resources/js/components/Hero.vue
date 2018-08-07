<template>
  <div class="hero">
    <div class="ml-auto col-sm-12 col-md-9 col-lg-10">
      <h2 class="display-1">{{ headWord }}.</h2>
      <h4 class="display-4">it's all about {{ itsAllAbout }}.</h4>
    </div>
    <a href="#about">
      <div class="svg-container d-flex justify-content-center">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="64px" height="64px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
          <path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z" fill="white" />
          <circle stroke="white" stroke-width="0.5" fill="none" cx="12" cy="12" r="11.60405" id="svg_2"/>
        </svg>
      </div>
    </a>
  </div>
</template>
<script>
let words = [
  'words',
  'color',
  'vibrancy'
]
let next = [
  'impressions',
  'standing out'
]
export default {
  data() {
    return {
      headWord: words[Math.floor(Math.random() * words.length)],
      itsAllAbout: next[Math.floor(Math.random() * next.length)]
    }
  }
}
</script>
<style>
.hero {
  height: 100vh;
  width: 100%;
}

.hero > div {
  color: white;
  padding-top: calc(50vh - 100px);
}

.hero svg {
  position: fixed;
  bottom: 1rem;
}
</style>