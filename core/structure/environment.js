function numberAfter(s, label) {		//	number starts 1 character after label
	var startIndex = s.indexOf(label);
	if (startIndex >= 0)
		return parseFloat(s.substring(startIndex + label.length + 1));
	else
		return null;
}


function systemEnvironment() {
	this.os = "Unknown";
	this.osVersion = 0;
	this.browser = "Unknown";
	this.browserVersion = 0;

	var userAgent = navigator.userAgent.replace(/_/g, '.');
	var platform = navigator.platform;
	
	if (platform.indexOf('Mac') >= 0) {
		this.os = 'Mac';
		this.osVersion = numberAfter(userAgent, 'Mac OS X');
	}
	else if (platform.indexOf('iPad') >= 0 || platform.indexOf('iPhone') >= 0
																																|| platform.indexOf('iPod') >= 0) {
		this.os = 'iOS';
		this.osVersion = numberAfter(userAgent, ' OS');
	}
	else if (userAgent.indexOf('NT 5.') >= 0 || userAgent.indexOf('NT 6.') >= 0 || userAgent.indexOf('NT 10.') >= 0) {
		this.os = 'Windows';
		this.osVersion = numberAfter(userAgent, 'NT');
	}
	else if (userAgent.indexOf('Android') >= 0) {
		this.os = 'Android';
		this.osVersion = numberAfter(userAgent, 'Android');
	}
	
	var vendor = navigator.vendor;
	var appName = navigator.appName;
	if (typeof vendor != 'undefined' && vendor.indexOf('Apple') >= 0) {
		this.browser = "Safari";
		this.browserVersion = numberAfter(userAgent, 'Version');
	}
	else if (typeof vendor != 'undefined' && vendor.indexOf('Google') >= 0) {
		this.browser = "Chrome";
		this.browserVersion = numberAfter(userAgent, 'Chrome');
	}
	else if (userAgent.indexOf('Firefox') >= 0) {
		this.browser = "Firefox";
		this.browserVersion = numberAfter(userAgent, 'Firefox');
	}
	else if (appName.indexOf('Internet Explorer') >= 0) {
		this.browser = "IE";
		this.browserVersion = numberAfter(userAgent, 'MSIE');
	}
	else if (userAgent.indexOf('Trident') >= 0 && userAgent.indexOf('rv') >= 0) {
		this.browser = "IE";
		this.browserVersion = numberAfter(userAgent, 'rv');
	}
	else if (userAgent.indexOf('Edge') >= 0) {
		this.browser = "Edge";
		this.browserVersion = numberAfter(userAgent, 'Edge/');
	}
	
	this.isLocal = window.location.protocol == 'file:';
	
	this.isTablet = (this.os == "iOS") || (this.os == "Android");
	
	this.supportsVideos = !!document.createElement('video').canPlayType;
	this.supportsJava = navigator.javaEnabled();
}

var environment = new systemEnvironment();