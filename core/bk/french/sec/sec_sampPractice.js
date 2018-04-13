var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Échantillonnage dans la pratique</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Dans de nombreuses situations pratiques, il ya de meilleurs plans d'échantillonnage que les échantillons aléatoires simples. Quel que soit le plan d'échantillonnage, les erreurs non dues à l'échantillonnage peut affecter gravement les résultats.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice1')\">1. Stratified sampling</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Plus d'estimations précises peuvent parfois être obtenues en prélevant des échantillons aléatoires distincts au sein de différentes parties de la population.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice2')\">2. Cluster sampling</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque des individus sont regroupés en grappes, il est souvent moins cher d'échantillonner des classes complètes plutôt que des individus distincts.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice3')\">3. Two-stage sampling</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Lorsque la population cible est répartie sur une vaste zone, il peut être moins cher de prendre un échantillon de seulement quelques régions (groupes de personnes), que de goûter de toutes les régions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice4')\">4. Sampling and non-sampling errors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les échantillons sont généralement collectées pour estimer les caractéristiques de la population. La variation ordinaire provoquée par le plan d'échantillonnage est appelé erreur d'échantillonnage. Les difficultés pratiques avec réalisation de l'enquête peuvent causer des estimations biaisées (erreurs non-échantillonnage).</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice5')\">5. Coverage and non-response errors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'erreur de couverture et l'erreur non-réponse empêchent certaines personnes d'être inclus dans l'échantillon.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice6')\">6. Interviewer and instrument errors</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Interviewer erreur et instrument erreur peut entraîner des mesures «incorrect» des individus échantillonnés.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('sampPractice7')\">7. Survey design issues</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les données d'enquête sont recueillis par une variété de mécanismes, à partir de questionnaires envoyés par la poste téléphonique. Chacun a ses propres avantages et inconvénients.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
