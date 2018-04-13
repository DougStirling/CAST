var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Tree diagrams</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tree1')\">1. Tree diagrams</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A tree diagram is another device useful for displaying and calculating conditional and joint probabilities. A situation summarised in a table of joint probabilities can be represented in tree diagram form, and vice versa.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('tree2')\">2. More about tree diagrams</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>We can use a tree diagram for any situation that involves a sequence of events.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
