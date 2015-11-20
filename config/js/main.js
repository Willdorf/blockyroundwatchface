(function() {
	loadOptions();
	submitHandler();
})();

function submitHandler() {
	var $submitButton = $('#submitButton');
	$submitButton.on('click', function() {
		console.log('Submit');

		var return_to = getQueryParam('return_to', 'pebblejs://close#');
		document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
	});
}

var $submitButton = $('#submitButton');

$submitButton.on('click', function() {
	console.log('Submit');

	var return_to = getQueryParam('return_to', 'pebblejs://close#');
	document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
});

var degreeOption = 0;
function tabClickHandler(value) {
	console.log(value);
	if (value == "Celsius") {
		degreeOption = 0;
	} else if (value == "Fahrenheit") {
		degreeOption = 1;
	}
}

function getAndStoreConfigData() {
	var $backgroundColorPicker = $('#backgroundColorPicker');
	var $blockOneColorPicker = $('#blockOneColorPicker');
	var $blockTwoColorPicker = $('#blockTwoColorPicker');
	var $blockThreeColorPicker = $('#blockThreeColorPicker');
	var $blockFourColorPicker = $('#blockFourColorPicker');
	var $blockFiveColorPicker = $('#blockFiveColorPicker');
	var $blockSixColorPicker = $('#blockSixColorPicker');
	var $blockSevenColorPicker = $('#blockSevenColorPicker');
	var $blockEightColorPicker = $('#blockEightColorPicker');
	var $blockNineColorPicker = $('#blockNineColorPicker');
	var $blockTenColorPicker = $('#blockTenColorPicker');
	var $blockElevenColorPicker = $('#blockElevenColorPicker');
	var $blockTwelveColorPicker = $('#blockTwelveColorPicker');

	var options = {
		backgroundColor : $backgroundColorPicker.val(),
		blockOneColor : $blockOneColorPicker.val(),
		blockTwoColor : $blockTwoColorPicker.val(),
		blockThreeColor : $blockThreeColorPicker.val(),
		blockFourColor : $blockFourColorPicker.val(),
		blockFiveColor : $blockFiveColorPicker.val(),
		blockSixColor : $blockSixColorPicker.val(),
		blockSevenColor : $blockSevenColorPicker.val(),
		blockEightColor : $blockEightColorPicker.val(),
		blockNineColor : $blockNineColorPicker.val(),
		blockTenColor : $blockTenColorPicker.val(),
		blockElevenColor : $blockElevenColorPicker.val(),
		blockTwelveColor : $blockTwelveColorPicker.val(),
		degreeOption : degreeOption
	};

	localStorage.willdorfblockyroundbackgroundColor = options.backgroundColor;
	localStorage.willdorfblockyroundblockOneColor = options.blockOneColor;
	localStorage.willdorfblockyroundblockTwoColor = options.blockTwoColor;
	localStorage.willdorfblockyroundblockThreeColor = options.blockThreeColor;
	localStorage.willdorfblockyroundblockFourColor = options.blockFourColor;
	localStorage.willdorfblockyroundblockFiveColor = options.blockFiveColor;
	localStorage.willdorfblockyroundblockSixColor = options.blockSixColor;
	localStorage.willdorfblockyroundblockSevenColor = options.blockSevenColor;
	localStorage.willdorfblockyroundblockEightColor = options.blockEightColor;
	localStorage.willdorfblockyroundblockNineColor = options.blockNineColor;
	localStorage.willdorfblockyroundblockTenColor = options.blockTenColor;
	localStorage.willdorfblockyroundblockElevenColor = options.blockElevenColor;
	localStorage.willdorfblockyroundblockTwelveColor = options.blockTwelveColor;
	localStorage.willdorfblockyrounddegreeOption = options.degreeOption;

	console.log('Got Options: ' + JSON.stringify(options));
	return options;
}

function loadOptions() {
	var $backgroundColorPicker = $('#backgroundColorPicker');
	var $blockOneColorPicker = $('#blockOneColorPicker');
	var $blockTwoColorPicker = $('#blockTwoColorPicker');
	var $blockThreeColorPicker = $('#blockThreeColorPicker');
	var $blockFourColorPicker = $('#blockFourColorPicker');
	var $blockFiveColorPicker = $('#blockFiveColorPicker');
	var $blockSixColorPicker = $('#blockSixColorPicker');
	var $blockSevenColorPicker = $('#blockSevenColorPicker');
	var $blockEightColorPicker = $('#blockEightColorPicker');
	var $blockNineColorPicker = $('#blockNineColorPicker');
	var $blockTenColorPicker = $('#blockTenColorPicker');
	var $blockElevenColorPicker = $('#blockElevenColorPicker');
	var $blockTwelveColorPicker = $('#blockTwelveColorPicker');

	if (localStorage.willdorfblockyroundbackgroundColor) {
		$backgroundColorPicker[0].value = localStorage.willdorfblockyroundbackgroundColor;
		$blockOneColorPicker[0].value = localStorage.willdorfblockyroundblockOneColor;
		$blockTwoColorPicker[0].value = localStorage.willdorfblockyroundblockTwoColor;
		$blockThreeColorPicker[0].value = localStorage.willdorfblockyroundblockThreeColor;
		$blockFourColorPicker[0].value = localStorage.willdorfblockyroundblockFourColor;
		$blockFiveColorPicker[0].value = localStorage.willdorfblockyroundblockFiveColor;
		$blockSixColorPicker[0].value = localStorage.willdorfblockyroundblockSixColor;
		$blockSevenColorPicker[0].value = localStorage.willdorfblockyroundblockSevenColor;
		$blockEightColorPicker[0].value = localStorage.willdorfblockyroundblockEightColor;
		$blockNineColorPicker[0].value = localStorage.willdorfblockyroundblockNineColor;
		$blockTenColorPicker[0].value = localStorage.willdorfblockyroundblockTenColor;
		$blockElevenColorPicker[0].value = localStorage.willdorfblockyroundblockElevenColor;
		$blockTwelveColorPicker[0].value = localStorage.willdorfblockyroundblockTwelveColor;

		//set the corresponding tab to active
		degreeOption = localStorage.willdorfblockyrounddegreeOption;
		if (degreeOption == 0) {
			$('#Celsius').attr('class', 'tab-button active');
		} else {
			$('#Fahrenheit').attr('class', 'tab-button active');
		}
	} else {
		$('#Celsius').attr('class', 'tab-button active');
	}
}

function getQueryParam(variable, defaultValue) {
	var query = location.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		if (pair[0] === variable) {
			return decodeURIComponent(pair[1]);
		}
	}
	return defaultValue || false;
}
