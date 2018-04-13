var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Other ways to present data</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterGraph3')\">1. Distinguishing groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The crosses on a scatterplot can be coloured to distinguish different groups, or differing symbols can be used.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('scatterGraph4')\">2. Showing size</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Scatterplots are often used when the crosses correspond to different geographical regions. If these differ in size, the crosses can be replaced by circles whose area is proportional to the size ï¿½ e.g. area, population or GDP.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('timeGraph7')\">3. Dynamic scatterplots</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Changes over time can be animated and this is particularly useful for scatterplots. When the crosses represent countries or regions, it is often possible to pick out ones that behave differently from the rest. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('maps4')\">4. Maps with pie and bar charts</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Maps can have other simple bar and pie charts superimposed on each region. Only simple information about each region should be displayed in this way.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('maps5')\">5. Distorted population maps</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In most conventional maps, the areas of the regions are proportional to their land areas. The shapes of the regions can be distorted to make their areas proportional to their populations.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('maps6')\">6. Other distorted maps</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>It is sometimes informative to distort a map to make the areas of regions proportional to other measurements. These measurements must be partitions of a meaningful total so that the combined measurement for two regions would be their total.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
