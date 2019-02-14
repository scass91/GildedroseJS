describe("Conjured items", function() {

  describe("sellIn", function() {
    it("sellIn should reduce", function() {
      const conjured = new Conjured(5,10);
      conjured.updateSellIn();
      expect(conjured.sellIn).toEqual(4);
    });
  })

  describe("quality", function() {

    it("quality should reduce by 2 when days to sell are above 0", function() {
      const conjured = new Conjured(5,10);
      conjured.updateQuality();
      expect(conjured.quality).toEqual(8);
    });

    it("quality should reduce by 4 when days to sell are less than 0", function() {
      const conjured = new Conjured(0,10);
      conjured.updateQuality();
      expect(conjured.quality).toEqual(6);
    });

    it("quality cannot be negative", function() {
      const conjured = new Conjured(10,0);
      conjured.updateQuality();
      expect(conjured.quality).toEqual(0);
    });
  });
});
