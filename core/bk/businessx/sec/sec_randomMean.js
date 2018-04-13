var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Distribution of sample mean</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randomMean_c1')\">1. Parameters and statistics</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram selects samples from a finite population. It demonstrates the sample-to-sample variability of the sample mean and sd.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randomMean2')\">2. Distribution of sample mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation shows that the sample mean has a distribution and that its standard deviation gets lower when sample size increases.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randomMean3')\">3. Means from normal populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing how normal distn of mean changes as sample size increases.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randomMean4')\">4. Large-sample normality of means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation illustrates the Central Limit Theorem when sampling from an exponential distn. The theoretical distribution of the mean can also be shown with a slider to change the sample size.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randomMean_c5')\">5. Distribution of mean from a sample</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, the sd of a sample mean is estimated for a few data sets.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randomMean6')\">6. Requirement of independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation shows that the sd of the mean will be underestimated if the sample values are positively correlated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_randomMean7')\">7. Sampling from finite populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is a simulation that shows that the finite population correction factor is needed when sampling without replacement with a large sampling fraction.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
