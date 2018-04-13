var exercises = new Array();
var currentExercise = null;

function startExercise(applet, width, height) {
	currentExercise = new Exercise(width, height);
	exercises[applet] = currentExercise;
}

function addCoreParam(paramName, param) {
	currentExercise.addCoreParam(paramName, param);
}

function addVariation(shortName, question, qnParam, qnExtra, height) {
	currentExercise.addVariation(shortName, question, qnParam, qnExtra, height);
}

//---------------------------------------------------------------------------------------

function Exercise(width, height) {
	this.width = width;
	this.height = height;
	this.coreParams = null;
	this.variations = new Array();
	
	this.addCoreParam = AddCoreParam;
	this.addVariation = AddVariation;
	this.getVariationsUsed = GetVariationsUsed;
	this.getMaxHeight = GetMaxHeight;
	this.getAppletParams = GetAppletParams;
	this.outputHtml = OutputExerciseHtml;
}

function AddCoreParam(paramName, param) {
	if (this.coreParams == null)
		this.coreParams = new Array();
	this.coreParams[paramName] = param;
}

function AddVariation(shortName, question, qnParam, qnExtra, height) {
	this.variations[shortName] = new Variation(question, qnParam, qnExtra, height);
}

function trim(s) { 
	while (s.substring(0,1) == ' ')
		s = s.substring(1, s.length);
	while (s.substring(s.length-1, s.length) == ' ') 
		s = s.substring(0,s.length-1);
	return s;
}

function GetVariationsUsed(variationList) {
	var variationsUsed;
	if (variationList == null)
		variationsUsed = this.variations;
	else {
		variationsUsed = new Array();
		var activeVariations = variationList.split(",");
		for (vi in activeVariations) {
			var vName = trim(activeVariations[vi]);
			if (this.variations[vName])
				variationsUsed[vName] = this.variations[vName];
			else
				alert("Exercise applet " + this.appletName + " does not have variation \"" + vName + "\"");
		}
	}
	return variationsUsed;
}

function GetAppletParams(variationsUsed, options) {
	var allParams = "";
	
	if (this.coreParams != null) {
		for (paramName in this.coreParams)
			allParams += "<param name=\"" + paramName + "\" value=\"" + this.coreParams[paramName] + "\">\n";
	}
	
	var vIndex = 0;
	for (vi in variationsUsed) {
		allParams += variationsUsed[vi].getHtml(vIndex);
		vIndex ++;
	}
	
	allParams += "<param name=\"nQuestions\" value=\"" + vIndex + "\">\n";
	
	if (options != null)
		allParams += "<param name=\"options\" value=\"" + options + "\">\n";
	return allParams;
}

function GetMaxHeight(variationsUsed) {
	var maxHeight = this.height;
	for (vi in variationsUsed)
		maxHeight = Math.max(maxHeight, variationsUsed[vi].height);
	return maxHeight;
}

function OutputExerciseHtml(appletName, variationList, options, doc, dirExtra) {
	var variationsUsed = this.getVariationsUsed(variationList);
	
	var maxHeight = this.getMaxHeight(variationsUsed);
	
	var javaDir = (typeof dirExtra == "undefined") ? "../../java" : (dirExtra + "../java");
	
	doc.writeln("<applet codebase='" + javaDir + "' code='dataView.CastApplet.class' archive='coreCAST.jar' width='"
											+ this.width + "' height='" + maxHeight + "'>");
	doc.writeln("<param name='appletName' value='" + appletName + "'>");
	
//	doc.writeln("<applet codebase='" + javaDir + "' code='" + appletName + ".class' archive='coreCAST.jar' width='"
//											+ this.width + "' height='" + maxHeight + "'>");
	writeAppletParams(this.width, this.height);
	
	var appletParams = this.getAppletParams(variationsUsed, options);
	doc.write(appletParams);
	
	doc.writeln("</applet>");
}


//---------------------------------------------------

function Variation(question, qnParam, qnExtra, height) {
	this.question = question;
	this.qnParam = qnParam;
	this.qnExtra = qnExtra;
	this.height = height;
	
	this.getHtml = GetVariationHtml;
}

function GetVariationHtml(index) {
	var params = "";
	if (this.question != null)
		params += "<param name=\"question" + index + "\" value=\"" + this.question + "\">\n";
	if (this.qnParam != null)
		params += "<param name=\"qnParam" + index + "\" value=\"" + this.qnParam + "\">\n";
	if (this.qnExtra != null)
		params += "<param name=\"questionExtra" + index + "\" value=\"" + this.qnExtra + "\">\n";
	return params;
}



//---------------------------------------------------


function outputExercise(appletName, variations, options, doc, dirExtra) {
														//	dirExtra = "../" is used for print chapters since they are 1 level deeper
	if (exercises[appletName]) {
		var ex = exercises[appletName];
		ex.outputHtml(appletName, variations, options, doc, dirExtra);
	}
	else
		alert("Cannot find exercise \"" + appletName + "\"");
}