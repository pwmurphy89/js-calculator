$(document).ready(function() {

	document.onkeyup = keyCheck;

	function keyCheck() {
		var keyID = event.keyCode;
		console.log(keyID);
		switch(keyID) {
			case 49: {
				$(".screen").val("1");
				break;
			}
			case 50: {
				$(".screen").val("2");
				break;
			}
			case 51: {
				$(".screen").val("3");
				break;
			}
			case 52: {
				$(".screen").val("4");
				break;
			}
			case 53: {
				$(".screen").val("5");
				break;
			}
			case 54: {
				$(".screen").val("6");
				break;
			}
			case 55: {
				$(".screen").val("7");
				break;
			}
			case 56: {
				$(".screen").val("8");
				break;
			}
			case 57: {
				$(".screen").val("9");
				break;
			}
			case 61: {
				$(".screen").val("+");
				break;
			}
			case 61: {
				$(".screen").val("=");
				break;
			}
			case 45: {
				$(".screen").val("-");
				break;
			}
			case 47: {
				$(".screen").val("/");
				break;
			}
			case 48: {
				$(".screen").val("0");
				break;
			}
			case 56: {
				$(".screen").val("*");
				break;
			}
			case 61: {
				$(".screen").val("=");
				break;
			}
		}
	}


})