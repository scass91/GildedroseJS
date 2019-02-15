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
      if (!(this.items[i].name in option)) {
        var item = new NonSpecial(this.items[i].sellIn, this.items[i].quality)
      } else {
        var item = new option[this.items[i].name](this.items[i].sellIn, this.items[i].quality)
      }

			item.updateQuality()
			item.updateSellIn()
			this.items[i].sellIn = item.sellIn
			this.items[i].quality = item.quality

			return this.items
		}
  }
}
