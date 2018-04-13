var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>About this e-book and CAST</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('preface1')\">1. Aim of the module</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The Assessment CAST e-book is a professional development resource for teachers to help them use and interpret student marks.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('preface2')\">2. Full version of CAST</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The Assessment CAST e-book is part of a more extensive resource that teaches introductory statistics concepts. This page provides a link to the full version of CAST.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('preface3')\">3. About the author</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>CAST, including this e-book, Assessment CAST, were written by Doug Stirling from Massey University.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('preface4')\">4. Copyright</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Copyright for CAST is held by Doug Stirling and Massey University.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
