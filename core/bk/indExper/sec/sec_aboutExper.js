var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Basic concepts and notation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('aboutExper1')\">1. Structure of an experiment</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page describes notation for experimental data -- experimental units, controlled variables and a response.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('aboutExper2')\">2. Before you start</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Decisions must be made about the experimental units to use, the response to measure from each, the controlled variables to vary and the values of these variables to use. These are generally chosen for non-statistical reasons.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('aboutExper3')\">3. Randomisation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Experimental design defines which experimental treatments are applied to which units. If this is done badly, the experiment can result in incorrect conclusions. Randomisation prevents biased results.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('aboutExper4')\">4. Blocks of experimental units</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the experimental units are not identical, grouping them into blocks of similar units improves accuracy.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
