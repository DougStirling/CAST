var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Variation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_variation1')\">1. Signal and noise</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing how the addition of random noise to a picture containing text makes it hard to read the text (signal).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_variation2')\">2. Natural variability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram simulating a random measurement from individuals.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_variation3')\">3. Signal and noise in experiments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram involving the individuals in the previous page but with half receiving an experimental treatment whose effect can be varied. Natural variability (noise) can obscure the treatment effect (signal).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_variation4')\">4. Variability in survey data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Simulation of categorical variable that is summarised by a proportion.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_variation5')\">5. Explained and unexplained variation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Three data sets are shown. The first has no explained variation. The variable of interest in the second data set has variation that can be explained by experimental conditions. The third data set is observational and variation may be partially understood in terms of an auxiliary variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_variation6')\">6. Predicting future values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example of annual rainfall data where the natural variation can be used to predict the chance of extreme rainfall in future years.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
