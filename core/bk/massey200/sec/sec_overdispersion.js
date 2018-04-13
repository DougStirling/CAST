var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Over-dispersion of counts</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('overdispersion1')\">1. Locations of items in space</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Poisson processes can be used for events in time, and also for the location of items in 1- and 2-dimensional continua.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('overdispersion2')\">2. Overdispersion in Poisson distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The assumptions underlying a Poisson distribution are not always satisfied. If the rate of events, λ, varies, the distribution of event counts has a larger variance than would arise in a Poisson distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('overdispersion3')\">3. Generalised negative binomial distribution</a>&nbsp;&nbsp;&nbsp;<span class='note'>Proofs not examined</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>A generalised negative binomial distribution can be used as a model for overdispersion of Poisson counts. Its mean and variance are given.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('overdispersion4')\">4. Overdispersion in binomial distribution</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The binomial distribution assumes that all success/failure trials are independent and have the same probability of success. If these assumptions are violated, the distribution has a larger variance than a binomial distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('overdispersion5')\">5. Beta-binomial distribution</a>&nbsp;&nbsp;&nbsp;<span class='note'>Not examined</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The beta-binomial distribution is presented as a generalisation of the binomial distribution that allows for overdispersion.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
