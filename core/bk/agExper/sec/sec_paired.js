var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Paired data</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('paired1')\">1. Randomised blocks with pairs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Groups of similar experimental units are called blocks. A randomised block design consists of a completely randomised design within each block. The special case of blocks of size two (pairs) and a single factor with two levels is particularly easy to analyse.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('paired2')\">2. Matched pairs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Experimental units may be grouped into pairs that are 'similar' using any available information. In a randomised block design, one experimental unit in each pair is randomly given each factor level. The resulting estimate of the factor effect is more accurate than in a completely randomised experiment.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('paired3')\">3. Analysis of differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>With paired data, the differences between the two measurements in each pair hold all information about the effect of the factor. Their average provides an estimate of the factor's effect.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('paired4')\">4. Inference about differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Standard univariate inference methods can be used to test whether the factor affects the response and to find a confidence interval for the factor effect.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
