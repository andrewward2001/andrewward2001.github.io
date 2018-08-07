<template>
  <div class="card card-body">
    <p v-if="overline" class="overline">{{ overline }}</p>
    <h5 v-if="title" class="card-title">{{ title }}</h5>
    <h6 v-if="subtitle" class="card-subtitle mb-2 text-muted">{{ subtitle }}</h6>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ['title', 'subtitle', 'overline']
}
</script>
<style>
.card {
  border: none;
  -webkit-box-shadow: 0px 1px 35px 0px rgba(240,240,240,1);
  box-shadow: 0px 1px 35px 0px rgba(240,240,240,1);
}

.row .card {
  margin-bottom: 2rem;
}

.overline {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: .75rem;
  font-weight: 500;
  color: #868e96;
  margin-bottom: .5rem;
}

.card-title {
  font-family: 'Poppins', 'sans-serif';
  font-weight: 600;
}
</style>
