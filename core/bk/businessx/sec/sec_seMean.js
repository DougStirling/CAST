var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Standard error of mean</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_seMean_c1')\">1. Error distribution for mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows the theoretical normal distribution of the estimation error of the sample mean based on samples from a normal population. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_seMean2')\">2. Standard error when population SD is known</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows how the error distn can be found for different sample sizes when estimating the mean of a population with known SD. The diagram helps to interpret the sample mean from a real data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_seMean_c3')\">3. Standard error when population SD is unknown</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page gives a few examples in which the SE of a sample mean is evaluated using the sample SD; the distribution of the estimation error is sketched.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_seMean4')\">4. Standard error vs standard deviation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page contains two diagrams that help to distinguish between the sample SE and SD. The first shows how the sample size affects the theoretical distns of the popn and estimation error. The second uses simulated data to show how the sample SD and sample SE are affected by the sample size.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_seMean_c5')\">5. Using SEs to compare estimators</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation finds the error distributions for the sample mean and sample median when estimating the 'centre' of a normal population. These show that the sample mean is the better estimator (smaller SE). Another diagram shows the theoretical distributions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_seMean6')\">6. More about bias</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows theoretical distributions of mean and median as estimators of the mean of an exponential distribution. With large sample size, the bias of the median is pronounced.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
