var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Surveys and experiments</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('expIntro1')\">1. Surveys and other samples</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In observational studies such as surveys, data are sampled from populations to describe the characteristics of the populations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('expIntro2')\">2. Causal relationships</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Causal relationships between variables are particularly important since they predict the effect of changing one variable on the other.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('expIntro3')\">3. Observational data and relationships</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Causal relationships cannot be inferred from observational data since observed relationships may result from the influence of further unrecorded variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('expIntro4')\">4. Experiments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In experiments, the values of one variable are under the control of the researcher.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('expIntro5')\">5. Experiments and causal relationships</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A well-designed experiment gives the researcher information about how changes to the controlled variable affect the response.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
