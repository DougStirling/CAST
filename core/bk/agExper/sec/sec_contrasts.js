var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Contrasts and constraints</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('contrasts1')\">1. Treatments and factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The combinations of factor levels used are called treatments. The sum of squares explained by the treatments (treated as a single factor) is closely related to those of the main effects and interaction between the actual factors.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('contrasts2')\">2. Defining models with constraints</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The model with no interaction between two factors can be expressed with constraints on the parameters of the most general model. Similarly, models without main effects can be expressed in terms of constraints.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('contrasts3')\">3. Comparing a control to other treatments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Models where the control level of a single factor equals the average for the other treatments, and where all non-control levels are equal, can both be expressed in terms of constraints.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('contrasts4')\">4. Analysis of variance for constraints</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The treatment sum of squares for an experiment with a control level can be split into a sum of squares explained by the difference between the control and other levels, and a sum of squares explained by differences between the non-control levels. This allows both constraints to be tested.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('contrasts5')\">5. Comparing groups of treatments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The treatment sum of squares can be split into components for differences between two groups of treatments, and for differences between these groups.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('contrasts6')\">6. Comparisons in block designs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The above methods for splitting the treatment sum of squares can also be used in more complex experimental designs such as randomised blocks.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('contrasts7')\">7. Estimating contrasts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An alternative approach to analysing the structure of the levels of a factor estimates linear functions of the model parameter called contrasts.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
