var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Décisions et le niveau de signification</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('decision1')\">1. Hypothesis tests and decisions</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'> Dans de nombreuses applications, une autre action est prise si l'hypothèse nulle est «acceptée» ou «rejetée». Deux types d'erreurs sont possibles d'une telle décision - accepte l'hypothèse nulle alors qu'elle est fausse, ou rejette quand il est vrai.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('decision2')\">2. Decision rules</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La règle de décision est basée sur un échantillon statistique. Pour les tests sur certains paramètres, les probabilités d'erreurs Type I et Type II peuvent être calculés.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('decision3')\">3. Significance level and p-values</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>De nombreux tests sont effectués avec une probabilité pré-spécifiée d'une erreur de type I - le niveau de signification. L'hypothèse nulle est rejetée si le p-valeur pour le test est inférieur au seuil de signification.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('decision4')\">4. Sample size and power</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La puissance d'un test d'hypothèse est un moins la probabilité d'une erreur de type II. A un niveau de signification fixe, ce qui augmente la taille de l'échantillon permet d'améliorer le pouvoir de l'essai.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
