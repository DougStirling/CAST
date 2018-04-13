var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Variation</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Cliquez sur une rubrique pour afficher la page.)</span></p> <p>Lorsque les données sont collectées, toutes les valeurs sont rarement les mêmes. Un rôle important des statistiques est de décrire et d'analyser cette variation.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation1')\">1. Signal et le bruit</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans de nombreuses situations, des informations (signaux) peut être obscurcie par la variation aléatoire (bruit).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation2')\">2. La variabilité naturelle</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque les données sont collectées à partir des «individus», ils varient souvent considérablement.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation3')\">3. Variabilité causée par des expériences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Différences intentionnelles à des conditions expérimentales peuvent également causer des différences systématiques dans les variables. La variabilité naturelle rend plus difficile d'interpréter les résultats expérimentaux.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation4')\">4. La variabilité des données d'enquête</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La variabilité naturelle des individus rend également plus difficile à interpréter l'information à partir d'enquêtes.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation5')\">5. Variation expliquée et inexpliquée</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une certaine variation dans une variable peut être expliqué en termes de d'autres variables enregistrées. Autre variation est le résultat de la variabilité naturelle dans les individus.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('variation6')\">6. Prédire les valeurs futures</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Variation dans un ensemble de données peut nous aider à prédire les valeurs qui pourraient se produire si d'autres données du même genre sont collectées à l'avenir.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
