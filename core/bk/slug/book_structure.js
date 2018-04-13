
addBook('bk/slug', 'book_splash', "About this Case Study");

addChapter('bk/slug', 'ch_preface', "Preface");
addSection('en/aboutCast', 'aboutCast1', "What is CAST?");
addSection('en/aboutCast', 'aboutCast3', "Copyright and licence");
addSection('en/aboutCast', 'aboutCast4', "Acknowledgements");
addSection('en/aboutCast', 'aboutCast5', "About the author");
addSection('en/otherInfo', 'otherInfo1', "Browsers and Java");
addSection('en/otherInfo', 'otherInfo2', "Printing");

addChapter('bk/slug', 'ch_intro', "The Slug Data Set");

addChapter('bk/slug', 'ch_linearModel', "Weight vs Length");
addSection('bk/slug', 'linearModel1', "Simple linear model");
addSection('bk/slug', 'linearModel2', "Lowess line");

addChapter('bk/slug', 'ch_cubedModel', "Weight vs Length-cubed");
addSection('bk/slug', 'cubedModel1', "Least squares");
addSection('bk/slug', 'cubedModel2', "Variability of coefficients");
addSection('bk/slug', 'cubedModel3', "Inference");
addSection('bk/slug', 'cubedModel4', "Problem with non-constant variance");

addChapter('bk/slug', 'ch_logModel', "Log(weight) vs Log(length)");
addSection('bk/slug', 'logModel1', "Logarithms (optional)");
addSection('bk/slug', 'logModel2', "Least squares and outlier");
addSection('bk/slug', 'logModel3', "Interpreting model for log data");
addSection('bk/slug', 'logModel4', "Predictions from log data");
addSection('bk/slug', 'logModel5', "Confidence interval for slope");
addSection('bk/slug', 'logModel6', "Testing for same slug shape");
addSection('bk/slug', 'logModel7', "Normal linear model");
addSection('bk/slug', 'logModel8', "Diagnostic residual plots");

var language = "en";
var logoGif = null;
var homeDir = "bk/slug";
var versionGif = "images/castSlug";
var isLecturingVersion = false;
var isModule = true;
var hasSummaries = false;
var hasVideos = false;
var summaryPdfUrl = null;
var castWebServerUrl = "http://castBeta.massey.ac.nz";
var noOfChapters = "5";

var localVideos = true;

var fullTextString = 'Full';
var summaryTextString = 'In brief';
var videoTextString = 'Video';
var appletTextString = 'Full';
fullTabTooltip = 'Full text version of page';
summaryTabTooltip = 'Summarised version of page';
videoTabTooltip = 'Version of page with videos';
appletTabTooltip = 'Full text version of page with interaction';
var chapterString = 'Chapter';

var versionName = {};
var versions = {};

bookLoaded = true;
