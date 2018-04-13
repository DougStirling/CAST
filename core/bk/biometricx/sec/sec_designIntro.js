var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Principles of experimental design</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_designIntro1')\">1. Variable experimental units</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram illustrates that the experimental units can vary and shows that their varying characteristics can affect the response, even if there are no treatments.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_designIntro2')\">2. A badly designed experiment</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation shows that bad allocation of treatments to experimental units can bias estimates of treatment effects.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_designIntro3')\">3. Randomisation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation is similar to the previous one but randomly allocates treatments and therefore gives an unbiased estimate of the treatment effect.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_designIntro_b4')\">4. Mechanics of randomisation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>These two diagrams give different methods to randomise allocation of treatments to experimental units.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_designIntro5')\">5. Replication</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A few static diagrams show that it is impossible to assess differences between treatments if there is only a single replicate but replication estimates unexplained variability, helping us to assess treatment differences.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_designIntro6')\">6. Blocking</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This diagram illustrates the randomisation involved in a randomised block design.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_designIntro7')\">7. Benifits of blocking</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This simulation shows that a randomised block design gives more accurate estimates of treatment effects than a completely randomised design.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
