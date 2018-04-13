var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Designs for 4 and 8 runs</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>In factorial experiments, we can estimate the main effects of <em>n</em>      factors in 2<em><sup>n</sup></em> runs. This section introduces related experimental      designs for <strong>more</strong> than <em>n</em> factors called <strong>fractional      </strong>factorial experiments<strong> </strong>. Most practical experiments      involve 8 or more runs but the concepts are first introduced for experiments      with only 4 runs.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('run48Design1')\">1. Two factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>One replicate of a complete factorial experiment for 2 factors requires 4 runs. The two factors and their interaction are orthogonal, so all effects can be independently estimated. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('run48Design2')\">2. Three factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the levels for C are defined by the AB interaction term in a complete factorial experiment for A and B, all three factors are orthogonal. However the main effects are confounded with 2-factor interactions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('run48Design3')\">3. Assessing factor importance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Since main effects are confounded with 2-factor interactions in a fractional factorial experiment for 3 factors in 4 runs, the interactions must be assumed to be negligible before the main effects can be used to rank the importance of the factors.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('run48Design4')\">4. Two or three factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Two replicates of a complete factorial experiment with 2 factors or one replicate of a complete factorial experiment with 3 factors can be conducted in 8 runs. All main effects and interactions can be estimated.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('run48Design5')\">5. Four factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A fractional factorial experiment for 4 factors in 8 runs can be designed by confounding D with the ABC interaction. Main effects are not confounded with 2-factor interactions but 2-factor interactions are confounded with each other.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('run48Design6')\">6. Five to seven factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A design with up to seven orthogonal factors can be defined by confounding D, E, F and G with the three 2-factor interactions and the 3-factor interaction in a complete factorial experiment for A, B and C. Main effects are confounded with 2-factor interactions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('run48Design7')\">7. Ranking factor importance</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Importance of factors is determined by their main effects. However this ranking assumes that 2-factor interactions are negligible if there are 5 or more factors.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
