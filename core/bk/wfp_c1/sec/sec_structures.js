var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Standard data structures</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Click on any heading to display the page.)</span></p> 	<p>Most data sets have a fairly simple structure.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures_a1')\">1. Variables and individuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>xxxx</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures_a2')\">2. Types of variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>xxxx</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures_o3')\">3. Categorical variables and groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>xxxx</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures_a4')\">4. Meaningful variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>xxxx</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
