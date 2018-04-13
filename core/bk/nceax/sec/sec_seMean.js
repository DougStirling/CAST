var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Standard error of mean</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_seMean1')\">1. Error distribution for mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows the theoretical normal distribution of the estimation error of the sample mean based on samples from a normal population. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_seMean2')\">2. Standard error when population SD is known</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how the error distn can be found for different sample sizes when estimating the mean of a population with known SD. The diagram helps to interpret the sample mean from a real data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_seMean4')\">3. Standard error vs standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page contains two diagrams that help to distinguish between the sample SE and SD. The first shows how the sample size affects the theoretical distns of the popn and estimation error. The second uses simulated data to show how the sample SD and sample SE are affected by the sample size.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
