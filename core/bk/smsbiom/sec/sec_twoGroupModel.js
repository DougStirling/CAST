var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Models for two groups</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Many data sets involve numerical measurements from individuals that are classified into two groups. Models are described for data with this structure.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupModel_b1')\">1. Interest in underlying population</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>As with single-group data, the populations underlying two-group data sets are usually of more interest than the specific sample data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupModel_b2')\">2. Model for two groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two-group data sets are often modelled as separate random samples from two normal populations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupInf_b4')\">3. Testing a hypothesis</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A hypothesis test is developed for testing whether two group means are the same.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupInf_b5')\">4. One-tailed tests for differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the alternative hypothesis is for one particular mean to be greater, then the p-value for the test is found from only one tail of the t distribution.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
