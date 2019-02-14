describe("Gilded Rose", function() {

  describe("non-special items", function() {

    describe("Quality", function() {
      it("reduces in quality by 1 when updated before sell by date", function() {
        const gildedRose = new Shop([ new Item("blah", 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(9);
      })
      it("reduces in quality by 2 when updated after sell by date", function() {
        const gildedRose = new Shop([ new Item("blah", 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(8);
      })
      it("quality is never negative", function() {
        const gildedRose = new Shop([ new Item("blah", 10, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
      })
    })

    describe("Sell by date", function() {
      it("reduces by 1 when the shop is updated", function() {
        const gildedRose = new Shop([ new Item("blah", 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(9);
      })
      it("can be negative to represent an item being past its sell by date", function() {
        const gildedRose = new Shop([ new Item("blah", 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(-1);
      })
    })

    describe("Name", function() {
      it("Never changes", function() {
        const gildedRose = new Shop([ new Item("blah", 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("blah");
      })
    })
  })

  describe("Aged Brie", function() {

    describe("Quality", function() {
      it("Increases by 1 when the shop updates within used by date", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(11);
      })
      it("Increases by 2 when the shop updates beyond used by date", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(12);
      })
      it("Can not be higher than 50", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 10, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
      })
    })

    describe("Sell by date", function() {
      it("reduces by 1 when the shop is updated", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(9);
      })
      it("can be negative to represent an item being past its sell by date", function() {
        const gildedRose = new Shop([ new Item("blah", 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(-1);
      })
    })

    describe("Name", function() {
      it("Never changes", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("Aged Brie");
      })
    })
  })
})
