(function(exports){
	function NonSpecial(sellIn, quality){
		this.sellIn = sellIn
		this.quality = quality
	}

	NonSpecial.prototype.updateSellIn = function () {
		this.sellIn -= 1
	}

	NonSpecial.prototype.updateQuality = function () {
		if (this.sellIn > MIN_SALE_DATE)  {
			this.quality = Quality.changeQual(this.quality,-1)
		} else {
			this.quality = Quality.changeQual(this.quality,-2)
		}
	}

	exports.NonSpecial = NonSpecial
})(this)
