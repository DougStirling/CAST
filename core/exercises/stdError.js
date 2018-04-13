startExercise("exerciseEstimProg.FindSeApplet", 500, 600);

addVariation("appleWeight", "The stacked dot plot below shows the weights of n=#noOfValues[](16,25,36,49,64,81,100)# apples that were sampled by a supermarket from a large batch that was delivered by a supplier.\\nWhat is the standard error of their mean weight?", "varName(Weight, grams)#units(grams)#axis(100 130 100 5)#mean(110:120)#sd(5)#maxSe(99.9999)", null, 0);
addVariation("heights", "A researcher measured the heights of n=#noOfValues[](16,25,36,49,64,81,100)# adult female patients who suffered from a particular disease. The stacked dot plot below summarises their heights.\\nWhat is the standard error of the mean height of the patients?", "varName(Height, cm)#units(cm)#axis(150 200 150 10)#mean(170:180)#sd(10)#maxSe(99.999)", null, 0);
addVariation("callTimes", "The call centre for a bank samples n=#noOfValues[](16,25,36,49,64,81,100)# incoming phone calls and records the time taken to answer each. The call times for one day are shown in the diagram below and are used to estimate the mean call duration for that day.\\nWhat is the standard error of the mean call time in the sample?", "varName(Call time, sec)#units(seconds)#axis(0 200 0 50)#mean(80:120)#sd(30)#maxSe(99.999)", null, 0);
addVariation("calories", "The calorie intake was recorded from a sample of n=#noOfValues[](16,25,36,49,64,81,100)# adults in an African village.\\nWhat is the standard error of the mean calorie intake per person in the village?", "varName(Calorie intake)#units(calories)#axis(1800 2800 1800 200)#mean(2150:2450)#sd(170)#maxSe(999.99)", null, 0);

//----------------------------------------------

startExercise("exerciseEstimProg.StErrorBoundsApplet", 500, 500);

addVariation("componentLength", "Plastic components are manufactured in a production line. A quality control engineer randomly selects n=100 of the components produced in one day and measures their lengths.\\nThe #?:string[sesd](standard error of their mean length*standard deviation of the sample of lengths)# is #?:string[baseSd](0.03*0.3*3)# #units#.", "sesd(0:1)#statementType(0:2)#baseSd(0:2)#options(0.006 0.06 0.6 6 60)#units[baseSd](cm*mm*mm)#seFactor(10)#statementStart0(The mean length in such a sample of 100 components has approximately 95% probability of being within ...)#statementStart1(Approximately 95% of components produced in the day have lengths that are within ...)#statementStart2(Approximately 95% of the lengths in the sample of components will be within ...)#statementEnd(... of the mean length of all components produced in the day.)", null, 0);
addVariation("mammalWeight", "A biologist traps and weighs a random sample of n=100 mammals of one species from a region.\\nThe #?:string[sesd](standard error of their mean weight*standard deviation of the sample of weights)# is #?:string[baseSd](0.2*2*20)# #units#.", "sesd(0:1)#statementType(0:2)#baseSd(0:2)#options(0.04 0.4 4 40 400)#units[baseSd](kg*kg*grams)#seFactor(10)#statementStart0(The mean weight in such a sample has approximately 95% probability of being within ...)#statementStart1(Approximately 95% of mammals of this species in the region have weights that are within ...)#statementStart2(Approximately 95% of the weights in the sample will be within ...)#statementEnd(... of the mean weight of all such mammals in the region.)", null, 0);
addVariation("rainfall", "The annual rainfall in a region has been recorded in each of the last n=25 years.\\nThe #?:string[sesd](standard error of the mean annual rainfall in these 25 years was calculated to be*standard deviation of the 25 annual rainfalls is)# #?:string[baseSd](2*10*50)# #units#.", "sesd(0:1)#statementType(0:2)#baseSd(0:2)#options(0.8 4 20 100 500)#units[baseSd](cm*mm*mm)#seFactor(5)#statementStart0(The mean annual rainfall in these 25 years has approximately 95% probability of being within ...)#statementStart1(Approximately 95% of future years will have annual rainfall that is within ...)#statementStart2(Approximately 95% of the annual rainfalls in these 25 years will be within ...)#statementEnd(... of the expected annual rainfall in the region, assuming no change in climate.)", null, 0);

//----------------------------------------------

startExercise("exerciseEstimProg.StErrorStatementApplet", 520, 570);
addCoreParam("noOfStatements", "3");
addCoreParam("statementStart0", "As the sample size #?:string[q0_incDec](increases*decreases)#, the #?:string[q0_sesd](standard error of an estimator*standard deviation of the sample)# usually ...");
addCoreParam("options0", "q0_incDec(0:1)#q0_sesd(0:1)#q0_menu(stays about the same*increases*decreases)");
addCoreParam("messages0", "The more data that is collected, the more accurate the estimate and hence the smaller its standard error.*The standard deviation describes the spread of values in the sample and this does not depend on");
addCoreParam("statementStart1", "A random sample is selected from a population and the sample mean is used to estimate the underlying population mean. The #?:string[q1_sesd](standard error of the estimator*standard deviation of the sample)# describes the ...");
addCoreParam("options1", "q1_sesd(0:1)#q1_menu(variability of values in the sample*the sample-to-sample variability of the estimate)");
addCoreParam("statementStart2", "A random sample of n=#?:int[](20,30,40,50)# values is selected from a population; the #?:string[q2_sdFirst](sample standard deviation*standard error of the sample mean)# is ...");
addCoreParam("statementEnd2", "... the #?:string[q2_sdFirst](standard error of the sample mean*sample standard deviation)#.");
addCoreParam("options2", "q2_sdFirst(0:1)#q2_menu(equal to*smaller than*greater than)");

addVariation("generic", "The three boxes below show statements about standard deviations and/or standard errors. Use the pop-up menus to correct any wrong statements.", null, null, 0);

//----------------------------------------------

