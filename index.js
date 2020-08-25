module.exports = (Model) => {
  return class extends Model {
    async $reload() {
      const reFetched = await this.$query();
      this.$set(reFetched);
    }
  };
};
