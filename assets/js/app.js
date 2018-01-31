$(document).ready(function(){
	small();
}

function small (){
 $('#categorias').on("change",function(){
		$('#img').css({
			'width' : '200%'
		})
	})
}

function Medium (){
 $('#option-medium').click(function(){
			$('#img').css({
			'width' : '400%'
		})
	})
}

function Large (){
 $('#option-large').click(function(){
			$('#img').css({
			'width' : '600%'
		})

	})
}


