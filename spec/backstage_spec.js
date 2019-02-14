describe("Backstage tickets", function() {

	describe("sellIn", function() {
		it("sellIn should reduce", function() {
			const tickets = new Backstage(5,10)
			tickets.updateSellIn()
			expect(tickets.sellIn).toEqual(4)
		})
	})

	describe("quality", function() {

		it("quality should increase by 1 when days to sell are above 10", function() {
			const tickets = new Backstage(11,10)
			tickets.updateQuality()
			expect(tickets.quality).toEqual(11)
		})

		it("quality should increase by 2 when days to sell are between 10 & 5", function() {
			const tickets = new Backstage(7,10)
			tickets.updateQuality()
			expect(tickets.quality).toEqual(12)
		})

		it("quality should increase by 3 when days to sell are between 5 & 0", function() {
			const tickets = new Backstage(2,10)
			tickets.updateQuality()
			expect(tickets.quality).toEqual(13)
		})

		it("quality should be 0 when sell by date has passed", function() {
			const tickets = new Backstage(0,10)
			tickets.updateQuality()
			expect(tickets.quality).toEqual(0)
		})

		it("quality cannot be above 50", function() {
			const tickets = new Backstage(10,50)
			tickets.updateQuality()
			expect(tickets.quality).toEqual(50)
		})
	})
})
