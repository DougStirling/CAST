var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Data presentation principles</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('graphs0')\">1. Overview</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>This page is an overview of the section.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('graphs1')\">2. Types of publication</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Information may be published in executive reports, for archival purposes or in documents for the general public. Publication is increasingly done electronically rather than on paper. Resolution, availability of colour, production cost and ease of formatting are issues that should be considered.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('graphs2')\">3. From data to information</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Reports generally only summarise the most important features of the available data. Identifying the important features is subjective and is similar to extracting the signal from a noisy electronic communication.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('graphs3')\">4. Tables, graphs and text</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Reports should contain a balance of tables, graphs and text. Annotations on graphs can highlight important features.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('graphs4')\">5. Combining simple graphs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Several simple graphs can sometimes be linked together in a single display. They should usually be either drawn on a common time axis or a map.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('graphs5')\">6. Advanced graphs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Most reports only contain simple graphs such as the general-purpose ones described in this chapter. More advanced graphs are needed to effectively display some specific types of data but they are generally too complex for reports intended for the general public.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('graphs6')\">7. Innovative graphics</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Some excellent graphics have been devised to display particular data sets. There is still scope for innovation.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
