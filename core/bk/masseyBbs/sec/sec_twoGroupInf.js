var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Are the means equal?</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Hypothesis tests are used to assess the difference between the means of two groups.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupInf_c1')\">1. Distn of difference between means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The difference between the means of two samples from normal populations has a normal distribution whose mean and s.d. can be found from the population means and s.d.s. This is the approximate distribution even when the populations are non-normal.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupInf_c2')\">2. SE of difference between means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When the difference between the sample means is used to estimate the difference between the underlying population means, there is likely to be an error. The error distribution is approximately normal with mean 0. A formula for its standard deviation is given.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupInf_c4')\">3. Are the means equal?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A hypothesis test is developed for testing whether two group means are the same.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupInf_c5')\">4. One-tailed tests for differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the alternative hypothesis is for one particular mean to be greater, then the p-value for the test is found from only one tail of the t distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_twoGroupInf3')\">5. Exercise:  Test for two means being equal</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page provides an exercise that gives practice in evaluating p-values for hypothesis tests comparing two means and interpreting them.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
