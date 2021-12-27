<template>
  <span>
    <span class="icon winning" v-if="status === 'winning'"> </span>
    <span class="icon outbid" v-if="status === 'outbid'"> </span
    ><span class="icon active" v-if="status === 'active'"> </span>
  </span>
</template>

<script>
export default {
  name: "status-icon",

  props: {
    status: String,
  },
};
</script>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  width: 1rem;
  height: 1rem;
}

.winning {
  clip-path: polygon(100% 0, 0 0, 100% 100%);
  background-color: rgba(0, 235, 62, 1);
}

.outbid {
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  background-color: rgba(233, 28, 28, 1);
}

.active {
  clip-path: polygon(100% 50%, 0 100%, 0 0);

  background-color: #484848;
}
</style>
