$(document).ready(function() {

	document.onkeyup = keyCheck;

	function keyCheck() {
		var keyID = event.keyCode;
		console.log(keyID);
		var currScreenVal = $(".screen").val();
		switch(keyID) {
			case 49: {
				$(".screen").val(currScreenVal + "1");
				break;
			}
			case 50: {
				$(".screen").val(currScreenVal+ "2");
				break;
			}
			case 51: {
				$(".screen").val(currScreenVal + "3");
				break;
			}
			case 52: {
				$(".screen").val(currScreenVal +"4");
				break;
			}
			case 53: {
				$(".screen").val(currScreenVal + "5");
				break;
			}
			case 54: {
				$(".screen").val(currScreenVal + "6");
				break;
			}
			case 55: {
				$(".screen").val(currScreenVal + "7");
				break;
			}
			case 56: {
				$(".screen").val(currScreenVal + "8");
				break;
			}
			case 57: {
				$(".screen").val(currScreenVal + "9");
				break;
			}
			case 61: {
				$(".screen").val(currScreenVal + "+");
				break;
			}
			// case 187: {
			// 	doIt();
			// 	break;
			//}
			case 189: {
				$(".screen").val(currScreenVal + "-");
				break;
			}
			case 191: {
				$(".screen").val(currScreenVal + "/");
				break;
			}
			case 48: {
				$(".screen").val(currScreenVal + "0");
				break;
			}
			case 88: {
				$(".screen").val(currScreenVal + "*");
				break;
			}
			case 27: {
				clearScreen();
				break;
			}
			case 13: {
				doIt();
				break;
			}
			case 190: {
				$(".screen").val(currScreenVal + ".");
				break;
			}
		}
	}


})

function doIt() {
	try{
	var total = eval($(".screen").val());

}	catch(e){
		console.log(e);
		if (e instanceof SyntaxError){
			alert("Error!");
			return;
		}else if(e instanceof ReferenceError){
			alert("Error!");
			return;
		}
	}
	$(".screen").val(total);
	if (total === 1){
		$("#surprise").addClass("move");
	} else if (total === 2){
		$(".container").addClass("background-image");
	}

	else if (total > 1000000){
		window.open("http://www.google.com");
	} else if (total === 360){
		$("#calculator").addClass("spin");
	}else if(total === 07734){
			$("#calculator").addClass("flip");
		}
}
function insertVal(val) {
	var currScreenVal = $(".screen").val();
	$(".screen").val(currScreenVal + val);
}

function clearScreen() {
	$("#calculator").removeClass("flip");
	$(".screen").val("");

}