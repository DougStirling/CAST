var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Zusammenhang der Randsummen</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p>Man kann falsche Schlüsse ziehen, wenn man nur zwei Variablen allein untersucht. Der Zusammenhang kann durch eine oder mehrere andere Variablen beeinflusst sein.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lurking_b1')\">1. Irref&uuml;hrende Randkorrelation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die Variablen Y und X können positiv korreliert sein. Betrachtet man die Korrelation für die einzelnen Werte einer kategoriellen Variable Z kann der Zusammenhang von X und Y trotzdem gleich 0 oder sogar negativ sein. Z wird in diesem Zusammenhang als versteckte Variable bezeichnet.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lurking_b2')\">2. Irref&uuml;hrende Differenz von Mittelwerten</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Eine versteckte Variable kann auch die Differenzen der Mittelwerte einer Variable Y (für die beiden Studfen einer dichotomen Variable X) verschleiern.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lurking3')\">3. Simpsons Paradox</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Sind X, Y und Z kategoriell, bezeichnet man das Phänomen, wenn der Randzusammenhang und der bedingte Zusammenhang unter Berücksichtigung von Z entgegengesetzt sind, als Simpson Paradox.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('lurking4')\">4. Weitere Beispiele f&uuml;r versteckte Variablen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Weitere Beispiele mit einer versteckten Variable Z, welche einen falschen Schluss auf den Zusammenhang zweier Variablen beweirkt. Eine Analyse die Z berücksichtigt ist zwar aufwändiger, jedoch ist die Berücksichtigung von Z nötig, um den Zusammenhang zu verstehen.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
