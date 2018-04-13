function showHideProof(theoremId, showNotHide) {
	var proofId = "proof_" + theoremId;
	var proofDiv = document.getElementById(proofId);
	if (proofDiv != null)
		proofDiv.style.display = showNotHide ? "block" : "none";
	
	var proofLinkId = "proofLink_" + theoremId;
	var proofLinkDiv = document.getElementById(proofLinkId);
	if (proofLinkDiv != null)
		proofLinkDiv.style.display = showNotHide ? "none" : "block";
}

function showHideSolution(questionId, showNotHide) {
	var solutionId = "solution_" + questionId;
	var solutionDiv = document.getElementById(solutionId);
	if (solutionDiv != null)
		solutionDiv.style.display = showNotHide ? "block" : "none";
	
	var solutionLinkId = "solutionLink_" + questionId;
	var solutionLinkDiv = document.getElementById(solutionLinkId);
	if (solutionLinkDiv != null)
		solutionLinkDiv.style.display = showNotHide ? "none" : "block";
}

var setupTheorem = function(index, element) {
	var theoremId = "theorem_" + index;
	var $theorem = $(element);
	
	var $proof = $theorem.find("div.proof");
	if ($proof.length) {
		$proof.attr("id", "proof_" + theoremId);
		
		var $proofTitle = $("<p />", {
			html: "Proof",
			"class": "proofTitle",
			id: "proofTitle_" + theoremId
		});
		$proof.prepend($proofTitle);
		
		var $proofLink = $('<div class="proofLink" id="proofLink_' + theoremId + '"> <p class="proofTitle">Proof ...</p>');
		$proofLink.insertBefore($proof);
	
		$proofLink.click(function() {
			showHideProof(theoremId, true);
		});
		
		$proofTitle.click(function() {
			showHideProof(theoremId, false);
		});
			
		showHideProof(theoremId, false);
	}
}

var setupQuestion = function(index, element) {
	var questionId = "question_" + index;
	var $question = $(element);
	
	var $solution = $question.find("div.solution");
	$solution.attr("id", "solution_" + questionId);
	
	var $solutionTitle = $("<p />", {
		html: "Solution",
		"class": "solutionTitle",
		id: "solutionTitle_" + questionId
	});
	$solution.prepend($solutionTitle);
	
	var $solutionLink = $('<div class="solutionLink" id="solutionLink_' + questionId + '"> <p class="solutionTitle">Solution ...</p>');
	$solutionLink.insertBefore($solution);

	$solutionLink.click(function() {
		showHideSolution(questionId, true);
	});
	
	$solutionTitle.click(function() {
		showHideSolution(questionId, false);
	});
	
	showHideSolution(questionId, false);
}

/*
var setupSvgGraph = function(index, element) {
	var $graph = $(element);
	var width = $graph.attr("width");
	var height = $graph.attr("height");
	var src = $graph.attr("src");
	if (src.lastIndexOf(".png") != (src.length - 4) && src.lastIndexOf(".gif") != (src.length - 4))
		return;
	
	src = src.substr(0, src.length - 4) + ".svg";
	var $svgElement = $('<iframe src="' + src + '" width="' + width + '" height="' + height + '" frameborder="0"></iframe>');
	$svgElement.insertAfter($graph);
	$graph.remove();
}
*/

var setupSvgGraph = function(index, element) {
	var $graph = $(element);
	var width = $graph.attr("width");
	var height = $graph.attr("height");
	var src = $graph.attr("src");
	if (src.lastIndexOf(".png") != (src.length - 4) && src.lastIndexOf(".gif") != (src.length - 4))
		return;
	
	src = src.substr(0, src.length - 4) + ".svg";
	$graph.attr("src", src);
}

$(function() {
	var $theorems = $('div.theoremProof');
	$theorems.each(setupTheorem);
	
	var $questions = $('div.questionSoln');
	$questions.each(setupQuestion);
	

	var $graphs = $('img.svgImage');
	$graphs.each(setupSvgGraph);
});


