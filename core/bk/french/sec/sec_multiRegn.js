var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Régression multiple</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn1')\">1. More than one explanatory variable</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Dans de nombreux ensembles de données, deux ou plusieurs variables explicatives pourraient potentiellement affecter la réponse. L'utilisation de deux ou plusieurs variables explicatives peuvent donner des prévisions plus précises.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn2')\">2. Multiple regression equation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Un modèle linéaire simple avec une seule variable explicative peut être étendue avec des termes supplémentaires pour expliquer l'effet supplémentaire d'autres variables explicatives.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn3')\">3. Interpreting coefficients</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Le coefficient de pente associée à une variable explicative décrit son effet, si toutes les autres variables sont maintenues constantes. Elle peut avoir un signe différent du coefficient de corrélation entre la variable et la réponse.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn4')\">4. Scatterplot of three variables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>La relation entre une variable de réponse et deux variables explicatives peut être effectivement affiché dans un diagramme de dispersion rotatif en 3 dimensions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn5')\">5. Displayng the linear equation for Y vs X and Z</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>L'équation d'un modèle linéaire Y en fonction de X et Z peut être affichée comme un plan en 3 dimensions.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn6')\">6. Fitted values and residuals</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Les résidus sont des distances verticales des croix sur un nuage de points en 3 dimensions au plan représentant le modèle.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('multiRegn7')\">7. Least squares estimation</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Une méthode d'estimation objectif est de minimiser la somme des carrés des résidus - le principe des moindres carrés.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
