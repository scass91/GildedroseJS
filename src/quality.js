(function(exports){

	function changeQual(quality,qual_change){
		quality += qual_change
		quality = qualityMaximum(quality)
		quality = qualityMinimum(quality)
		return quality
	}

	function qualityMaximum(quality){
		if (quality > 50) {
			quality = 50
		}
		return quality
	}

	function qualityMinimum(quality){
		if (quality < 0) {
			quality = 0
		}
		return quality
	}

	exports.Quality = {
		changeQual: changeQual
	}
})(this)
