            var a = document.getElementById("img");
			var c = a.src.substr(a.src.length-5,a.src.length);
			var b = document.getElementById("input");
			function qw(){
				if(c==="m.png"){
					a.src="3.png";
					b.type="text";
					c="3.png";
				}else{
					a.src="m.png";
					b.type="password";
					c="m.png";
				}				
			}