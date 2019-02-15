(function(exports){
	function AgedBrie(sellIn, quality){
		this.sellIn = sellIn
		this.quality = quality
	}

	const MIN_SALE_DATE = 0
	const MAX_QUALITY = 50
	const MIN_QUALITY = 0

	AgedBrie.prototype.updateSellIn = function () {
		this.sellIn -= 1
	}

	AgedBrie.prototype.updateQuality = function () {
		if (this.sellIn > MIN_SALE_DATE ){
			this.quality = Quality.changeQual(this.quality,1)
		} else {
			this.quality = Quality.changeQual(this.quality,2)
		}
	}

	exports.AgedBrie = AgedBrie
})(this)
