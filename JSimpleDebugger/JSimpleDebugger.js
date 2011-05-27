//define contstants
const {Cu} = require("chrome");

//import LightweightThemeManager - the one responsible for handling Personas.
const Iservices = Cu.import('resource://gre/modules/Services.jsm').Services;

const econsole = Iservices.console;
//define class element
var JSimpleDebugger = 
{
	//define function element
	write: function (args)
	{
		econsole.logStringMessage(args);
	},
	dump: function(obj,level)
	{
		//based on http://binnyva.blogspot.com/2005/10/dump-function-javascript-equivalent-of.html
		var dumped_text = "";
		if(!level) level = 0;
		
		//The padding given at the beginning of the line.
		var level_padding = "";
		for(var j=0;j<level+1;j++) level_padding += "    ";
		
		if(typeof(obj) == 'object') { 
		 for(var item in obj) {
		  var value = obj[item];
		 
		  if(typeof(value) == 'object') { 
		   dumped_text += level_padding + "'" + item + "' ...\n";
		   dumped_text += dump(value,level+1);
		  } else {
		   dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
		  }
		 }
		} 
		econsole.logStringMessage(dumped_text);
		
		
	}

}
//export object to be visible from your code
exports.JSimpleDebugger = JSimpleDebugger;