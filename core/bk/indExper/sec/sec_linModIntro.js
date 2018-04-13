var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Model for response</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('linModIntro1')\">1. Normal model</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The response is usually modelled as the sum of two terms, a term for explained variation that depends on the factor level and a random term with a normal distribution describing unexplained variation.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('linModIntro2')\">2. Categorical factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If the relationship between the response and x is nonlinear, the mean response can be modelled with a quadratic function of x. An even more general model uses a separate parameter for the mean response at each x that is used; it is also appropriate for a categorical explanatory variable.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('linModIntro3')\">3. Numerical factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The simplest model for an experiment with one numerical controlled variable, x, is a linear model in which the mean response is a linear function of x.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('linModIntro4')\">4. Least squares</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>All models involve unknown parameters. The least squares estimates of the parameters minimise the sum of squared residuals.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('linModIntro5')\">5. Numerical factors with 2 or 3 levels</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>If only 2 values of a numerical factor are used in an experiment, a linear model has identical fit to a model that treats the factor as categorical. If 3 values of the factor have been used, a quadratic model is equivalent to a model that treats the factor as categorical.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('linModIntro6')\">6. Coding for factors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Evenly spaced values of a numerical factor can be replaced by any other evenly spaced values, such as 1, 2, ... without changing the fit of the model. A numerical or categorical factor with 2 levels is often modelled as a numerical factor with values -1 and +1.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
