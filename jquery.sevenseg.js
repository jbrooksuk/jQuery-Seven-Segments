/*
	--- Proof of Concept ---
	jQuery Seven Segment (LCD) Array
	jTutorials (www.jtutorials.co.cc)
	
	Coded by James Brooks 2009 (www.james-brooks.net)
*/

jQuery.fn.sevenSeg = function(segment) {
	var segNumbers = Array(
		Array(0, Array(1, 4, 5, 6, 7, 3)),
		Array(1, Array(4, 6)),
		Array(2, Array(1, 5, 2, 6, 5, 3)),
		Array(3, Array(1, 5, 2, 7, 3)),
		Array(4, Array(4, 2, 5, 7)),
		Array(5, Array(1, 4, 2, 7, 3)),
		Array(6, Array(1, 4, 2, 6, 7, 3)),
		Array(7, Array(1, 5, 7)),
		Array(8, Array(1, 2, 3, 4, 5, 6, 7)),
		Array(9, Array(1, 4, 5, 2, 7)),
		Array(10, Array())
	);

	var segID = 1;
	this.find(".wideSeg").each(function() {
		$(this).removeClass("segHighlt");
		$(this).addClass("norHighlt");
		$(this).attr("id", segID);
		segID += 1;
	});
	this.find(".longSeg").each(function() {
		$(this).removeClass("segHighlt");
		$(this).addClass("norHighlt");
		$(this).attr("id", segID);
		segID += 1;
	});
	
	makeArray(this, segment);

	function makeArray(segBlock, whichSeg) {
		var segBlock = $(segBlock);
		var segCount = 1;
		
		for (var i=0, len=segNumbers[whichSeg][segCount].length; i<len; ++i){
			segBlock.find(".wideSeg#" + segNumbers[whichSeg][1][i]).each(function() {
				segBlock.find(".wideSeg#" + segNumbers[whichSeg][1][i]).addClass("segHighlt");
			});
			
			segBlock.find(".longSeg#" + segNumbers[whichSeg][1][i]).each(function() {
				segBlock.find(".longSeg#" + segNumbers[whichSeg][1][i]).addClass("segHighlt");
			});
		}
	}
};