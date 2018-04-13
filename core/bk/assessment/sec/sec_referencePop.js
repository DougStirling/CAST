var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Reference populations</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('referencePop1')\">1. National distributions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For some standard tests, a national distribution of marks is available for use as a reference population.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('referencePop2')\">2. Percentiles from national distns</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Individual marks in a class can be assessed against a reference population. Each mark can be translated into a percentile in the reference population.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('referencePop3')\">3. Stanines from national distns</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The reference population can also be used to translate individual marks into stanines.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
