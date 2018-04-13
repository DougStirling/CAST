var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.gif' width='31' height='31'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.gif' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Finite populations</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('popSamp_b1')\">1. Census or sample?</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>A sample provides information about a population when it is too difficult or expensive to make measurements from the whole population.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('popSamp2')\">2. Variability in a sample</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>A sample is usually collected to provide information about an underlying population. However sample-to-sample variability must be taken into account when doing this.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('popSamp_b3')\">3. Sampling error</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>When a sample is used to estimate a population characteristic, an error is usually involved. Sampling error is caused by random selection of the sample from the population.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('popSamp_b4')\">4. Sampling error and sample size</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>As the sample size is increased, the sampling error becomes smaller. </dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('popSamp_b5')\">5. Sampling from finite populations</a>&nbsp;&nbsp;&nbsp;<span class='note'>(optional)</span></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>Sampling with replacement from a finite population permits the same value to be selected two or more times. Sampling without replacement ensures that there are no such duplicates.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('popSamp6')\">6. Selecting a random sample</a></dt>\n";
if (!hasSummaries || !showingSummary)
  sectionInnerHtml += "  <dd class='full_text'>Random digits can be selected by rolling a 10-sided die, looking up a table of random digits or using a computer. These random digits can be combined to select a random member of a population. Repeating the process gives a random sample.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
