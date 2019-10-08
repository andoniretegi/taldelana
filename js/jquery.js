window.onload = whenLoaded;

function whenLoaded(){
	
	var i;
	for (i=1;i<7;i++){ebentuakBotoiei(i);}
	
	$("#showBotoia").click( function() { denakErakutzi();})
	
	var i;
	for (i=0;i<6;i++){ebentuakArtikuluei(i);}
}

function erase( num ){
	$("#"+num).hide();
}

function denakErakutzi(){
	var i;
	for ( i = 0; i <6 ;i++) {
		$("#"+i).show();
	}
}

function sartu(i){
	$('#'+i).css('box-shadow', '5px 5px 5px grey');
}

function kanpora(i){
	$('#'+i).css('box-shadow', '10px 10px 10px grey');
}

function ebentuakArtikuluei(num){
	$("#"+num).mouseover( function() { sartu(num);})
	$("#"+num).mouseout( function() { kanpora(num);})
}

function ebentuakBotoiei(num){
	console.log(num);
		$("#b"+num).click( function() { erase(num-1);})
}