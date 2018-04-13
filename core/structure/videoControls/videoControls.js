/*
 * Acorn Media Player - jQuery plugin 1.5
 *
 * Copyright (C) 2012 Ionut Cristian Colceriu
 * Modified by Doug Stirling, 2012
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * www.ghinda.net
 * contact@ghinda.net
 *
 */

(function($) {
	$.fn.setupVideo = function(options) {
		/*
		 * Define default plugin options
		 */
		var defaults = {
			nativeSliders: false,
			volumeSlider: 'vertical',
			captionsOn: false
		};
		options = $.extend(defaults, options);
		
		/* 
		 * Function for generating a unique identifier using the current date and time
		 * Used for generating an ID for the media elmenet when none is available
		 */
		var uniqueID = function() {
			var currentDate = new Date();
			return currentDate.getTime();
		};
		
		/* 
		 * Detect support for localStorage
		 */
		function supports_local_storage() {
			try {
				return 'localStorage' in window && window.localStorage !== null;
			} catch(e){
				return false;
			}
		}
		
		/*
		 * Get the volume value from localStorage
		 * If no value is present, define as maximum
		 */
		var volume = (supports_local_storage) ? localStorage.getItem('acornvolume') : 1;
		if(!volume) {
			volume = 1;
		}
		
		/* 
		 * Main plugin function
		 * It will be called on each element in the matched set
		 */
		var acornPlayer = function() {
			// set the acorn object, will contain the needed DOM nodes and others
			var acorn = {
				$self: $(this)
			};
			
			var seeking; // The user is seeking the media
			var wasPlaying = false; // Media was playing when the seeking started
			
			/* Define all the texts used
			 * This makes it easier to maintain, make translations, etc.
			*/
			var text = {
				play: 'Play',
				playTitle: 'Play',
				pause: 'Pause',
				pauseTitle: 'Pause',
				mute: 'Mute',
				unmute: 'Unmute',
				volumeTitle: 'Volume control',
				seekTitle: 'Video seek control'
			};
			
			// main wrapper element
			var $wrapper = $('<div class="acorn-player" role="application"></div>');

			/*
			 * Define attribute tabindex on the main element to make it readchable by keyboard
			 * Useful when "aria-describedby" is present
			 *
			 * It makes more sense for screen reader users to first reach the actual <video> or <audio> elment and read of description of it,
			 * than directly reach the Media Player controls, without knowing what they control.
			 */
			acorn.$self.attr('tabindex', '0');
			acorn.$self.attr('paused', true);
			
			/*
			 * Check if the main element has an ID attribute
			 * If not present, generate one
			 */
			acorn.id = acorn.$self.attr('id');
			if(!acorn.id) {
				acorn.id = 'acorn' + uniqueID();
				acorn.$self.attr('id', acorn.id);
			}
			
			/*
			 * Complete markup
			 */
			var template = '<div class="acorn-controls">' +
								'<button class="acorn-play-button" title="' + text.playTitle + '" aria-controls="' + acorn.id + '">' + text.play + '</button>' +
								'<span class="acorn-timer">00:00</span>' +
								'<input type="range" class="acorn-seek-slider" title="' + text.seekTitle + '" value="0" min="0" max="150" step="0.1" aria-controls="' + acorn.id + '"/>' +
								'<span class="acorn-remaining">00:00</span>' +
								'<div class="acorn-volume-box">' +
									'<button class="acorn-volume-button" title="' + text.mute + '" aria-controls="' + acorn.id + '">' + text.mute + '</button>' +
									'<input type="range" class="acorn-volume-slider" title="' + text.volumeTitle + '" value="1" min="0" max="1" step="0.05" aria-controls="' + acorn.id + '"/>' +
								'</div>' +
							'</div>';

			
			/*
			 * Append the HTML markup
			 */
			acorn.$self.wrap($wrapper).after(template).after('<div class="loading-media"></div>');
		
			/*
			 * Define the newly created DOM nodes
			 */
			acorn.$container = acorn.$self.parent('.acorn-player');
			
			acorn.$controls = $('.acorn-controls', acorn.$container);
			acorn.$playBtn = $('.acorn-play-button', acorn.$container);
			acorn.$seek = $('.acorn-seek-slider', acorn.$container);
			acorn.$timer = $('.acorn-timer', acorn.$container);
			acorn.$remaining = $('.acorn-remaining', acorn.$container);
			acorn.$volume = $('.acorn-volume-slider', acorn.$container);
			acorn.$volumeBtn = $('.acorn-volume-button', acorn.$container);
			
			/*
			 * Time formatting function
			 * Takes the number of seconds as a parameter and return a readable format "minutes:seconds"
			 * Used with the number of seconds returned by "currentTime"
			 */
			var timeFormat = function(sec) {
				var m = Math.floor(sec/60)<10?"0" + Math.floor(sec/60):Math.floor(sec/60);
				var s = Math.floor(sec-(m*60))<10?"0" + Math.floor(sec-(m*60)):Math.floor(sec-(m*60));
				return m + ":" + s;
			};
			
			/*
			 * PLAY/PAUSE Behaviour			 
			 *
			 * Function for the Play button
			 * It triggers the native Play or Pause events
			 */
			var playMedia = function() {
				if(!acorn.$self.prop('paused')) {
					acorn.$self.trigger('pause');
				} else {
					acorn.$self.trigger('play');
				}
			};
			
			/* 
			 * Functions for native playback events (Play, Pause, Ended)
			 * These are attached to the native media events.
			 *
			 * Even if the user is still using some form of native playback control (such as using the Context Menu)
			 * it will not break the behviour of our player.
			 */
			var startPlayback = function() {
				acorn.$playBtn.text(text.pause).attr('title', text.pauseTitle);
				acorn.$playBtn.addClass('acorn-paused-button');
				acorn.$self.attr('paused', false);
//				acorn.$self.css('border', '1px solid rgba(0, 0, 0, 0.1)');
			};
			
			var stopPlayback = function() {
				acorn.$playBtn.text(text.play).attr('title', text.playTitle);
				acorn.$playBtn.removeClass('acorn-paused-button');
				acorn.$self.attr('paused', true);
			};
			
			/*
			 * SEEK SLIDER Behaviour
			 * 
			 * Updates the Timer and Seek Slider values
			 * Is called on each "timeupdate"
			 */
			var seekUpdate = function() {
				var currenttime = acorn.$self.prop('currentTime');
				var duration = acorn.$self.prop('duration');
				acorn.$timer.text(timeFormat(currenttime));	
				acorn.$remaining.text(timeFormat(duration - currenttime));	
				
				// If the user is not manualy seeking
				if(!seeking) {
					// Check type of sliders (Range <input> or jQuery UI)
					if(options.nativeSliders) {
						acorn.$seek.attr('value', currenttime);
					} else {
						acorn.$seek.slider('value', currenttime);
					}
				}
			};
			
			/*
			 * Time formatting function
			 * Takes the number of seconds as a paramenter
			 * 
			 * Used with "aria-valuetext" on the Seek Slider to provide a human readable time format to AT
			 * Returns "X minutes Y seconds"
			 */
			var ariaTimeFormat = function(sec) {
				var m = Math.floor(sec/60)<10?"" + Math.floor(sec/60):Math.floor(sec/60);
				var s = Math.floor(sec-(m*60))<10?"" + Math.floor(sec-(m*60)):Math.floor(sec-(m*60));
				var formatedTime;
									
				var mins = 'minutes';
				var secs = 'seconds';
				
				if(m == 1) {
					min = 'minute';
				}
				if(s == 1) {
					sec = 'second';
				}
				
				if(m === 0) {
					formatedTime = s + ' ' + secs;
				} else {						
					formatedTime = m + ' ' + mins + ' ' + s + ' ' + secs;
				}				
				
				return formatedTime;
			};
			
			/*
			 * Triggered when the user starts to seek manually
			 * Pauses the media during seek and changes the "currentTime" to the slider's value
			 */
			var startSeek = function(e, ui) {					
				if(!acorn.$self.attr('paused')) {
					wasPlaying = true;
				}
				acorn.$self.trigger('pause');
				seeking = true;
				
				var seekLocation;
				if(options.nativeSliders) {
					seekLocation = acorn.$seek.val();
				} else {
					seekLocation = ui.value;
				}
				
				acorn.$self[0].currentTime = seekLocation;
			};
			
			/*
			 * Triggered when user stoped manual seek
			 * If the media was playing when seek started, it triggeres the playback,
			 * and updates ARIA attributes
			 */
			var endSeek = function(e, ui) {
				if(wasPlaying) {
					acorn.$self.trigger('play');
					wasPlaying = false;
				}
				seeking = false;			
				var sliderUI = $(ui.handle);
				sliderUI.attr("aria-valuenow", parseInt(ui.value, 10));
				sliderUI.attr("aria-valuetext", ariaTimeFormat(ui.value));
			};
			
			/*
			 * Transforms element into ARIA Slider adding attributes and "tabindex"
			 * Used on jQuery UI sliders
			 * 
			 * Will not needed once the jQuery UI slider gets built-in ARIA 
			 */ 
			var initSliderAccess = function (elem, opts) {
				var accessDefaults = {
				 'role': 'slider',
				 'aria-valuenow': parseInt(opts.value, 10),
				 'aria-valuemin': parseInt(opts.min, 10),
				 'aria-valuemax': parseInt(opts.max, 10),
				 'aria-valuetext': opts.valuetext,
				 'tabindex': '0'
				};
				elem.attr(accessDefaults);        
			};
			
			/*
			 * Init jQuery UI slider
			 */
			var initSeek = function() {
				
				// get existing classes
				var seekClass = acorn.$seek.attr('class');
				
				// create the new markup
				var	divSeek = '<div class="' + seekClass + '" title="' + text.seekTitle + '"></div>';
				acorn.$seek.after(divSeek).remove();
				
				// get the newly created DOM node
				acorn.$seek = $('.' + seekClass, acorn.$container);
				
				// create the buffer element
				var bufferBar = '<div class="ui-slider-range acorn-buffer"></div>';
				acorn.$seek.append(bufferBar);
				
				// get the buffer element DOM node
				acorn.$buffer = $('.acorn-buffer', acorn.$container);					
				
				// set up the slider options for the jQuery UI slider
				var sliderOptions = {
					value: 0,
					step: 1,
					orientation: 'horizontal',
					range: 'min',
					min: 0,
					max: 100
				}; 
				// init the jQuery UI slider
				acorn.$seek.slider(sliderOptions);
			
			};
			 
			/*
			 * Seek slider update, after metadata is loaded
			 * Attach events, add the "duration" attribute and generate the jQuery UI Seek Slider
			 */
			var updateSeek = function() {
				// Get the duration of the media
				var duration = acorn.$self[0].duration;			
				
				// Check for the nativeSliders option
				if(options.nativeSliders) {
					acorn.$seek.attr('max', duration);
					acorn.$seek.bind('change', startSeek);
					
					acorn.$seek.bind('mousedown', startSeek);						
					acorn.$seek.bind('mouseup', endSeek);
					
				} else {
					
					// set up the slider options for the jQuery UI slider
					var sliderOptions = {
						value: 0,
						step: 1,
						orientation: 'horizontal',
						range: 'min',
						min: 0,
						max: duration,
						slide: startSeek,
						stop: endSeek
					}; 
					// init the jQuery UI slider
					acorn.$seek.slider('option', sliderOptions);
					
					// add valuetext value to the slider options for better ARIA values
					sliderOptions.valuetext = ariaTimeFormat(sliderOptions.value);
					// accessify the slider
					initSliderAccess(acorn.$seek.find('.ui-slider-handle'), sliderOptions);
					
					// show buffering progress on progress
					acorn.$self.bind('progress', showBuffer);
				}
				
				// remove the loading element
				acorn.$self.next('.loading-media').remove();
				
				var duration = acorn.$self.prop('duration');
				acorn.$remaining.text(timeFormat(duration));
			};
			
			/*
			 * Show buffering progress
			 */
			var showBuffer = function(e) {
				var max = parseInt(acorn.$self.prop('duration'), 10);
				var tr = this.buffered;
				if(tr && tr.length) {
					var buffer = parseInt(this.buffered.end(0)-this.buffered.start(0), 10);
					var bufferWidth = (buffer*100)/max;
					
					acorn.$buffer.css('width', bufferWidth + '%');
				}				
			};
			
			/*
			 * VOLUME BUTTON and SLIDER Behaviour
			 *
			 * Change volume using the Volume Slider
			 * Also update ARIA attributes and set the volume value as a localStorage item
			 */
			var changeVolume = function(e, ui) {
				// get the slider value
				volume = ui.value;
				// set the value as a localStorage item
				localStorage.setItem('acornvolume', volume);
				
				// check if the volume was muted before
				if(acorn.$self.prop('muted')) {
					acorn.$self.prop('muted', false);
					acorn.$volumeBtn.removeClass('acorn-volume-mute');
					acorn.$volumeBtn.text(text.mute).attr('title', text.mute);
				}
				
				// set the new volume on the media
				acorn.$self.prop('volume', volume);
				
				// set the ARIA attributes
				acorn.$volume.$handle.attr("aria-valuenow", Math.round(volume*100));
				acorn.$volume.$handle.attr("aria-valuetext", Math.round(volume*100) + ' percent');
			};
			
			/*
			 * Mute and Unmute volume
			 * Also add classes and change label on the Volume Button
			 */
			var muteVolume = function() {					
				if(acorn.$self.prop('muted') === true) {						
					acorn.$self.prop('muted', false);
					if(options.nativeSliders) {
						acorn.$volume.val(volume);
					} else {
						acorn.$volume.slider('value', volume);
					}
					
					acorn.$volumeBtn.removeClass('acorn-volume-mute');
					acorn.$volumeBtn.text(text.mute).attr('title', text.mute);
				} else {
					acorn.$self.prop('muted', true);
					
					if(options.nativeSliders) {
						acorn.$volume.val('0');
					} else {
						acorn.$volume.slider('value', '0');
					}
					
					acorn.$volumeBtn.addClass('acorn-volume-mute');
					acorn.$volumeBtn.text(text.unmute).attr('title', text.unmute);
				}
			};
			
			/*
			 * Init the Volume Button and Slider
			 *
			 * Attach events, create the jQuery UI Slider for the Volume Slider and add ARIA support
			 */
			var initVolume = function() {
				if(options.nativeSliders) {
					acorn.$volume.bind('change', function() {
						acorn.$self.prop('muted',false);
						volume = acorn.$volume.val();
						acorn.$self.prop('volume', volume);
					});
				} else {
					var volumeClass = acorn.$volume.attr('class');
				
					var	divVolume = '<div class="' + volumeClass + '" title="' + text.volumeTitle + '"></div>';
					acorn.$volume.after(divVolume).remove();
					
					acorn.$volume = $('.' + volumeClass, acorn.$container);
					
					var volumeSliderOptions = {
						value: volume,
						orientation: options.volumeSlider,
						range: "min",
						max: 1,
						min: 0,
						step: 0.1,
						animate: true,
						slide: changeVolume
					};
					
					acorn.$volume.slider(volumeSliderOptions);
					
					acorn.$volume.$handle = acorn.$volume.find('.ui-slider-handle');
					
					// change and add values to volumeSliderOptions for better values in the ARIA attributes
					volumeSliderOptions.max = 100;
					volumeSliderOptions.value = volumeSliderOptions.value * 100;
					volumeSliderOptions.valuetext = volumeSliderOptions.value + ' percent';
					initSliderAccess(acorn.$volume.$handle, volumeSliderOptions);
					
					// manully blur the Caption Button when clicking the handle
//					$('.ui-slider-handle', acorn.$volume).click(blurCaptionBtn);
				}
				
				acorn.$volumeBtn.click(muteVolume);
			};


var init = function() {
				// attach playback handlers				
				acorn.$playBtn.click(playMedia);
				acorn.$self.click(playMedia);
				
				acorn.$self.bind('play', startPlayback);
				acorn.$self.bind('pause', stopPlayback);
				acorn.$self.bind('ended', stopPlayback);
				
				// update the Seek Slider when timeupdate is triggered
				acorn.$self.bind('timeupdate', seekUpdate);
				
				// initialize volume controls
				initVolume();				
				
				// add the loading class
				$wrapper.addClass('');
				
				if(!options.nativeSliders) initSeek();
				
				// once the metadata has loaded
				acorn.$self.bind('loadedmetadata', function() {					
					/* I use an interval to make sure the video has the right readyState
					 * to bypass a known webkit bug that causes loadedmetadata to be triggered
					 * before the duration is available
					 */
					var t = window.setInterval(function() {
								if (acorn.$self[0].readyState > 0) {									
									updateSeek();
									
									clearInterval(t);
								}
							}, 500);
				});				
								
				// remove the native controls
				acorn.$self.removeAttr('controls');
			}();
		
		};
		
		// iterate and reformat each matched element
		return this.each(acornPlayer);
	};

})(jQuery);



$(document).ready(function() {
	if ((typeof environment === 'undefined') || !environment.isTablet)
		$("video").each(function(index) {
				$(this).setupVideo();
		 });
});