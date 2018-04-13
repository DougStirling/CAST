var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comparing two proportions</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>If categorical data are collected from two groups of individuals, we are usually interested in comparing the proportions in the categories.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupPropn_c1')\">1. Modelling two proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two-group categorical data can be modelled as samples from two categorical populations with different probabilities of 'success'.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupPropn2b')\">2. Distribution of difference in proportions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the two population proportions are equal, the difference between the sample proportions has a distribution with mean zero. It is approximately normal and its standard deviation can be estimated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupPropn4')\">3. Testing for difference in probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A hypothesis test is developed to assess whether two population probabilities are the same.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('e_twoGroupPropn2')\">4. Exercise:  Are probabilities in two groups equal?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This exercise asks for the hypotheses, p-value and conclusion when testing whether two group proportions are equal, both with one- and two-tailed alternatives.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
