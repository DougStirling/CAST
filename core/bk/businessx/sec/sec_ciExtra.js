var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>More about estimation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_ciExtra1')\">1. Maximum standard error for proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows that the standard error of a proportion is biggest when p = 0.5.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_ciExtra2')\">2. Margin of error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows that the margin of error is the '+/-' value in a 95% CI when p is 0.5, but underestimates the accuracy of small or large sample proportions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_ciExtra_c3')\">3. Sample size for estimating mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, sliders can adjust the standard deviation and sample size and the resulting 95% CI's width is displayed. The sample size can be increased until the CI width is less than the target accuracy. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_ciExtra4')\">4. Sample size for estimating proportion</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram is similar to that on the previous page but displays the width of 95% CIs for a proportion. It allows the sample size to be increased until a 95% CI is narrow enough.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_ciExtra5')\">5. Other confidence levels</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is a simulation of CIs for a mean (know popn SD) in which a slider can change the constant 1.96 to other values. The proportion including the popn mean changes corresponding to different confidence levels.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
