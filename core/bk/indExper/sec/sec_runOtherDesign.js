var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Designs with other numbers of runs</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('runOtherDesign1')\">1. Other fractional factorial designs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The number of runs in a fractional factorial design must be a power of 2. A table shows the resolution possible for designs with up to 64 runs.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('runOtherDesign2')\">2. Plackett-Burman designs for 12 runs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For 8-11 factors, a Plackett-Burman design uses only 12 runs, as opposed to the 16 runs needed for a fractional factorial experiment. The factors are still orthogonal.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('runOtherDesign3')\">3. Plackett-Burman designs for 24+ runs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A Plackett-Burman design for 16-19 factors in 20 runs is much less expensive than the 32 runs needed for a fractional factorial experiment. Plackett-Burman designs exist for any multiple of 4 runs.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('runOtherDesign4')\">4. Foldover designs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Repeating the runs in a resolution III design with the high and low levels for all factors swapped, results in a resolution IV design. Foldover designs can be used sequentially to augment a previous resolution III design. Some foldover Plackett-Burman designs are resolution IV designs with fewer runs than any fractional factorial design.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
