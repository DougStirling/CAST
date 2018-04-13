var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comprendre les distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp_b1')\">1. Outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Est-ce que les données contiennent des valeurs aberrantes - les valeurs qui sont anormalement grand ou petit? Les valeurs extrêmes dans une distribution d'obliquité sont souvent confondus avec les valeurs aberrantes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp_b2')\">2. Clusters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Est-ce que les données divisés en groupes distincts - plages de valeurs avec haute densité séparés par gammes à faible densité? Clusters peuvent correspondre à différents groupes d'individus.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp3')\">3. Distribution des valeurs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La distribution donne des informations sur une valeur typique autour de laquelle les données sont réparties (l'emplacement ou le centre de la distribution) et la variabilité des valeurs (la propagation de la distribution).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp_b4')\">4. Extra information about individuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Des renseignements supplémentaires sur les articles à partir de laquelle les mesures ont été faites peuvent nous aider à comprendre la distribution des valeurs dans les données.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp5')\">5. Distinguer les groupes connus</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si nous savons que les valeurs proviennent de 2 ou plusieurs groupes d'individus, tracés de points peuvent être modifiés pour montrer cette information supplémentaire.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp6')\">6. Dangers de la surinterprétation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Il ya un risque de plus-interprétation des tendances dans de petits ensembles de données.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
