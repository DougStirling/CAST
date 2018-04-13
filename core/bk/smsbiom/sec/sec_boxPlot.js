var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Graphical display - box plots</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Box plots highly summarise the distribution of values in a data set. They are useful for comparing different batches of values.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot1')\">1. The need to summarise</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dot plots and histograms contain detailed information that is distracting when two or more data sets are being compared.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot2')\">2. Median, quartiles and box plot</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The median and quartiles split a batch of values into four equal-sized sets of values. A box plot is a graphical display of the median, quartiles and extremes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot4')\">3. Displaying outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The basic box plot is often modified to display outliers as separate crosses.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot6')\">4. Comparison of groups</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Box plots are particularly effective for displaying differences between several groups of values.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('boxPlot_b7')\">5. Dangers of over-interpretation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Box plots are relatively stable, and contain less 'noise' than other displays. They can concisely describe differences between even small groups.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
