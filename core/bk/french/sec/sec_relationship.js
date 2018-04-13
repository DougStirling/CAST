var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comprendre les relations</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship1')\">1. Force d'une relation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La principale caractéristique d'intérêt dans un nuage de points est la force de la relation entre les deux variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship2')\">2. Les valeurs aberrantes</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une valeur extrême de l'un ou les deux des variables est une aberration. Une combinaison inhabituelle de valeurs est aussi appelé une valeur aberrante.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship3')\">3. Clusters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si les croix sur un nuage de points séparés en groupes, différents groupes d'individus sont suggérées.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship4')\">4. Dangers de sur-interprétation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>En petits ensembles de données, il peut y avoir une variabilité considérable, de sorte que les modèles devraient être fortement évidente avant qu'ils ne soient signalés.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('relationship5')\">5. Les variables explicatives et la réponse</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une variable peut souvent être considéré comme une variable explicative que soit causalement affecte la variable de réponse, ou est utile pour prédire sa valeur.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
