<template>
  <section
    :style="{ backgroundImage: `url(${require('@/assets/properties/1.png')})` }"
    class="h-screen w-screen bg-no-repeat bg-cover bg-center relative"
  >
    <div class="absolute top-0 left-0 w-full h-1/5">
      <div class="w-full h-4/5 bg-white opacity-80"></div>
      <div class="w-full h-1/4 flex justify-between">
        <div class="w-2/12 bg-white flex justify-between items-center px-3">
          <div>
            <div class="text-xs font-semibold">Outbid</div>
            <div class="text-xs font-semibold text-red-400">12</div>
          </div>
          <div>
            <div class="text-xs font-semibold">Active</div>
            <div class="text-xs font-semibold text-gray-400">12</div>
          </div>
          <div>
            <div class="text-xs font-semibold">Winning</div>
            <div class="text-xs font-semibold text-green-400">12</div>
          </div>
        </div>

        <div class="w-8/12 flex-shrink-0 bg-white opacity-40"></div>

        <div class="w-2/12 bg-white flex justify-between items-center px-3">
          <div>
            <div class="text-xs font-semibold">Outbid</div>
            <div class="text-xs font-semibold text-red-400">&#36; 100,000</div>
          </div>
          <div>
            <div class="text-xs font-semibold">Active</div>
            <div class="text-xs font-semibold text-gray-400">&#36; 100,000</div>
          </div>
          <div>
            <div class="text-xs font-semibold">Winning</div>
            <div class="text-xs font-semibold text-green-400">
              &#36; 100,000
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
