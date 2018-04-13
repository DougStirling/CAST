startExercise("exerciseEstimProg.GenericCiApplet", 500, 450);

addVariation("bmi", "A person's body mass index (BMI) is defined to be body weight (in kg) divided by height (in metres) squared and is a commonly used indicator of obesity. As part of a study of regional variations in obesity, BMI was found from a random sample of n=#?:int(40:80)# adult men in a region.\\nThe mean body mass index (BMI) in the sample was #estimate(20.00:30.00)# with standard error #se(0.40:0.70)#. #?:string[intervalWording](Find a 95% confidence interval for the mean BMI of adult men in the region.*We are about 95% confident that the mean BMI of adult men in the region will be...)#", "intervalWording(0:1)", null, 0);
addVariation("cancerRisk", "A study of the health risks of smoking cigars estimated that the probability of dying from a particular type of cancer in the ten years of the study was #estimate(3.0:7.0)#% higher for cigar smokers than for non-smokers with a standard error of #se(1.0:3.0)#%.\\n#?:string[intervalWording](Find a 95% confidence interval for the extra risk of dying from this type of cancer in ten years that is due to cigar smoking.*We are about 95% confident that the extra risk of dying from this type of cancer in ten years due to cigar smoking is...)#", "intervalWording(0:1)", null, 0);
addVariation("shopClosures", "From a survey of small retailers that were in business in the previous year, it was found that #estimate(4.0:10.0)#% had since shut down with a standard error of #se(1.0:2.0)#%.\\n#?:string[intervalWording](Find a 95% confidence interval for the percentage of all small retailers who have shut down in the previous year.*We are about 95% confident that the proportion of small retailers who have shut down in the previous year will be...)#", "intervalWording(0:1)", null, 0);
addVariation("frictionWeld", "Friction welding is used to join different metals that cannot be easily joined by other means -- a fast-moving component is brought into contact with a stationary one to fuse the materials at the join. In an experiment, several velocities were used for the moving component and the strength of the resulting bond was measured at each.\\nIt is estimated that the mean breaking strength of the weld increases by #estimate(5.0:10.0)# for each 1 ft/sec increase in velocity, an estimate with standard error of #se(0.3:1.0)#.\\n#?:string[intervalWording](Find a 95% confidence interval for the mean increase in breaking strength if velocity is increased by 1 ft/sec.*We are about 95% confident that increasing velocity by 1 ft/sec will increase the mean breaking strength by...)#", "intervalWording(0:1)", null, 0);

//----------------------------------------------

startExercise("exerciseEstimProg.CiMeanApplet", 550, 630);

