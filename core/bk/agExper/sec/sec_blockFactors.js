var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Two or more factors</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('blockFactors1')\">1. Randomised blocks and treatments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In many randomised block experiments, the treatments are combinations of levels of two or more separate factors. Each such treatment should have the same number of replicates be randomly applied to experimental units within each block.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('blockFactors2')\">2. Analysis of variance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The treatment sum of squares in the earlier analysis of variance table for randomised block designs can be spllit into explained sums of squares for the separate factors and their interaction.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
