var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comparing means in two groups</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupInf_c1')\">1. Distn of difference between means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation shows that sample-to-sample variation in the difference between two means matches the theoretical distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupInf_c2')\">2. Distribution of estimation error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The calculations for the standard error and approximate error distribution are shown for a few real data sets.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupInf_c3')\">3. CI for difference between means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows the calculations to find 95% CIs for several real data sets and interprets the CIs in words.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupInf4')\">4. Properties of confidence interval</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation shows that approx 95% of the 95% CIs include the true difference between the popn means.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupInf_c5')\">5. Testing a hypothesis</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page shows the calculations to find the p-values for testing whether two means are equal for a few real data sets. The conclusions from the test are also described.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupInf6')\">6. Properties of hypothesis test</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation supports the fact that all p-values between 0 and 1 are equally likely if the group means are equal. A second simulation when the group means are different shows that the p-values are more likely to be near zero.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupInf_c7')\">7. One-tailed tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram shows the calculations for applying 1-tailed tests to a few real data sets.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_twoGroupInf8')\">8. Properties of one-tailed tests</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation shows that all p-values between 0 and 1 are equally likely when both group means are the same.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
