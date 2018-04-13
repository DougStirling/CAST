var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Pairing and blocks</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pairBlock1')\">1. &Auml;hnliche Versuchseinheiten</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The effect of a factor is most accurately estimated in an experiment in which all experimental units are very similar. The more variability in the experimental units, the less accurate the estimates.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pairBlock2')\">2. Experimente mit Paarbildung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the factor has two levels, it is sometimes possible to group the experimental units into pairs that are similar to each other. By allocating one experimental unit from each pair to each factor level, the factor effect is estimated more accurately than in a completely randomised experiment.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pairBlock3')\">3. Randomisation in Experimenten mit Paarbildung</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is critically important that the two treatment levels are randomly allocated to the two experimental units in each pair.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pairBlock4')\">4. Einheitliche Gruppen mit 3 oder mehr Versuchseinheiten</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The idea of matched pairs of experimental units can be generalised into matched groupes of 3 or more if the factor has 3 or more levels. Randomly allocating the factor levels within each matched group results in more accurate estimates than in a completely randomised design.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('pairBlock5')\">5. Randomised block experiments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In many experiments, the experimental units naturally occur in groups of similar units (called blocks) where the block size is a multiple of the number of factor levels. A randomised block experiment randomly allocates equal numbers of units to each factor level within each block.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
