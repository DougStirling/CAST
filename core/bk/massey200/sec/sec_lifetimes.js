var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Lifetimes</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lifetimes1')\">1. Survivor and hazard functions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If X is the lifetime of an item, its survivor function is S(x) = P(X &gt; x). Its hazard function, h(x), describes the momentary risk of dying, conditional on having survived until time x.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lifetimes2')\">2. Relationship to Poisson process</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If an item's lifetime corresponds to the first event in a homogeneous Poisson process, its lifetime distribution is exponential and its hazard rate is constant.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
