(function(exports){

	function AgedBrie(sellIn, quality){
		this.sellIn = sellIn
		this.quality = quality
	}

	AgedBrie.prototype.updateSellIn = function () {
		this.sellIn -= 1
	}

	AgedBrie.prototype.updateQuality = function () {
		if (this.sellIn > OPTIONS.get("MIN_SALE_DATE") ){
			this.quality = Quality.changeQual(this.quality,1)
		} else {
			this.quality = Quality.changeQual(this.quality,2)
		}
	}

	exports.AgedBrie = AgedBrie
})(this)
