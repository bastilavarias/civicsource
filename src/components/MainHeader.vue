<template>
  <div
    class="w-full h-2/3 4xl:h-4/5 bg-white opacity-80 flex justify-around items-center overflow-auto"
  >
    <div>
      <file-svg></file-svg>
    </div>
    <div class="text-center space-y-1">
      <div class="font-light text-primary-gray">Own</div>
      <div class="text-4xl font-light">
        {{ property.street || "Default Street" }}
      </div>
      <div class="font-light text-primary-gray">
        {{ property.city || "Default City" }},
        {{ property.address || "Default Address" }}
      </div>
      <div class="flex justify-center">
        <template v-for="n in 3">
          <mini-house-svg :key="n"></mini-house-svg>
        </template>
      </div>
    </div>
    <div><map-marker-svg></map-marker-svg></div>
    <div class="text-center space-y-1">
      <div class="font-light text-primary-gray">To</div>
      <div class="text-4xl font-light">Start</div>
      <div class="font-light text-primary-gray">Place Deposit</div>
    </div>
    <div>
      <bookmark-svg></bookmark-svg>
    </div>
    <div class="text-center space-y-1">
      <div class="font-light text-primary-gray">
        Market {{ formatCurrency(property.market_value || 0) }}
      </div>
      <div class="text-4xl font-light">
        {{ formatCurrency(property.reservation_value || 0) }}
      </div>
      <div class="font-light text-primary-gray">Reserve Price</div>
    </div>
    <book-svg></book-svg>
  </div>
</template>

<script>
import currencyMixin from "@/mixins/Currency";
import FileSvg from "@/components/svg/File";
import MiniHouseSvg from "@/components/svg/MiniHouse";
import MapMarkerSvg from "@/components/svg/MapMarker";
import BookmarkSvg from "@/components/svg/Bookmark";
import BookSvg from "@/components/svg/Book";

export default {
  name: "main-header",
  components: {
    BookSvg,
    BookmarkSvg,
    MapMarkerSvg,
    MiniHouseSvg,
    FileSvg,
  },
  mixins: [currencyMixin],

  props: {
    property: [Object, null],
  },
};
</script>
