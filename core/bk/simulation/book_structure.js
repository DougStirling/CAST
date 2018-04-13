
addBook('bk/simulation', 'book_splash', "About this CAST Module");

addChapter('bk/simulation', 'ch_preface', "Preface");
addSection('en/aboutCast', 'aboutCast1', "What is CAST?");
addSection('en/aboutCast', 'aboutCast3', "Copyright and licence");
addSection('en/aboutCast', 'aboutCast4', "Acknowledgements");
addSection('en/aboutCast', 'aboutCast5', "About the author");
addSection('en/otherInfo', 'otherInfo1', "Browsers and Java");
addSection('en/otherInfo', 'otherInfo2', "Problems?");

addPart("Applications of Simulation");

addChapter('bk/simulation', 'ch_intro', "Introduction (Tennis)");
addSection('bk/simulation', 'tennis1', "Simulating results");
addSection('bk/simulation', 'tennis2', "Simplifying the simulations");

addChapter('bk/simulation', 'ch_league', "Inference (Soccer League)");
addSection('bk/simulation', 'league1', "Simulation of league");
addSection('bk/simulation', 'league2', "Evenly matched teams?");
addSection('bk/simulation', 'league3', "Finals series");

addChapter('bk/simulation', 'ch_golf', "Numbers (Golf)");
addSection('bk/simulation', 'golf1', "Generating scores");
addSection('bk/simulation', 'golf2', "Handicap scores");
addSection('bk/simulation', 'golf3', "Effectiveness of handicapping");
addSection('bk/simulation', 'golf4', "Better handicapping method");

addChapter('bk/simulation', 'ch_running', "Extremes (Running)");
addSection('bk/simulation', 'running1', "Model for winning time");
addSection('bk/simulation', 'running2', "Expected winning times");
addSection('bk/simulation', 'running3', "Simulated winning times");
addSection('bk/simulation', 'running4', "Change in abilities over time");

addPart("A Little Theory");

addChapter('bk/simulation', 'ch_random', "Generating Random Numbers");
addSection('bk/simulation', 'random1', "Pseudo-random Numbers");
addSection('bk/simulation', 'random2', "Generating Categorical Values");
addSection('bk/simulation', 'random3', "Generating Numerical Values");

addChapter('bk/simulation', 'ch_inference', "Inference from Simulations");
addSection('bk/simulation', 'inference1', "95% CI for P(win)");
addSection('bk/simulation', 'inference2', "Evenly Matched Teams?");
addSection('bk/simulation', 'inference3', "Effect of Finals Series?");

addChapter('bk/simulation', 'ch_orderStats', "Order Statistics");
addSection('bk/simulation', 'orderStats1', "Minimum of a Random Sample");
addSection('bk/simulation', 'orderStats2', "Assumption of Normality");
addSection('bk/simulation', 'orderStats3', "Faster Algorithm for Minimum");
addSection('bk/simulation', 'orderStats4', "Population Distribution and Extremes");

var language = "en";
var logoGif = null;
var homeDir = "bk/simulation";
var versionGif = "images/castSimulation";
var isLecturingVersion = false;
var isModule = true;
var hasSummaries = false;
var hasVideos = false;
var summaryPdfUrl = null;
var castWebServerUrl = "http://castBeta.massey.ac.nz";
var noOfChapters = "8";

var localVideos = true;

var fullTextString = 'Text';
var summaryTextString = 'In brief';
var videoTextString = 'Video';
var appletTextString = 'Text';
fullTabTooltip = 'Text version of page';
summaryTabTooltip = 'Summarised version of page';
videoTabTooltip = 'Version of page with videos';
appletTabTooltip = 'Text version of page with interaction';
var chapterString = 'Chapter';

var versionName = {};
var versions = {};

bookLoaded = true;
