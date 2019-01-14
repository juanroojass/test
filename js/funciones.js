
function cargaInfo(){
$.ajax({
		data: "",
		url: "js/data_melp.json",
		type: "post",
		dataType: "json",
		beforeSend: function(){
			
		},
		success: function(response){
			//var myObj = JSON.stringify(response);
			//console.log(response);			
			//$('#idTable').append("<thead align='center'> <tr> <td>Sitio</td><td>Sitio</td><td>Sitio</td><td>Sitio</td><td>Sitio</td><td>Sitio</td><td>Sitio</td><td>Sitio</td><td>Sitio</td> </tr> </thead>");
			
			$('#idTable').append("<tbody class='infoTabla'>");
			
			for(var a=0; a<response.length; a++){				
				$('#idTable').append("<tr> <td>"+response[a].name+"</td><td> <a target='_blank' href='"+response[a].contact.site+"'>"+response[a].contact.site+" </a></td><td> <a href='mailto:"+response[a].contact.email+"'>"+response[a].contact.email+" </a> </td><td>"+response[a].contact.phone+"</td><td>"+response[a].address.street+"</td><td>"+response[a].address.city+"</td><td>"+response[a].address.state+"</td><td align='center'> <a href=javascript:abreUbicacion("+response[a].address.location.lat+","+response[a].address.location.lng+");> <img src='img/point.png' > </a>  </td><td align='center'>"+response[a].rating+"</td></tr> ");
				//console.log(response[a].contact.site);
				filaEstilo = "";
			}
			$('#idTable').append("</tbody>");
			ajustaTabla();
		}
	});
}

function ajustaTabla(){
	var table = $('#idTable').DataTable( {
		scrollY:        "400px",
		scrollX:        true,
		scrollCollapse: false,
		paging:         false,
		searching: false,
		"bInfo": false,
		"ordering": true,		
		fixedColumns:   {
			leftColumns: 0,
			rightColumns: 0
		}
		
	} );
}

function abreUbicacion(lat, lng){
	var propiedades="status=no,toolbar=no,menubar=no,scrollbars=yes,resizable=yes,width=600, height=500, left=400,top=350";           
	win = window.open('web/ubicacion.html?lat='+lat+'&lng='+lng,'myWin', propiedades);
	//console.log(latitud+"//"+logitud);	
}

function abreBusqueda(){
	var propiedades="status=no,toolbar=no,menubar=no,scrollbars=yes,resizable=yes,width=800, height=500, left=400,top=350";           
	win = window.open('web/busqueda.html','myWin', propiedades);
	//console.log(latitud+"//"+logitud);	
}

function pp(){
	alert('ppp');
}
