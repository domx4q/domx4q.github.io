<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "defaults",
  data() {
    return {};
  },
  methods: {},
  computed: {
    inProduction() {
      return import.meta.env.PROD;
    },
    inConstruction() {
      return this.inProduction ? import.meta.env.VITE_CONSTRUCTION === "true" : false;
    }
  },
  mounted() {},
  created() {},
  watch: {}
};
</script>
