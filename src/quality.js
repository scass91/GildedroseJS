(function(exports){

	function changeQual(quality,qual_change){
		quality += qual_change
		quality = qualityMaximum(quality)
		quality = qualityMinimum(quality)
		return quality
	}

	function qualityMaximum(quality){
		if (quality > MAX_QUALITY) {
			quality = MAX_QUALITY
		}
		return quality
	}

	function qualityMinimum(quality){
		if (quality < MIN_QUALITY) {
			quality = MIN_QUALITY
		}
		return quality
	}

	exports.Quality = {
		changeQual: changeQual
	}
})(this)
