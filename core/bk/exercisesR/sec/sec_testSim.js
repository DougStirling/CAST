var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Testing with simulations</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testIntro1')\">1. Test about a proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks you to perform a simulation to test a hypothesis about a population proportion, &pi;.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_testIntro2')\">2. Test about a mean, known sigma</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise is similar but the simulation is from a normal population and tests the value of its mean, &micro;.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
