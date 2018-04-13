var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Corr&eacute;lation</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Cette section d&eacute;crit une synth&egrave;se num&eacute;rique de la force de la relation entre deux variables, X et Y.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation_b1')\">1. Units for X and Y</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une description num&eacute;rique de la force d'une relation ne doit pas &ecirc;tre affect&eacute; par changement d'&eacute;chelle des variables.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation2')\">2. Variables sans unités (z-scores)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Standardiser une variable donne z-scores qui ne d&eacute;pendent pas sur les unit&eacute;s de la variable d'origine. (Le coefficient de corr&eacute;lation sera d&eacute;finie en termes de z-scores pour X et Y.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation3')\">3. Le coefficient de corrélation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le coefficient de corr&eacute;lation r&eacute;sume la force de la relation entre X et Y. Il est +1 o&ugrave; les croix nuage sont sur une ligne droite avec une pente positive, -1 quand sur une ligne avec une pente n&eacute;gative et nulle lorsque X et Y sont ind&eacute;pendantes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation4')\">4. Les diagrammes de dispersion et de la valeur de r</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Vous devriez &ecirc;tre capable d'estimer la valeur de r en regardant un nuage de points et d'imaginer un nuage de croix correspondant &agrave; une valeur de r.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation5')\">5. Relations non linéaires</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le coefficient de corr&eacute;lation est seulement une bonne mesure de la force d'une relation, si les points dans un nuage de points sont dispers&eacute;s autour d'une ligne droite, pas une courbe.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('correlation6')\">6. R n'a pas raconter toute l'histoire</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le coefficient de corr&eacute;lation ne peut pas identifier la courbure, les valeurs aberrantes ou des clusters et peut &ecirc;tre trompeuse si ces caract&eacute;ristiques sont pr&eacute;sentes. Un diagramme de dispersion doit toujours &ecirc;tre examin&eacute; aussi.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
