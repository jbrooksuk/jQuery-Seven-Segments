/*
	--- Proof of Concept ---
	jQuery Seven Segment (LCD) Array
	jTutorials (www.jtutorials.co.cc)
	
	Written by James Brooks 2009 (me.itslimetime.com)
	Updated 2011
*/

jQuery.fn.sevenSeg = function(segment) {
	var segNumbers = [
		[0, [1, 4, 5, 6, 7, 3]],		// 0
		[1, [4, 6]],					// 1
		[2, [1, 5, 2, 6, 5, 3]],		// 2
		[3, [1, 5, 2, 7, 3]],			// 3
		[4, [4, 2, 5, 7]],				// 4
		[5, [1, 4, 2, 7, 3]],			// 5
		[6, [1, 4, 2, 6, 7, 3]],		// 6
		[7, [1, 5, 7]],					// 7
		[8, [1, 2, 3, 4, 5, 6, 7]],		// 8
		[9, [1, 4, 5, 2, 7]]			// 9
	];

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
	
	makeArray(this, parseInt(segment, 10));

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