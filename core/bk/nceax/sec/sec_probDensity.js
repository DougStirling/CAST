var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Probability density functions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_densityCopy5')\">1. Relative frequency and area</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing that area = relative frequency.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probDensity5')\">2. Probability density functions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation shows how a histogram becomes more stable and smoother when the sample size increases and classes are made narrower. The limiting histogram is called a probability density function.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probDensity6')\">3. Normal distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram show a normal pdf with sliders to adjust the mean and sd. (The area remains constant.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probDensity8')\">4. Probability and area under the pdf</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram allows you to drag over the classes in a histogram or the possible values in a pdf. It illustrates that area equals probability.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
