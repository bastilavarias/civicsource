<template>
  <section
    :style="{
      backgroundImage: `url('${property.picture_url}')`,
    }"
    class="h-screen w-screen bg-no-repeat bg-cover bg-center relative relative overflow-hidden"
    v-if="property && bids.length > 0"
  >
    <div class="absolute top-0 left-0 w-full h-1/4 4xl:h-1/6">
      <main-header :property="property"></main-header>
      <sub-header :property="property" :bids="bids"></sub-header>
    </div>

    <div class="empty-lot">
      <for-sale-sign></for-sale-sign>
    </div>

    <div class="navigator-left">
      <div class="navigator">
        <div></div>
      </div>
    </div>
    <div class="navigator-right">
      <div class="navigator">
        <div></div>
      </div>
    </div>
    <window-loading v-if="actionStart"></window-loading>
  </section>
</template>
<script>
import ForSaleSign from "@/components/ForSaleSign";
import WindowLoading from "@/components/WindowLoading";
import axios from "axios";
import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";

export default {
  components: { SubHeader, MainHeader, WindowLoading, ForSaleSign },

  data() {
    return {
      actionStart: false,

      property: null,
      bids: [],
    };
  },

  computed: {
    propertyID() {
      return parseInt(this.$route.query.propertyID) || null;
    },

    backendURL() {
      return process.env.VUE_APP_URL;
    },
  },

  watch: {
    async propertyID(value) {
      if (value && value <= 4) {
        this.actionStart = true;
        await this.getProperty();
        await this.getBids();
        this.actionStart = false;
      }
    },
  },

  methods: {
    async getProperty() {
      try {
        const response = await axios.get(
          `${this.backendURL}/api/property/${this.propertyID}`
        );
        const data = response.data;
        this.property = Object.assign({}, data.data);
      } catch (error) {
        console.error(error);
      }
    },

    async getBids() {
      try {
        const response = await axios.get(
          `${this.backendURL}/api/bid?page=1&per_page=4`
        );
        const data = response.data;
        this.bids = data.data;
      } catch (error) {
        console.error(error);
      }
    },
  },

  async created() {
    if (!this.propertyID || (this.propertyID && this.propertyID > 4))
      return await this.$router.push({
        name: "details",
        query: { propertyID: 1 },
      });

    this.actionStart = true;
    await this.getProperty();
    await this.getBids();
    this.actionStart = false;
  },
};
</script>

<style lang="scss" scoped>
.navigator {
  height: 8rem;
  width: 8rem;
  background-color: white;
  border-radius: 50%;
  position: relative;
  cursor: pointer;

  div {
    height: 9rem;
    width: 9rem;
    background-color: white;
    opacity: 0.5;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  :active {
    height: 10rem;
    width: 10rem;

    div {
      height: 11rem;
      width: 11rem;
    }
  }
}

.navigator-left {
  position: fixed;
  top: 50%;
  left: -9%;

  @media (min-width: 1280px) {
    left: -7%;
  }

  @media (min-width: 1536px) {
    left: -5.5%;
  }

  @media (min-width: 1920px) {
    left: -4%;
  }

  @media (min-width: 2560px) {
    left: -3.5%;
  }
}

.navigator-right {
  position: fixed;
  top: 50%;
  right: -9%;

  @media (min-width: 1280px) {
    right: -7%;
  }

  @media (min-width: 1536px) {
    right: -5.5%;
  }

  @media (min-width: 1920px) {
    right: -4%;
  }

  @media (min-width: 2560px) {
    right: -3.5%;
  }
}

.empty-lot {
  position: absolute;
  left: 50%;
  top: 65%;

  transform: translate(-50%, -65%);
}
</style>
