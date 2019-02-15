class Item {
	constructor(name, sellIn, quality){
		this.name = name
		this.sellIn = sellIn
		this.quality = quality
	}
}

class Shop {
	constructor(items=[]){
		this.items = items
	}

	change() {
		for (var i = 0; i < this.items.length; i++) {
			if (this.items[i].name == "Sulfuras, Hand of Ragnaros") {
				var item = new Sulfuras(this.items[i].sellIn, this.items[i].quality)
			} else if (this.items[i].name == "Aged Brie") {
				var item = new AgedBrie(this.items[i].sellIn, this.items[i].quality)
			} else if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
				var item = new Backstage(this.items[i].sellIn, this.items[i].quality)
			} else if (this.items[i].name == "Conjured") {
				var item = new Conjured(this.items[i].sellIn, this.items[i].quality)
			} else {
				var item = new NonSpecial(this.items[i].sellIn, this.items[i].quality)
			}
			item.updateQuality()
			item.updateSellIn()
			this.items[i].sellIn = item.sellIn
			this.items[i].quality = item.quality

			return this.items
		}
	}
}
