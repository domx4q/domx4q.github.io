<template>
  <Construct v-if="inConstruction" />
  <template v-else>
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </header>

    <RouterView id="router-view" />
  </template>
</template>

<script>
import Construct from "@/views/Construct.vue";
import defaults from "@/mixins/defaults.vue";

export default {
  name: "App",
  components: { Construct },
  mixins: [defaults],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
@import "s@/defaults";

header {
  line-height: 1.5;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;

  a {
    display: inline-block;
    padding: 0 1rem;
    border: none {
      left: $border-style;
    }

    &.router-link-exact-active {
      color: var(--color-text);

      &:hover {
        background-color: transparent;
      }
    }

    &:first-of-type {
      border: 0;
    }
  }
}

#router-view {
  height: $maxContentHeight;
}
</style>
