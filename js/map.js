class MapL{
	constructor(id){
		this.map = L.map(id).setView([-22.906323, -43.182386], 12);
		var mapLink =  '<a href="http://openstreetmap.org">OpenStreetMap</a>';
		        L.tileLayer(
		            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		            attribution: '&copy; ' + mapLink + ' Contributors',
		            maxZoom: 18,
		            }).addTo(this.map);

		L.svg().addTo(this.map);	
		this.svg = d3.select("#map").select("svg");
		this.g = this.svg.attr("id", "circles_layer").append("g");     


		L.svg().addTo(this.map);	
		var aux = d3.select("#map").selectAll("svg");
		this.newSVG = aux.filter(function (d, i) { return i === 1;})
		this.newSVG.attr("id", "lines_layer").append("g");


		this.info = L.control({position: 'bottomright'});

		this.info.onAdd = function (map) {
		    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
		    this.update();
		    return this._div;
		};


		this.legend = L.control({position: 'bottomright'});
	}


	updateInfo(trajetoria, idObj){
		
			if(idObj){
				this._div.innerHTML = '<h4>' + idObj + '</h4>';
				for ( x in configData.nomes){
		    		this._div.innerHTML += '<b>'+ configData.nomes[x] +' : </b> ' + trajetoria[configData.nomes[x]] + '<br />'
		    	}
		    	this._div.innerHTML += '<b> Time :</b>' + trajetoria.datahora
			}else{
				this._div.innerHTML = '<h4>ID</h4>' + 'Hover over a circle';
			}
			
	}


}