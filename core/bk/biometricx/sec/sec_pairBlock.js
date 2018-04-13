var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Pairing and blocks</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_pairBlock1')\">1. Aim of similar experimental units</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation shows a collection of experimental units whose characteristics differ. The treatment effect in a completely randomised experiment is inaccurately estimated. By choosing experimental units that are more similar, the accuracy of the estimate is improved considerably.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_pairBlock2')\">2. Aim of similar experimental units</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation shows that grouping the varying experimental units into matched pairs and randomising treatments within pairs results in estimates that are as accurate as if all experimental units were initially similar.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_pairBlock3')\">3. Randomisation in paired experiments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram animates the allocation of treatments to experimental units in a completely randomised design and in a randomised block design with matched pairs.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_pairBlock4')\">4. Matched groups of 3 or more units</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation extends the simulation on the 2nd page of this section with matched groups of 3 experimental units in an experiment with 3 factor levels. Again the randomised block experiment estimates factor effects much more accurately than in a completely randomised one.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_pairBlock_b5')\">5. Randomised block experiments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows several data sets from randomised block experiments of different kinds. One involves matched groups but the others use naturally occurring blocks.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
