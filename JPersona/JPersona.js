//define contstants
const {Cu} = require("chrome");

//import LightweightThemeManager - the one responsible for handling Personas.
const lwtm = Cu.import('resource://gre/modules/LightweightThemeManager.jsm').LightweightThemeManager;

//define class element
var JPersona = 
{
	//define function element
	getBGColor: function (args, callback)
	{
		
			var bgcolor;
			if (lwtm.currentTheme) 
			{
				bgcolor = lwtm.currentTheme.accentcolor;
				callback(bgcolor);
			}else
			{
				callback(null);
			}	
	},
	getTextColor: function(args,callback)
	{
		var textcolor;
		if (lwtm.currentTheme) 
			{
				textcolor = lwtm.currentTheme.textcolor;
				callback(textcolor);
			}else
			{
				callback(null);
			}	
		
		
	}

}
//export object to be visible from your code
exports.JPersona = JPersona;


