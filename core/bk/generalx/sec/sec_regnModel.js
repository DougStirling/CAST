var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Linear regression models</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnModel1')\">1. Histogram of Y for each X</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is a 3-dimensional diagram that shows regression data with repeat measurements at each x as a histogram for each x. (It can be rotated.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnModel2')\">2. Distribution of Y for each X</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This 3-dimensional diagram shows a regression model as a normal pdf at each x. It can again be rotated to talk about linearity and constant variance.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnModel3')\">3. Normal linear model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This 3-d diagram generalises with a slider showing a normal pdf an any x-value.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnModel4')\">4. Band containing 95% of crosses</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This 3-d diagram displays a grey band 2sd on each side of the regression line and shows that about 95% of sampled values are within such a band.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_regnModel5')\">5. Model parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram is a scatterplot of a real data set with superimposed 95% band. The 3 model parameters can be adjusted (by dragging arrows on the band) to match the data reasonably well.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
