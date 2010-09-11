/*
	jTutorials Timer Plugin
	(www.jtutorials.co.cc)
	
	$.timer(interval, callback [, options]);
	timer.stop();
	timer.reset();
	
	Plugin written by James Brooks (www.james-brooks.net) 2009
	of jTutorials.co.cc
*/

jQuery.timer = function(interval, callback, options) {
	var options = jQuery.extend({ reset: 500 }, options); // Create options for the default reset value
	var interval = interval || options.reset;
	
	if(!callback) { return false; }
	
	timer = function(interval, callback) {
		// Only used by internal code to call the callback
		this.internalCallback = function() { callback(self); };
	
		// Clears any timers
		this.stop = function() { clearInterval(self.id); };
		// Resets timers to a new time
		this.reset = function(time) {
			if(self.id) { clearInterval(self.id); }
			var time = time || options.reset;
			
			this.id = setInterval(this.internalCallback, time);
		};
		
		// Set the interval time again
		this.interval = interval;
		this.id = setInterval(this.internalCallback, this.interval);
		
		var self = this;
	};
	
	// Create a new timer object
	return new timer(interval, callback);
};