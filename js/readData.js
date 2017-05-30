class ReadData{
	constructor(pathData, pathConfig){
		this.pathData = pathData;
		this.pathConfig = pathConfig;
		this.data;
		this.configData;

	}
	readConfig(){
		var that = this;

		d3.json(this.pathData, function(error, data) {
			if (error) return console.warn(error);

			that.configData = data;
			that.readData();
		
		})
	}
	readData(){
		var that = this;
		d3.json(this.pathData, function(error, data) {
			if (error) return console.warn(error);
			that.data = data;
			if(that.configData.datahora == "default"){
				var formatT = d3.timeParse ('%Y%m%d-%H%M')
				data.forEach(function(d){
					d.trajetoria.forEach(function(e){e.datahora = formatT(e.datahora); })
				})
			}
		
		})
		
	}


}