var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Standard Datenstrukturen</p>\n\n";

sectionInnerHtml += "<div class='section_note'>\n<p><span style='color:red;'>(Click on any heading to display the page.)</span></p> <p>The same toolbox of statistical methods can be applied to data from a wide range of contexts.</p>\n</div>\n\n";
sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures1')\">1. Variables and individuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die meisten Datensätze enthalten eine oder mehrere Messungen an Individuen (auch Beobachtungseinheiten oder Versuchsobjekte)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures2')\">2. Types of variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Variablen lassen sich grob in kategoriale und numerische Variablen einteilen. Es existieren aber auch deutlich genauere Klassifikationen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures3')\">3. Kategoriale Variablen und Gruppen</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Mit einer kategorialen Variable kann eine Menge von Individuen in Gruppen aufgeteilt werden. Analog können Gruppen in einer Datenmatrix als kategoriale Variable dargestellt werden.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures4')\">4. Neue Variablen definieren</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Manchmal ist das Verhältnis (Quotient) oder die Differenz zweier Variablen einfacher zu interpretieren, als die einzelnen Variablen.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures5')\">5. Time-ordered data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>In manchen Datenmatrizen sind die Zeilen nach der Zeit geordnet.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures6')\">6. Multi-level data</a>&nbsp;&nbsp;&nbsp;<span class='note'>(fortgeschritten)</span></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Manchmal sind Informationen sowohl auf Gruppenebene, als auch auf der Ebene der Versuchseinheiten vorhanden. Diese Datensätze nennt man Multi-level Daten. Am einfachsten lassen sich diese Daten in zwei separaten Datenmatrizen speichern.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('structures7')\">7. Von der Datenstruktur zur statistischen Methode</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Die statistische Analyse ist abhängig von der Struktur der Daten, also den Skalenniveaus der Daten im Datensatz. CAST beginnt mit deskriptiven Methoden zur Beschreibung von Daten. Anschließend behandelt CAST inferenzstatistische Methoden, die den Faktor Zufall in den  Daten berücksichtigt.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
