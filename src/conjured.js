(function(exports){
	function Conjured(sellIn, quality){
		this.sellIn = sellIn
		this.quality = quality
	}

	Conjured.prototype.updateSellIn = function () {
		this.sellIn -= 1
	}

	Conjured.prototype.updateQuality = function () {
		if (this.quality < 3) {
			this.quality = MIN_QUALITY
		} else if (this.sellIn >= 1)  {
			this.quality = Quality.changeQual(this.quality,-2)
		} else {
			this.quality = Quality.changeQual(this.quality,-4)
		}
	}

	exports.Conjured = Conjured
})(this)
