var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Modelling variation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalModel1')\">1. Explained and unexplained variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Varying the values of the controlled factors causes some variability in the response -- explained variation. In some kinds of experiment, there is known structure to the experimental units that also results in explained variation. Other variation remains unexplained.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalModel2')\">2. Modelling variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Explained variation in the response is modelled with a function for the response mean that involves the levels of the factors (constants) and some unknown parameters. Unexplained variation is modelled with a probability distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalModel3')\">3. Normal model for the response</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In normal models, the response is the sum of a component that depends on on the experimental factors and structure of the experimental units, and an error term that a normal distribution with mean zero and constant standard deviation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('normalModel4')\">4. Parameter estimation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The model for the explained variation usually involves unknown parameters. These can be estimated by least squares.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
