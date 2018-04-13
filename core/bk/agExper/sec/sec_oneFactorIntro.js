var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Introduction</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorIntro1')\">1. Recap of notation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The terminology used for experiments is first reviewed -- experimental units, controlled variables and a response.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorIntro2')\">2. Experiments in practice</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In practice, experiments can be quite complex. A few examples are described within the framework described in the previous page.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('oneFactorIntro_b3')\">3. Simple experiments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Extremely simple experiments involving homogeneous experimental units and a single controlled variable will be used to introduce many concepts and methods that also apply to more complex experiments.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
