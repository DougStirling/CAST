var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Covariates</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('covariates1')\">1. Variability in experimental units</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The more variability in the experimental units that is explained by the model used, the greater the accuracy of estimating the effects of the factors of interest.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('covariates_b2')\">2. Effect of unmodelled covariate</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Randomisation ensures that the effects of factors are always estimated without bias. However variation between the units getting different treatments can result in very variable estimates if the variation in the experimental units is not modelled.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('covariates_b3')\">3. Model for numerical covariate</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Numerical measurements describing variability in the experimental units can be modelled with linear terms in the model.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('covariates_b4')\">4. Inference with covariates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>There is usually no interest in testing the significance of covariates. Inference about the model terms relating to the factors of interest can be done with confidence intervals and analysis of variance as usual.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('covariates_b5')\">5. Blocks and covariates</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Experimental units can be grouped into blocks and also have covariates. Blocks and covariates should be included in the model before testing the effects of the factors of interest.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('covariates6')\">6. Categorical covariates (cofactors)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Categorical covariates are modelled in exactly the same way as blocks. Models can contain several terms explaining different aspects of the variability in the experimental units.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('covariates7')\">7. Recovery from bad design</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>'Bad' allocation of treatments to experimental units can sometimes be saved if covariates are recorded and used to reduce unexplained variation.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
