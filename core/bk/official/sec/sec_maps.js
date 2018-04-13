var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Maps</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('maps0')\">1. Overview</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page is an overview of the section.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('maps1')\">2. Colouring regions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The geographic distribution of a measurement can be displayed using different colours on a map.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('maps2')\">3. Choice of colours</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The choice of colours to represent numerical measurements on a map is important. A continuous graduation involving three contrasting colours or a grouping into classes is usually best.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('maps3')\">4. Adding information with circles</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Shading regions on a map can only represent a single measurement. Drawing a circle on each region can represent both a 'size' measurement with the circle area and another measurement with its colour.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('maps4')\">5. Maps with pie and bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Maps can have other simple bar and pie charts superimposed on each region. Only simple information about each region should be displayed in this way.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('maps5')\">6. Distorted population maps</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In most conventional maps, the areas of the regions are proportional to their land areas. The shapes of the regions can be distorted to make their areas proportional to their populations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('maps6')\">7. Other distorted maps</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is sometimes informative to distort a map to make the areas of regions proportional to other measurements. These measurements must be partitions of a meaningful total so that the combined measurement for two regions would be their total.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
