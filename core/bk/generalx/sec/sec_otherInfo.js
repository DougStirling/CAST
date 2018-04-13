var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Other Information</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('otherInfo1')\">1. Browsers and Java</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Recent versions of the major browsers support CAST, but you may need to separately install Java support on Windows PCs.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('otherInfo2')\">2. Problems?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If we discover problems with using CAST in particular browsers, we will provide information here.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('otherInfo3')\">3. Printing</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Tables of contents for all versions of CAST have been provided as files that can be displayed and printed with Microsoft Word or many other word processors.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('otherInfo4')\">4. Recent changes to CAST</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Information about the major changes in different releases of CAST.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('otherInfo5')\">5. Possible future developments</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Some plans for future developments to CAST.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
