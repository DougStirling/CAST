var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Introduction to estimation</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_estIntro1')\">1. Interest in populations</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>These are examples where an underlying population is of more interest than the specific sample data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_estIntro2')\">2. Interest in parameters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A few examples explain the focus on specific population parameters. The corresponding sample statistics provide estimates.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_estIntro3')\">3. Estimation error</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Simulation generating random samples and sample means. A checkbox allows you to peek at the underlying population distribution and display the estimation error. The empirical distn of the error can be built up.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
