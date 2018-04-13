var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Conditional probability</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probCondit1')\">1. Conditional probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Partial knowledge about a random experiment can be described with conditional probabilities.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probCondit2')\">2. Graphical display of probabilities</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Marginal and conditional probabilities can be displayed graphically in a Venn diagram whose areas are proportional to probability.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probCondit3')\">3. Partitions of the sample space</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A set of events that are mutually exclusive and cover the complete sample space is called a partition of the sample space.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probCondit4')\">4. Tree diagrams</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A tree diagram describes probabilities for events that happen in sequence.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probCondit5')\">5. More about tree diagrams</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>An example shows a tree diagram for a longer sequences of events.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probCondit6')\">6. Independence</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If knowledge about whether one event has happened does not affect the probability of another event, the two events are called independent.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probCondit7')\">7. Law of total probability</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If {B₁, B₂, ..., } is a partition of the sample space, the probability of another event A is the sum of the probabilities that it occurs with the various B.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('probCondit8')\">8. Bayes theorem</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The conditional probability of an event A, given B, P(A | B) can be found from P(A), P(B | A) and P(B | not A).</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
