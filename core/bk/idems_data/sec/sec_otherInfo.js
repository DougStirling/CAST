var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Other Information</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('otherInfo1')\">1. Browsers and Java</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The browser-based version of CAST makes extensive use of a Java plugin to display dynamic and interactive diagrams. A few browsers still support the Java plugin but many do not. We therefore recommend that you download CAST and start using the stand-alone version of CAST. (You will need to separately install Java support whichever version of CAST you use.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('otherInfo2')\">2. Printing</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If an e-book has been written with summary versions of its pages, the summary pages in any chapter can be printed together.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('otherInfo3')\">3. Recent changes to CAST</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Information about the major changes in different releases of CAST.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
