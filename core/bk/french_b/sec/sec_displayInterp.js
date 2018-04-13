var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Comprendre distributions</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp_b1')\">1. Outliers</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Est-ce que les donn&eacute;es contiennent des valeurs aberrantes -- les valeurs qui sont anormalement grande ou petite? Les valeurs extr&ecirc;mes dans une distribution skew sont souvent confondus avec des valeurs aberrantes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp_b2')\">2. Clusters</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Est-ce que les donn&eacute;es divis&eacute;e en groupes distincts - les plages de valeurs &agrave; forte densit&eacute; s&eacute;par&eacute;s par gammes &agrave; faible densit&eacute;? Les clusters peuvent correspondre &agrave; diff&eacute;rents groupes d'individus.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp3')\">3. Distribution des valeurs</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La distribution donne des informations sur un rond valeur typique dont les donn&eacute;es sont r&eacute;parties (emplacement de la distribution ou du centre) et la variabilit&eacute; des valeurs (la propagation de la distribution).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp_b4')\">4. Extra information about individuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Des informations suppl&eacute;mentaires sur les &eacute;l&eacute;ments &agrave; partir de laquelle des mesures ont &eacute;t&eacute; faites peuvent nous aider &agrave; comprendre la distribution des valeurs dans les donn&eacute;es.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp5')\">5. Distinguer les groupes connus</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Si nous savons que les valeurs viennent de deux ou plusieurs groupes d'individus, des parcelles de points peuvent &ecirc;tre modifi&eacute;s pour afficher ces informations suppl&eacute;mentaires.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('displayInterp6')\">6. Dangers de la surinterprétation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Il ya un risque de sur-interpr&eacute;tation des tendances dans les petits ensembles de donn&eacute;es.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
