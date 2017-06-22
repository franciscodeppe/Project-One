/**
	An extremely primitive color picker, designed to be used with a jQuery selector, as in:

	<div id='MyColorSelector'></div>

	$('#MyColorSelector').braindeadColorSelector();

	it creates a set of "color blotches" elements and uses jQuery(this).append() to add them
	to the current element. If it is called outside of a jQuery context then it will throw
	an exception.

	Arguments:

	props = an optional array of key/val pairs:

	props.colors = array of colors (hex, rgb(), or null). The default
	contains a hex-encoded "premium, hand-picked selection" of common
	reds/yellows/blues, plus null (treated as transparent).

	props.blotchElemType: Element Type for each color blotch (default='span')

	props.blotchClass: CSS class for each element (default='ColorBlotch')

	props.clickCallback: a callback tied to each blotch, called when the blotch
	is clicked. It is passed a single color argument (hex-encoded or rgb(r,g,b)
	or null, as defined in .colors). null is conventionally used to mean
	'transparent'. The default callback does nothing.

	props.iteractionCallback: function(target,elem,color,iterationNumber) is
	called after each blotch is append()ed. It is passed the target jQuery
	object, the blotch jQuery object, current color (same encoding as in
	.colors), and the current iteration count (starts at 0 and increments 1
	per blotch added). This can be used to gain some control over the layout,
	e.g. by inserting a <br/> every 5 iterations. e.g.:
		iterationCallback: function(tgt,elem,i) { if( !((i+1)%5) ) tgt.append('<br/>') }
	The default callback is null.


	Peculiarities of the implementation:

	- each "cell" of the selector is populated with a single &nbsp; UNLESS
	the color is null, in which case a '?' is used (this is to avoid visual
	confusion with a blotch of the same background container as the target
	element. If you don't like this, you can use the iterationCallback to
	change the content using jQuery's .text() or .html() functions.


	Code home page: http://wanderinghorse.net/computing/javascript/

	License: Public Domain

	Author: stephan beal (http://wanderinghorse.net/home/stephan/)
*/
jQuery.fn.braindeadColorSelector = function( props ) {
	//var tgt = (targetElem instanceof jQuery) ? targetElem : $(targetElem);
	var tgt = jQuery(this);
	if( ! tgt ) {
		throw new Error( "BPIApp.braindeadColorSelector(,...): $(this) is "+
				"not a valid argument to jQuery(...).");
	}
	if( ! props ) { props = []; }
	var dp = jQuery.fn.braindeadColorSelector.defaultProps;
	for( var p in dp ) {
		if( undefined == props[p] ) props[p] = dp[p];
	}
	var count = props.colors.length;
	for( var i = 0; i < count; ++i ) {
		var c = props.colors[i];
		var s = document.createElement(props.blotchElemType);
		if( ! s ) {
			throw new Error('jQuery.braindeadColorSelector(): '+
			'documentCreateElement('+props.blotchElemType+') failed.');
		}
		s = jQuery(s);
		s.addClass( props.blotchClass );
		s.css( 'background-color',c);
		if( c ) {
			s.html('&nbsp;&nbsp;&nbsp;');
			if( props.clickCallback ) {
				s.click( function() { props.clickCallback($(this).css('background-color')); });
			}
		} else {
			s.text('?');
			if( props.clickCallback ) {
				s.click( function() { props.clickCallback(null); });
			}
		}
		tgt.append( s );
		if( props.iterationCallback ) props.iterationCallback( tgt, s, c, i );
	}
	return tgt;
};
jQuery.fn.braindeadColorSelector.defaultProps = {
		blotchElemType: 'span',
		blotchClass:'ColorBlotch',
		clickCallback: function(ignoredColor) {},
		iterationCallback: null,
		colors: [
			null, '#ffffff','#d0d0d0','#777777','#000000', // monochromes
			'#ffaaaa','#ff00ff', '#ff0000','#aa0000','#9000ff', // reds
			'#ff6c00', '#ffff00', '#ffbb00', '#f0e68c','#d2b229', // browns/oranges/yellows
			'#aaffaa','#00ff00','#00aa00','#6b8e23','#007700', // greens
			'#bbddff','#00ffdd', '#aaaaff','#0000ff','#0000aa' // blues
			]
};
$('#MyColorSelector').braindeadColorSelector();
$('#MyColorSelector2').braindeadColorSelector();
