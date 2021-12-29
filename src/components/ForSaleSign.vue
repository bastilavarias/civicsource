<template>
  <div class="stand">
    <div class="stick stand__vertical"></div>
    <div class="stick stand__horizontal"></div>

    <div class="title flex justify-center items-center text-xl">
      Public Auction
    </div>

    <div class="description flex flex-col justify-around">
      <div class="text-center text-xl">Market Value $40,000</div>
      <div class="text-center font-light" :style="{ color: '#171518' }">
        <div class="text-xl">14 Flood St.</div>
        <div>New Orleans, LA 70122</div>
      </div>
      <div class="text-center font-light">Reserve Bid $5,000</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.stand {
  position: relative;
  width: 382px;
  height: 382px;

  .stick {
    position: absolute;
    background: #0629c9;
  }

  &__vertical {
    left: 10%;
    width: 3%;
    height: 100%;
  }

  &__horizontal {
    top: 10%;
    width: 100%;
    height: 3%;
  }

  .title {
    position: absolute;
    width: 87%;
    height: 2.5rem;
    top: 0;
    left: 13%;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .description {
    position: absolute;
    width: 85%;
    height: 12rem;
    top: 16%;
    left: 16%;
    background-color: rgba(255, 255, 255, 0.5);
    border: 5px solid #0629c9;
    border-radius: 10%;
  }
}
</style>
