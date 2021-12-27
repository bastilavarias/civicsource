<template>
  <section
    :style="{ backgroundImage: `url(${require('@/assets/properties/1.png')})` }"
    class="h-screen w-screen bg-no-repeat bg-cover bg-center relative"
  >
    <div class="absolute top-0 left-0 w-full h-1/5">
      <div class="w-full h-4/5 bg-white opacity-80"></div>
      <div class="w-full h-1/4 flex justify-between font-medium">
        <div
          class="w-2/12 flex-grow bg-white flex justify-between items-center px-3"
        >
          <div>
            <div>Outbid</div>
            <div class="text-red-400">12</div>
          </div>
          <div>
            <div>Active</div>
            <div class="text-secondary-gray">12</div>
          </div>
          <div>
            <div>Winning</div>
            <div class="text-green-400">12</div>
          </div>
        </div>

        <div
          class="w-8/12 flex-shrink-0 bg-white-transparent flex justify-around items-center"
        >
          <div>
            <div>
              <status-icon status="winning"></status-icon>
              14 Flood St.
            </div>
            <div>
              <span class="text-green-400 mr-5"><span>+</span>&#36; 100</span>
              <span class="font-light text-primary-gray">&#36; 5,000</span>
            </div>
          </div>

          <div>
            <div>
              <status-icon status="outbid"></status-icon>
              14 Flood St.
            </div>
            <div>
              <span class="text-primary-red mr-5"><span>-</span>&#36; 100</span>
              <span class="font-light text-primary-gray">&#36; 5,000</span>
            </div>
          </div>

          <div>
            <div><status-icon status="active"></status-icon> 14 Flood St.</div>
            <div>
              <span class="mr-5">&#36; 100</span>
              <span class="font-light text-primary-gray">&#36; 5,000</span>
            </div>
          </div>

          <div>
            <div><status-icon status="winning"></status-icon> 14 Flood St.</div>
            <div>
              <span class="text-green-400 mr-5"><span>+</span>&#36; 100</span>
              <span class="font-light text-primary-gray">&#36; 5,000</span>
            </div>
          </div>
        </div>

        <div
          class="w-2/12 flex-grow bg-white flex justify-between items-center px-3"
        >
          <div>
            <div>Outbid</div>
            <div class="text-red-400">&#36; 100,000</div>
          </div>
          <div>
            <div>Active</div>
            <div class="text-secondary-gray">&#36; 100,000</div>
          </div>
          <div>
            <div>Winning</div>
            <div class="text-green-400">&#36; 100,000</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import StatusIcon from "@/components/StatusIcon";
export default {
  components: { StatusIcon },
};
</script>
