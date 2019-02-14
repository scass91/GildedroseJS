describe("NonSpecial", function() {

  describe("sellIn", function() {
    it("sellIn should reduce", function() {
      const blah = new NonSpecial(5,10);
      blah.updateSellIn();
      expect(blah.sellIn).toEqual(4);
    });
  })

  describe("quality", function() {

    it("quality should reduce by 1 when days to sell are above 0", function() {
      const blah = new NonSpecial(5,10);
      blah.updateQuality();
      expect(blah.quality).toEqual(9);
    });

    it("quality should reduce by 2 when days to sell are less than 0", function() {
      const blah = new NonSpecial(0,10);
      blah.updateQuality();
      expect(blah.quality).toEqual(8);
    });

    it("quality cannot be negative", function() {
      const blah = new NonSpecial(10,0);
      blah.updateQuality();
      expect(blah.quality).toEqual(0);
    });
  });
});
