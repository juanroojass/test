var controlImg=1;
document.getElementById("img").src="img/img1.png";
setInterval(mostrarImg,3000);


function mostrarImg(){
	if(controlImg==1){
		document.getElementById("img").src="img/img2.png";
		controlImg=0;
	}else if (controlImg==0){
		document.getElementById("img").src="img/img1.png";
		controlImg=1;
	}
}	

cargaInfo();