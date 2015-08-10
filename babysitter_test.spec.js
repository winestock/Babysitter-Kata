var sitter = require('./babysitter');

describe("sitter(start, stop)", function() {
	
	it("Legal Start", function() {
		var expectedStart = "5";
		expect(sitter(start)).toBeGreaterThan("4");
	});
});