var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Simulation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probSim1')\">1. Probability models and simulation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation conducts a tennis match. The probability of one player, A, winning each point can be adjusted and the simulation is played point by point.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probSim2')\">2. Simulation: Will the best team win?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram simulates a league in which all teams are similar except for team A whose probability can be adjusted with a slider. Even when team A has twice the probability of winning than losing each match, it is often not top of the league and may even be in the bottom half.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probSim3')\">3. Simulation: Will the best team win?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A simulated soccer league with teams of equal skill shows the 'likely' values of the range and sd of points at the end of season. This is used to show that the range and sd of an actual soccer league are not consistent with teams of equal skill.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probSim4')\">4. Assessing unusual features in data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This is an example of a simulation of box plots of samples from a normal distribution that are used to help assess skewness in a real data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probSim5')\">5. Random numbers</a>&nbsp;&nbsp;&nbsp;<span class='note'>Advanced</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram animates the generation of a rectangular (0, 1) value from random digits. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_probSim6')\">6. Generating categorical values</a>&nbsp;&nbsp;&nbsp;<span class='note'>Advanced</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In this diagram, a random category is generated from a rectangular(0,1) value by using this value to read into a stacked bar chart.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
