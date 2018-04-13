var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Simulation (optional)</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim1')\">1. Probability models and simulation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Probability can be used to model complex situations. A simulation of the model involves using the model's probabilities to generate an instance of the situation. Repeating the simulation can give insight into the behaviour of the system.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim2')\">2. Simulation: Will the best team win?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation demonstrates that the best team is often not top of a league at the end of the season even if it has a much higher probability of winning individual matches than all other teams.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim3')\">3. Is there evidence of skill in a league?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulation of a soccer league shows that the spread of points at the end of an actual soccer season is not consistent with all teams having equal abilities.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim_b4')\">4. Assessing unusual features in data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The variability of displays from 'regular' populations (such as normal distributions) can be used to assess features in a single data set, such as outliers, clusters or skewness.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim5')\">5. Random numbers</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Simulations are based on randomly generated values. These are generally based on random numbers for which any value between 0 and 1 is equally likely.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim6')\">6. Generating categorical values</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A random categorical value can be easily generated from a random number between 0 and 1.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probSim7')\">7. Generating numerical values</a>&nbsp;&nbsp;&nbsp;<span class='note'>(advanced)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Generating random numerical values from a particular distribution is harder. This page describes one such method.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
