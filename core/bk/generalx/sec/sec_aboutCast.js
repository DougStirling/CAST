var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>About CAST</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Click on any heading to display the page.)</span></p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('aboutCast1')\">1. What is CAST?</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>CAST consists of a collection of electronic textbooks (e-books). A brief description is given of the main features of CAST.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('aboutCast2')\">2. Structure and navigation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page explains how CAST is structured into chapters, sections and pages in a similar way to a conventional textbook.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('aboutCast3')\">3. Copyright and licence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The public CAST e-books are provided subject to a Creative Commons licence that allows free copying and use, but derivative versions cannot be created. Copyright in CAST is retained by the author.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('aboutCast4')\">4. Acknowledgements</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Many people and organisations have contributed to CAST with ideas, support and funding.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('aboutCast5')\">5. About the author</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page gives a little personal information about the author.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
