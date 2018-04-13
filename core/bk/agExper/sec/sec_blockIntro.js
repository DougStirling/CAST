var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Introduction to blocks</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('blockIntro1')\">1. Variability of experimental units</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In most experiments, the experimental units that are available differ from each other and this variability results in less accurate estimates of the effect of the treatment.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('blockIntro2')\">2. Blocks of similar experimental units</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>There is often enough information about differences between the experimental units before the experiment begins to allow them to be grouped into similar blocks of units.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('blockIntro3')\">3. Intentional variation in experimental units</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Experiments are sometimes designed to have variable experimental units to give confidence that the conclusions will hold for a wide range of different situations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('blockIntro4')\">4. Blocks and replicates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Some authors use the term 'replicate' to denote a separate repeat of the whole experiment. Such replicates should be treated as blocks.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
