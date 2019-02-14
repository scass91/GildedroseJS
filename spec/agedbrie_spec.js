describe("Aged Brie", function() {

  describe("sellIn", function() {
    it("sellIn should reduce", function() {
      const brie = new AgedBrie(5,10);
      brie.updateSellIn();
      expect(brie.sellIn).toEqual(4);
    });
  })

  describe("quality", function() {

    it("quality should increase by 1 when days to sell are above 0", function() {
      const brie = new AgedBrie(5,10);
      brie.updateQuality();
      expect(brie.quality).toEqual(11);
    });

    it("quality should increase by 2 when days to sell are less than 0", function() {
      const brie = new AgedBrie(0,10);
      brie.updateQuality();
      expect(brie.quality).toEqual(12);
    });

    it("quality cannot be above 50", function() {
      const brie = new AgedBrie(10,50);
      brie.updateQuality();
      expect(brie.quality).toEqual(50);
    });
  });
});
