var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Simple experiments</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro1')\">1. Experiments and treatments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Experiments are conducted to assess the effect of some categorical or numerical explanatory variable on a response. Experiments are characterised by the fact that the researcher can control the values of the explanatory variable that are used.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro2')\">2. Variable experimental units</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In many experiments, the units on which the experiment is conducted are not identical. The varying characteristics of the experimental units may affect the response.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro3')\">3. A badly designed experiment</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the treatments are badly allocated to experimental units, the experiment may over- or under-estimate their effect.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro4')\">4. Confounding</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the experimental units that are chosen to get one treatment also differ in other ways, it will be impossible to tell whether it is the treatment or the other distinct characteristics of the units that affects the response.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro5')\">5. Randomisation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Random allocation of treatments to experimental units avoids systematic over- or under-estimation of treatment effects.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('designIntro6')\">6. Replication</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If each treatment is used in more than one experimental unit, unit-to-unit variability can be assessed. This gives information about whether differences between the treatments are more than chance differences.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