addVariation("activeIngredient", "A pharmaceutical company routinely tests products to check that the concentration of an active ingredient is within tight limits. The results from one type of analysis vary around the true concentration with standard deviation #sigma#=#popnSd[index](0.0068,0.0068,0.068,0.068)# grams per litre. The stacked dot plot below shows the results of n=#noOfValues(3:12)# repeated analyses of the same product.\\nFind a #ciLevel(:)#% confidence interval for the true concentration of active ingredient in this product.", "index(0:3)#varName(Concentration, gm/litre)#units(gm/litre)#axis[index](0.72 0.76 0.72 0.01*0.40 0.44 0.40 0.01*7.2 7.6 7.2 0.1*5.2 5.6 5.2 0.1)#mean[index](0.742,0.422,7.42,5.42)#sd[index](0.0068,0.0068,0.068,0.068)#maxPlusMinus[index](9.9999,9.9999,9.999,9.999)", null, 700);
addVariation("activeIngredient2", "A pharmaceutical company routinely tests products to check that the concentration of an active ingredient is within tight limits. A new method of analysis is being tried and, although it is known that the results vary between repeat analyses of the same product, the population standard deviation, #sigma#, is unknown. The stacked dot plot below shows the results of n=#noOfValues(3:12)# repeated analyses of the same product.\\nFind a #ciLevel(:)#% confidence interval for the true concentration of active ingredient in this product.", "index(0:3)#varName(Concentration, gm/litre)#units(gm/litre)#axis[index](0.72 0.76 0.72 0.01*0.40 0.44 0.40 0.01*7.2 7.6 7.2 0.1*5.2 5.6 5.2 0.1)#mean[index](0.742,0.422,7.42,5.42)#sd[index](0.0068,0.0068,0.068,0.068)#maxPlusMinus[index](9.9999,9.9999,9.999,9.999)", null, 700);
addVariation("plantSugar", "A laboratory procedure for assessing soluble sugar in plants is such that in the range 100 to 200 milligrams (mg) of glucose per gram of dry weight, repeat measurements vary around the true glucose concentration with standard deviation #sigma#=#popnSd(3.1)# mg/gram dry weight. The stacked dot plot below shows the results of n=#noOfValues(3:12)# repeated analyses of the same plant.\\nFind a #ciLevel(:)#% confidence interval for the true glucose concentration in this plant.", "index(0:1)#varName(Glucose concentration)#units(mg/gm dry weight)#axis[index](133 147 134 2*155 169 156 2)#mean[index](140,162)#sd(3.10)#maxPlusMinus(999.99)", null, 700);
addVariation("plantSugar2", "A laboratory procedure is used to assess soluble sugar in plants but although repeat measurements vary around the true glucose concentration the population standard deviation, #sigma#, is unknown. The stacked dot plot below shows the results of n=#noOfValues(3:12)# repeated analyses of the same plant.\\nFind a #ciLevel(:)#% confidence interval for the true glucose concentration in this plant.", "index(0:1)#varName(Glucose concentration)#units(mg/gm dry weight)#axis[index](133 147 134 2*155 169 156 2)#mean[index](140,162)#sd(3.10)#maxPlusMinus(999.99)", null, 700);
addVariation("appleWeight", "The stacked dot plot below shows the weights of n=#noOfValues(20:40)# apples sampled by a supermarket from a large batch that was delivered by a supplier.\\nFind a #ciLevel(:)#% confidence interval for the mean weight of apples from this supplier.", "varName(Weight, grams)#units(grams)#axis(100 130 100 5)#mean(110:120)#sd(5.00)#maxPlusMinus(999.99)", null, 0);
addVariation("patientHeight", "A researcher measured the heights of n=#noOfValues(5:30)# adult female patients who suffered from a particular disease. The stacked dot plot below summarises their heights.\\nFind a #ciLevel(:)#% confidence interval for the mean height of patients with this disease.", "varName(Height, cm)#units(cm)#axis(150 200 150 10)#mean(170:180)#sd(10.00)#maxPlusMinus(999.99)", null, 0);
addVariation("callTime", "The call centre for a bank samples n=#noOfValues(10:40)# incoming phone calls and records the time taken to answer each. The call times for one day are shown in the diagram below and are used to estimate the mean call duration for that day.\\nFind a #ciLevel(:)#% confidence interval for the mean call time of all such calls.", "varName(Call time, sec)#units(seconds)#axis(0 200 0 50)#mean(80:120)#sd(30.0)#maxPlusMinus(999.9)", null, 660);
addVariation("calories", "The calorie intake was recorded from a random sample of n=#noOfValues(5:15)# adults in an African town.\\nFind a #ciLevel(:)#% confidence interval for the mean calorie intake per person in towns of this kind.", "varName(Calorie intake)#units(calories)#axis(1800 2800 1800 200)#mean(2150:2450)#sd(170)#maxPlusMinus(9999)", null, 0);

//----------------------------------------------

startExercise("exerciseEstimProg.CiWidthInfluencesApplet", 600, 650);
addCoreParam("noOfStatements", "3");
addCoreParam("statementStart0", "A #?:string[ciLevel](90*95*95*99)#% confidence interval for the mean has been calculated from a random sample of n=#?:int[](20,30,40,50)# values. If the confidence level is changed from #?:string[ciLevel](90% to 95%*95% to 99%*95% to 90%*99% to 95%)#, the width of the confidence interval will ...");
addCoreParam("messages0", "If we make our confidence interval #?:string[ciLevel](wider*wider*narrower*narrower)#, it contains #?:string[ciLevel](more*more*fewer*fewer)# values so there is #?:string[ciLevel](more*more*less*less)# chance that it will include the population parameter. We must therefore #?:string[ciLevel](increase*increase*decrease*decrease)# the width of the confidence interval to get a #?:string[ciLevel](higher*higher*lower*lower)# confidence level.");
addCoreParam("statementStart1", "A #?:string[](90%*95%*99%)# confidence interval for the mean has been found from a random sample of n=#?:string[sampleSize](10*20*20*30)# values. If the sample size had been n=#?:string[sampleSize](20*30*10*20)# instead, we would have expected the confidence interval to have been ...");
addCoreParam("messages1", "#?:string[sampleSize](More*More*Less*Less)# data implies #?:string[sampleSize](more*more*less*less)# information about the population parameter so we should be able to estimate it #?:string[sampleSize](more*more*less*less)# accurately. We would therefore expect #?:string[sampleSize](a decrease*a decrease*an increase*an increase)# in the width of the confidence interval.");
addCoreParam("statementStart2", "Random samples of n=#?:int[](20,30,40,50)# values are selected from each of two populations. If the standard deviation in population A is #?:string[spread](greater*larger*less*smaller)# than that in population B, we would expect the #?:string[](90%*95%*99%)# confidence interval for the mean of population A to be ...");
addCoreParam("statementEnd2", "that from population B.");
addCoreParam("messages2", "If the values in population #?:string[spread](A*A*B*B)# are more variable than those in population #?:string[spread](B*B*A*A)#, population #?:string[spread](A*A*B*B)#'s mean will also be more variable and will be a less accurate estimate of the population mean. The confidence interval from population #?:string[spread](A*A*B*B)# would therefore be expected to be wider.");

