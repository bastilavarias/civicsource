<template>
  <div class="w-full h-1/3 4xl:h-1/4 flex justify-between font-medium">
    <div
      class="w-2/12 flex-grow bg-white flex justify-between items-center px-3 overflow-auto"
    >
      <div class="mr-3">
        <div>Outbid</div>
        <div class="text-red-400">{{ property.bid.outbid_count || 0 }}</div>
      </div>
      <div class="mr-3">
        <div>Active</div>
        <div class="text-secondary-gray">
          {{ property.bid.active_count || 0 }}
        </div>
      </div>
      <div>
        <div>Winning</div>
        <div class="text-green-400">{{ property.bid.winning_count || 0 }}</div>
      </div>
    </div>

    <div
      class="w-8/12 flex-shrink-0 bg-white-transparent flex justify-around items-center overflow-auto"
    >
      <div>
        <div>
          <status-icon status="winning"></status-icon>
          14 Flood St.
        </div>
        <div>
          <span class="text-green-400 mr-5"><span>+</span>&#36;100</span>
          <span class="font-light text-primary-gray">&#36;5,000</span>
        </div>
      </div>

      <div>
        <div>
          <status-icon status="outbid"></status-icon>
          14 Flood St.
        </div>
        <div>
          <span class="text-primary-red mr-5"><span>-</span>&#36;100</span>
          <span class="font-light text-primary-gray">&#36;5,000</span>
        </div>
      </div>

      <div>
        <div><status-icon status="active"></status-icon> 14 Flood St.</div>
        <div>
          <span class="mr-5">&#36;100</span>
          <span class="font-light text-primary-gray">&#36;5,000</span>
        </div>
      </div>

      <div>
        <div><status-icon status="winning"></status-icon> 14 Flood St.</div>
        <div>
          <span class="text-green-400 mr-5"><span>+</span>&#36;100</span>
          <span class="font-light text-primary-gray">&#36;5,000</span>
        </div>
      </div>
    </div>

    <div
      class="w-2/12 flex-grow bg-white flex justify-between items-center px-3 overflow-auto"
    >
      <div class="mr-3">
        <div>Outbid</div>
        <div class="text-red-400">
          {{ formatCurrency(property.bid.outbid_total_value || 0) }}
        </div>
      </div>
      <div class="mr-3">
        <div>Active</div>
        <div class="text-secondary-gray">
          {{ formatCurrency(property.bid.active_total_value || 0) }}
        </div>
      </div>
      <div class="mr-3">
        <div>Winning</div>
        <div class="text-green-400">
          {{ formatCurrency(property.bid.winning_total_value || 0) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StatusIcon from "@/components/StatusIcon";
import currencyMixin from "@/mixins/Currency";
export default {
  components: { StatusIcon },

  mixins: [currencyMixin],

  props: {
    property: [Object, null],
    bids: Array,
  },
};
</script>
