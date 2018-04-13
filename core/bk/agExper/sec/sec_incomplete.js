var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Incomplete block designs</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('incomplete1')\">1. Balance in block designs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If each pair of treatments is used together in the same number of blocks, the design is called balanced and all pairs of treatments can be compared with the same accuracy.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('incomplete2')\">2. Balanced incomplete block designs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page gives an example of analysis of variance for a balanced incomplete block experiment.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('incomplete3')\">3. Adjusted treatment means</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The raw treatment means do no describe well the differences between the treatments in incomplete block designs. Adjusted treatment means should be used instead.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('incomplete4')\">4. Balanced lattice designs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lattice designs are used in experiments for factors with many levels and relatively small block sizes. In a balanced lattice design, each pair of treatments is used together in one block.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('incomplete5')\">5. Simple lattice designs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Subsets of a full balanced lattice design still allow all treatments to be compared.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('incomplete6')\">6. Randomisation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Groups of treatments should be allocated to blocks randomly from the rows of a standard design. These treatments should then be randomly allocated to experimental units within each block.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
