describe("Gilded Rose", function() {

  describe("non-special items", function() {

    describe("quality", function() {
      it("reduces in quality by 1 when updated before sell by date", function() {
        const gildedRose = new Shop([ new Item("blah", 10, 10) ]);
        const items = gildedRose.change();
        expect(items[0].quality).toEqual(9);
      })
      it("reduces in quality by 2 when updated after sell by date", function() {
        const gildedRose = new Shop([ new Item("blah", 0, 10) ]);
        const items = gildedRose.change();
        expect(items[0].quality).toEqual(8);
      })
      it("quality is never negative", function() {
        const gildedRose = new Shop([ new Item("blah", 10, 0) ]);
        const items = gildedRose.change();
        expect(items[0].quality).toEqual(0);
      })
    })

    describe("sellIn", function() {
      it("reduces by 1 when the shop is updated", function() {
        const gildedRose = new Shop([ new Item("blah", 10, 10) ]);
        const items = gildedRose.change();
        expect(items[0].sellIn).toEqual(9);
      })
      it("can be negative to represent an item being past its sell by date", function() {
        const gildedRose = new Shop([ new Item("blah", 0, 10) ]);
        const items = gildedRose.change();
        expect(items[0].sellIn).toEqual(-1);
      })
    })

    describe("Name", function() {
      it("Never changes", function() {
        const gildedRose = new Shop([ new Item("blah", 10, 10) ]);
        const items = gildedRose.change();
        expect(items[0].name).toEqual("blah");
      })
    })
  })

  describe("Aged Brie", function() {

    describe("quality", function() {
      it("Increases by 1 when the shop updates within used by date", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 10, 10) ]);
        const items = gildedRose.change();
        expect(items[0].quality).toEqual(11);
      })
      it("Increases by 2 when the shop updates beyond used by date", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 0, 10) ]);
        const items = gildedRose.change();
        expect(items[0].quality).toEqual(12);
      })
      it("Can not be higher than 50", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 10, 50) ]);
        const items = gildedRose.change();
        expect(items[0].quality).toEqual(50);
      })
    })

    describe("sellIn", function() {
      it("reduces by 1 when the shop is updated", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 10, 10) ]);
        const items = gildedRose.change();
        expect(items[0].sellIn).toEqual(9);
      })
      it("can be negative to represent an item being past its sell by date", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 0, 10) ]);
        const items = gildedRose.change();
        expect(items[0].sellIn).toEqual(-1);
      })
    })

    describe("Name", function() {
      it("Never changes", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 10, 10) ]);
        const items = gildedRose.change();
        expect(items[0].name).toEqual("Aged Brie");
      })
    })
  })

  describe("Sulfuras", function() {

    describe("quality", function() {
      it("Never changes", function() {
        const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 10, 80) ]);
        const items = gildedRose.change();
        expect(items[0].quality).toEqual(80);
      })
    })

    describe("sellIn", function() {
      it("Never changes", function() {
        const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 10, 80) ]);
        const items = gildedRose.change();
        expect(items[0].sellIn).toEqual(10);
      })
    })

    describe("Name", function() {
      it("Never changes", function() {
        const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 10, 80) ]);
        const items = gildedRose.change();
        expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
      })
    })
  })

  describe("Backstage Passes", function() {

    describe("quality", function() {
      it("increases by 1 when there are more than 10 days to sell by", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 10) ]);
        const items = gildedRose.change();
        expect(items[0].quality).toEqual(11);
      })
      it("increases by 2 when there are between 10 and 5 days to sell", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 9, 10) ]);
        const items = gildedRose.change();
        expect(items[0].quality).toEqual(12);
      })
      it("increases by 3 when there are between 5 and 0 days to sell", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 4, 10) ]);
        const items = gildedRose.change();
        expect(items[0].quality).toEqual(13);
      })
      it("loses all quality if sold after the concert", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10) ]);
        const items = gildedRose.change();
        expect(items[0].quality).toEqual(0);
      })
      it("has a maximum quality of 50", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50) ]);
        const items = gildedRose.change();
        expect(items[0].quality).toEqual(50);
      })
    })

    describe("sellIn", function() {
      it("reduces by 1 when the shop is updated", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10) ]);
        const items = gildedRose.change();
        expect(items[0].sellIn).toEqual(9);
      })
      it("can be negative to represent an item being past its sell by date", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10) ]);
        const items = gildedRose.change();
        expect(items[0].sellIn).toEqual(-1);
      })
    })

    describe("Name", function() {
      it("Never changes", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 80) ]);
        const items = gildedRose.change();
        expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      })
    })
  })
})
