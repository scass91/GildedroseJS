describe("Gilded Rose", function() {

  describe("non-special function", function() {

    describe("Quality", function() {
      it("reduces in quality by 1 when updated before sell by date", function() {
        const gildedRose = new Shop([ new Item("blah", 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(9);
      })
    })
  })
})
