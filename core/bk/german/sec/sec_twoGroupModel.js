var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Models for two groups</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Many data sets involve numerical measurements from individuals that are classified into two groups. Models are described for data with this structure.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupModel1')\">1. Interest in underlying population</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>As with single-group data, the populations underlying two-group data sets are usually of more interest than the specific sample data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupModel2')\">2. Model for two groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two-group data sets are often modelled as separate random samples from two normal populations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupModel3')\">3. Parameters of the normal model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The normal model has four parameters &mdash; the means and standard deviations in the two groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupModel4')\">4. Parameter estimates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The parameters of the normal model can be estimated by the sample means and standard deviations in the two groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('twoGroupModel5')\">5. Difference between means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The difference between the population means is of particular interest. The difference between the sample means provides an estimate. It varies from sample to sample and has a distribution.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
