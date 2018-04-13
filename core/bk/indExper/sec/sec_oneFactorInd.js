var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Design and estimates</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorInd1')\">1. Completely randomised experiment</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In the simplest type of experiment, there are no known differences between the experimental units and a single factor is varied. In a completely design, the different levels of the factor are randomly allocated to the pool of experimental units.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorInd2')\">2. Experiment with one factor</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page gives a few data sets from completely randomised experiments for a single factor.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorInd3')\">3. Explained and unexplained variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Varying the controlled factor causes variability in the response -- explained variation. Other response variability remains unexplained.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorInd4')\">4. Treatment means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The mean responses at the different factor levels summarise differences between the treatments -- the explained variation.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