addVariation("generic", "How is the width of a confidence interval affected by the sample size, confidence level and spread of sample values?\\nUse the pop-up menus to complete the following three statements.", "ciLevel(0:3)#sampleSize(0:3)#spread(0:3)#menuLevel(remain_the_same increase decrease)#menuSampleSize(approximately_the_same_width narrower wider)#menuSpread(approximately_the_same_width_as wider_than narrower_than)", null, 0);

//----------------------------------------------

startExercise("exerciseEstimProg.CiInterpApplet", 500, 550);

addVariation("tomatoWeight", "A plant breeder records the weights of a random sample of n=#?:int[](30,40,50,60)# tomatoes of a particular variety and finds that a 95% confidence interval for the mean weight is from #lowLimit[index](123,146)# to #highLimit[index](137,175)# #units(grams)#.", "index(0:1)#sampleValues(the weights of tomatoes in the sample)#popnValues(the weights of tomatoes of this variety in general)#newValue(the weight of a single new tomato of this variety)#newSample(the weights of a new sample of the same number of tomatoes of this variety)#sampleStat(the mean weight of this sample of tomatoes)#popnParam(the mean weight of all tomatoes of this variety)", null, 0);
addVariation("paymentTime", "An accountant is auditing the books of a large company and decides to sample n=100 invoices for detailed investigation. A 95% confidence interval for the mean time it took to receive payment is from #lowLimit[index](16.3,28.8,25.1)# to #highLimit[index](21.0,31.6,46.6)# #units(days)#.", "index(0:2)#sampleValues(the times to receive payment for the sampled invoices)#popnValues(the times to receive payment for all company invoices)#newValue(the time to receive payment for the next invoice)#newSample(the times to receive payment for the next 100 invoices)#sampleStat(the mean time to receive payment for this sample of invoices)#popnParam(the mean time to receive payment for all company invoices)", null, 0);
addVariation("rainfall", "A climatologist records annual rainfall in a region for n=35 years. Assuming that there is no climate change and that these years give a random sample out of all rainfalls, a 95% confidence interval for the mean annual rainfall in the region is from #lowLimit[index](1005,853,1661)# to #highLimit[index](1024,971,1899)# #units(mm)#.", "index(0:2)#sampleValues(the annual rainfalls in the 35 years for which records were kept)#popnValues(the annual rainfalls in this region in general)#newValue(the annual rainfall in the next year)#newSample(the annual rainfalls in the next 35 years)#sampleStat(the mean rainfall in the 35 years from which the confidence interval was calculated)#popnParam(the mean long-term annual rainfall in this region)", null, 0);
addVariation("bloodPressure", "In a drug trial, n=20 mice were injected with an experimental compound and the increase in their blood pressure after 2 hours was recorded. Assuming that any change in blood pressure was caused by the drug (and that the act of receiving an injection of the same volume of water has no affect on blood pressure), a 95% confidence interval for the mean change in blood pressure caused by the drug is from #lowLimit[index](5.3,-2.6,-1.9)# to #highLimit[index](7.1,8.8,13.2)# #units(mmHg)#.", "index(0:2)#sampleValues(the blood pressure increases for the 20 mice used in the experiment)#popnValues(the increases in blood pressure experienced when this type of mouse is given the compound in general)#newValue(the increase in blood pressure when another mouse is given the same compound)#newSample(the increases in blood pressure if another 20 mice were given the same compound)#sampleStat(the mean increase in blood pressure for the 20 mice in the experiment)#popnParam(the mean increase in mouse blood pressure attributable to this compound)", null, 0);

//----------------------------------------------
