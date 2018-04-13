var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comparing two proportions</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>If categorical data are collected from two groups of individuals, we are usually interested in comparing the proportions in the categories.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupPropn_c1')\">1. Modelling two proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two-group categorical data can be modelled as samples from two categorical populations with different probabilities of 'success'.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupPropn2')\">2. Distribution of difference in proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The difference between two sample proportions has a distribution that is approximately normal and whose parameters can be estimated using earlier results about the mean and standard deviation of differences.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupPropn_c3')\">3. CI for difference in proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The standard deviation of the difference between two sample proportions can be estimated. From this, a 95% confidence interval is developed for the difference between two probabilities.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupPropn_c4')\">4. Testing for difference in probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A hypothesis test is developed to assess whether two population probabilities are the same.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
