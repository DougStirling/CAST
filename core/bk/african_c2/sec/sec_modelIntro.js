var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Introduction - generalising from data</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>This section gives a brief overview of the ideas of modelling randomness in data and using the models to help interpret numerical and graphical summaries of data.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('modelIntro1')\">1. Data as representatives</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>We often have little interest in the specific individuals from whom data are collected. The data are representative of some wider situation and we want to generalise from the data to describe features of this more general situation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('modelIntro2')\">2. Randomness of data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If data collection was repeated, perhaps from different individuals, the values would be different. All such data sets should give similar but not identical information. Interpretation of a data set should take into account this randomness.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('modelIntro3')\">3. Modelling randomness</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Randomness in data can be explained through random sampling of individuals from a fixed wider population. In some situations, this underlying population has a concrete existence, but this sampling mechanism can be generalised to describe randomness of any data set.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('modelIntro4')\">4. Introduction to the idea of inference</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The questions of interest can usually be phrased in terms of the unknown underlying population. Methods for obtaining information about the population from a sample are called inference.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
