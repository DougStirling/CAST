startExercise("exerciseSDProg.GuessSDNormalApplet", 500, 550);

addVariation("plantHeight", "The heights of a particular kind of flowering plant have the normal distribution shown below.\\nThis distribution has mean #mu# = #mean(:)# cm. Guess the standard deviation of the heights, #sigma#.", "varName(Height, cm)#axis[](2 18 2 2*20 30 20 2*5 6 5.0 0.1)#jointMeanSD(0.5:2)", null, 0);
addVariation("rainfall", "The annual rainfall in an African town has a normal distribution with mean #mu# = #mean(:)# mm.\\nThe pdf of the distribution is shown below. Guess its standard deviation, #sigma#.", "varName(Annual rainfall, mm)#axis[](0 400 0 50*500 1600 600 200*0 1200 0 200*1000 1500 1000 100)#jointMeanSD(0.5:0)", null, 0);
addVariation("foodExpenditure", "Weekly household expenditure on food in a country has a distribution that is approximately normal with the shape shown below.\\nThe mean expenditure is #mu# = $#mean(:)#. Guess its standard deviation, #sigma#.", "varName(Household expenditure on food, $)#axis[](100 200 100 20*50 200 60 20*200 250 200 10)#jointMeanSD(0.5:0)", null, 0);

//----------------------------------------------

startExercise("exerciseSDProg.SketchNormalDistnApplet", 500, 550);

addVariation("rainfall", "Annual rainfall in an African town is approximately normally distributed with mean #mu# = #mean(:)# mm and standard deviation #sigma# = #sd(:)# mm.\\nSketch this normal distribution.", "correctAxis(0:3)#varName(Annual rainfall)#allAxes(0_400_0_50 500_1600_600_200 0_1200_0_200 1000_1500_1000_100)#allAxisNames(0_to_400 500_to_1600 0_to_1200 1000_to_1500)#jointMeanSD(0.5:-1)", null, 0);
addVariation("temperature", "The maximum daily temperature in an Asian city during March is approximately normal with mean #mu# = #mean(:)##degrees#C and standard deviation #sigma# = #sd(:)##degrees#C.\\nSketch this normal distribution.", "correctAxis(0:4)#varName(Maximum daily temperature)#allAxes(22_30_22_1 26_30_26_1 20_24_20_1 15_25_15_1 10_20_10_1)#allAxisNames(22_to_30 26_to_30 20_to_24 15_to_25 10_to_20)#jointMeanSD(0.5:1)", null, 0);
addVariation("windRun", "The monthly wind run in a New Zealand city in October is approximately normal with mean #mu# = #mean(:)# km and standard deviation #sigma# = #sd(:)# km.\\nSketch this normal distribution.", "correctAxis(0:3)#varName(Monthly wind run, km)#allAxes(200_300_200_20 150_200_150_10 250_350_260_20 100_300_100_50)#allAxisNames(200_to_300 150_to_200 250_to_350 100_to_300)#jointMeanSD(0.5:1)", null, 0);

//----------------------------------------------

startExercise("exerciseNormalProg.NormalProbApplet", 500, 680);

addVariation("temperatureProb", "The maximum daily temperature in a city in January is approximately normally distributed with mean #mu# = #mean[index](10,15,20,25)##degrees#C and standard deviation #sigma# = #sd[](3,4,5)##degrees#C.\\nWhat is the probability that the maximum temperature will be #cut-offs(-3:3:1)##degrees#C in one day?", "index(0:3)#questionType(0)#count()#intervalType(0:3)#varName(maximum temperature in day)#maxValue(99.999)#axis[index](-5 25 -5 5*0 30 0 5*5 35 5 5*10 40 10 5)", null, 0);
addVariation("seedWeightProb", "The weight of the seeds of one species of tree has a normal distribution with mean #mu# = #mean[index](18,19,20,21)# grams and standard deviation #sigma# = #sd[](1,1.5,2)# grams.\\nWhat is the probability that one seed from this type of tree has weight #cut-offs(-3:3:1)# grams?", "index(0:3)#questionType(0)#count()#intervalType(0:3)#varName(seed weight)#maxValue(99.999)#axis[index](12 24 12 2*13 25 14 2*14 26 14 2*15 27 16 2)", null, 0);
addVariation("temperatureExpected", "The maximum daily temperature in a city in January is approximately normally distributed with mean #mu# = #mean[index](10,15,20,25)##degrees#C and standard deviation #sigma# = #sd[](3,4,5)##degrees#C.\\nIn how many days out of #count[](5,10,15,20,25,30)# would you expect the maximum temperature to be #cut-offs(-3:3:1)##degrees#C?", "index(0:3)#questionType(1)#intervalType(0:2)#varName(maximum temperature in day)#maxValue(99.999)#axis[index](-5 25 -5 5*0 30 0 5*5 35 5 5*10 40 10 5)", null, 0);
addVariation("seedWeightExpected", "The weight of the seeds of one species of tree has a normal distribution with mean #mu# = #mean[index](18,19,20,21)# grams and standard deviation #sigma# = #sd[](1,1.5,2)# grams.\\nIn a sample of #count[](5,10,15,20,25,30)# seeds, how many would you expect to have weight #cut-offs(-3:3:1)# grams?", "index(0:3)#questionType(1)#intervalType(0:3)#varName(seed weight)#maxValue(99.999)#axis[index](12 24 12 2*13 25 14 2*14 26 14 2*15 27 16 2)", null, 0);

//----------------------------------------------

startExercise("exerciseNormalProg.NormalProbExternalApplet", 500, 600);

addVariation("temperatureProb", "The maximum daily temperature in a city in January is approximately normally distributed with mean #mu# = #mean[index](10,15,20,25)##degrees#C and standard deviation #sigma# = #sd[](3,4,5)##degrees#C.\\nUse a statistics program to find the probability that the maximum temperature will be #cut-offs(-3:3:1)##degrees#C in one day (accurate to #requiredDecimals(4)# decimals).", "index(0:3)#questionType(0)#count()#intervalType(0:3)#varName(maximum temperature in day)#maxValue(99.999)#axis[index](-5 25 -5 5*0 30 0 5*5 35 5 5*10 40 10 5)", null, 0);
addVariation("seedWeightProb", "The weight of the seeds of one species of tree has a normal distribution with mean #mu# = #mean[index](18,19,20,21)# grams and standard deviation #sigma# = #sd[](1,1.5,2)# grams.\\nUse a statistics program to find the probability that one seed from this type of tree has weight #cut-offs(-3:3:1)# grams (accurate to #requiredDecimals(4)# decimals).", "index(0:3)#questionType(0)#count()#intervalType(0:3)#varName(seed weight)#maxValue(99.999)#axis[index](12 24 12 2*13 25 14 2*14 26 14 2*15 27 16 2)", null, 0);
addVariation("temperatureExpected", "The maximum daily temperature in a city in January is approximately normally distributed with mean #mu# = #mean[index](10,15,20,25)##degrees#C and standard deviation #sigma# = #sd[](3,4,5)##degrees#C.\\nUse a statistics program to find how many days out of #count[](5,10,15,20,25,30)# you would expect the maximum temperature to be #cut-offs(-3:3:1)##degrees#C, accurate to #requiredDecimals(3)# decimals.", "index(0:3)#questionType(1)#intervalType(0:2)#varName(maximum temperature in day)#maxValue(99.999)#axis[index](-5 25 -5 5*0 30 0 5*5 35 5 5*10 40 10 5)", null, 0);
addVariation("seedWeightExpected", "The weight of the seeds of one species of tree has a normal distribution with mean #mu# = #mean[index](18,19,20,21)# grams and standard deviation #sigma# = #sd[](1,1.5,2)# grams.\\nIn a sample of #count[](5,10,15,20,25,30)# seeds, how many would you expect to have weight #cut-offs(-3:3:1)# grams? (Use a statistics program to find this, exact to #requiredDecimals(3)# decimals.)", "index(0:3)#questionType(1)#intervalType(0:3)#varName(seed weight)#maxValue(99.999)#axis[index](12 24 12 2*13 25 14 2*14 26 14 2*15 27 16 2)", null, 0);

//----------------------------------------------

startExercise("exerciseNormalProg.NormalZProbApplet", 500, 700);

addVariation("temperatureProb", "The maximum daily temperature in a city in January is approximately normally distributed with mean #mu# = #mean[index](10,15,20,25)##degrees#C and standard deviation #sigma# = #sd[](3,4,5)##degrees#C.\\nWhat is the probability that the maximum temperature will be #cut-offs(-3:3:1)##degrees#C in one day?", "index(0:3)#questionType(0)#count()#intervalType(0:2)", null, 0);
addVariation("insectWeightProb", "The weight of a species of insect has a normal distribution with mean #mu# = #mean[index](18,19,20,21)# grams and standard deviation #sigma# = #sd[](1,1.5,2)# grams.\\nWhat is the probability that one insect has weight #cut-offs(-3:3:1)# grams?", "index(0:3)#questionType(0)#count()#intervalType(0:2)", null, 0);
addVariation("temperatureExpected", "The maximum daily temperature in a city in January is approximately normally distributed with mean #mu# = #mean[index](10,15,20,25)##degrees#C and standard deviation #sigma# = #sd[](3,4,5)##degrees#C.\\nIn how many days out of #count[](5,10,15,20,25,30)# would you expect the maximum temperature to be #cut-offs(-3:3:1)##degrees#C?", "index(0:3)#questionType(1)#intervalType(0:2)", null, 0);
addVariation("insectWeightExpected", "The weight of a type of insect has a normal distribution with mean #mu# = #mean[index](18,19,20,21)# grams and standard deviation #sigma# = #sd[](1,1.5,2)# grams.\\nHow many insects out of #count[](20,50,100,400)# would you expect would you expect to weigh #cut-offs(-3:3:1)# grams?", "index(0:3)#questionType(1)#intervalType(0:2)", null, 0);

//----------------------------------------------

startExercise("exerciseNormalProg.NormalTableProbApplet", 550, 700);

addVariation("temperatureProb", "The maximum daily temperature in a city in January is approximately normally distributed with mean #mu# = #mean[index](10,15,20,25)##degrees#C and standard deviation #sigma# = #sd[](3,4,5)##degrees#C.\\nWhat is the probability that the maximum temperature will be #cut-offs(-3:3:1)##degrees#C in one day?", "index(0:3)#questionType(0)#count()#intervalType(0:3)", null, 0);
addVariation("insectWeightProb", "The weight of a species of insect has a normal distribution with mean #mu# = #mean[index](18,19,20,21)# grams and standard deviation #sigma# = #sd[](1,1.5,2)# grams.\\nWhat is the probability that one insect has weight #cut-offs(-3:3:1)# grams?", "index(0:3)#questionType(0)#count()#intervalType(0:3)", null, 0);
addVariation("temperatureExpected", "The maximum daily temperature in a city in January is approximately normally distributed with mean #mu# = #mean[index](10,15,20,25)##degrees#C and standard deviation #sigma# = #sd[](3,4,5)##degrees#C.\\nIn how many days out of #count[](5,10,15,20,25,30)# would you expect the maximum temperature to be #cut-offs(-3:3:1)##degrees#C?", "index(0:3)#questionType(1)#intervalType(0:3)", null, 0);
addVariation("insectWeightExpected", "The weight of a type of insect has a normal distribution with mean #mu# = #mean[index](18,19,20,21)# grams and standard deviation #sigma# = #sd[](1,1.5,2)# grams.\\nHow many insects out of #count[](20,50,100,400)# would you expect would you expect to weigh #cut-offs(-3:3:1)# grams?", "index(0:3)#questionType(1)#intervalType(0:3)", null, 0);

//----------------------------------------------

startExercise("exerciseNormalProg.NormalInverseApplet", 500, 550);

addVariation("temperature", "The maximum daily temperature in a city in January is approximately normally distributed with mean #mu# = #mean[index](10,15,20,25)##degrees#C and standard deviation #sigma# = #sd[](3,4,5)##degrees#C.\\nWhat is the daily maximum temperature that will not be reached in #percent(5:50)#% of days?", "index(0:3)#intervalType(0)#varName(maximum temperature in day)#maxValue(99.999)#axis[index](-5 25 -5 5*0 30 0 5*5 35 5 5*10 40 10 5)", null, 0);
addVariation("temperature2", "The maximum daily temperature in a city in January is approximately normally distributed with mean #mu# = #mean[index](10,15,20,25)##degrees#C and standard deviation #sigma# = #sd[](3,4,5)##degrees#C.\\nWhat is the daily maximum temperature that will be exceeded in #percent(5:50)#% of days?", "index(0:3)#intervalType(1)#varName(maximum temperature in day)#maxValue(99.999)#axis[index](-5 25 -5 5*0 30 0 5*5 35 5 5*10 40 10 5)", null, 0);

//----------------------------------------------

startExercise("exerciseNormalProg.NormalInverseExternalApplet", 500, 550);

addVariation("temperature", "The maximum daily temperature in a city in January is approximately normally distributed with mean #mu# = #mean[index](10,15,20,25)##degrees#C and standard deviation #sigma# = #sd[](3,4,5)##degrees#C.\\nFind the daily maximum temperature that will not be reached in #percent(5:50)#% of days, accurate to #requiredDecimals(3)# decimals.", "index(0:3)#intervalType(0)#varName(maximum temperature in day)#maxValue(99.999)#axis[index](-5 25 -5 5*0 30 0 5*5 35 5 5*10 40 10 5)", null, 0);
addVariation("temperature2", "The maximum daily temperature in a city in January is approximately normally distributed with mean #mu# = #mean[index](10,15,20,25)##degrees#C and standard deviation #sigma# = #sd[](3,4,5)##degrees#C.\\nFind the daily maximum temperature that will be exceeded in #percent(5:50)#% of days, accurate to #requiredDecimals(3)# decimals.", "index(0:3)#intervalType(1)#varName(maximum temperature in day)#maxValue(99.999)#axis[index](-5 25 -5 5*0 30 0 5*5 35 5 5*10 40 10 5)", null, 0);

//----------------------------------------------

startExercise("exerciseNormalProg.NormalInverseZApplet", 500, 550);

addVariation("temperature", "The maximum daily temperature in a city in January is approximately normally distributed with mean #mu# = #mean[index](10,15,20,25)##degrees#C and standard deviation #sigma# = #sd[](3,4,5)##degrees#C.\\nWhat is the daily maximum temperature that will not be reached in #percent(5:50)#% of days?", "index(0:3)#intervalType(0)#varName(maximum temperature in day)#maxValue(99.99)", null, 0);
addVariation("temperature2", "The maximum daily temperature in a city in January is approximately normally distributed with mean #mu# = #mean[index](10,15,20,25)##degrees#C and standard deviation #sigma# = #sd[](3,4,5)##degrees#C.\\nWhat is the daily maximum temperature that will be exceeded in #percent(5:50)#% of days?", "index(0:3)#intervalType(1)#varName(maximum temperature in day)#maxValue(99.99)", null, 0);

//----------------------------------------------

startExercise("exerciseNormalProg.NormalInverseTableApplet", 550, 600);

addVariation("temperature", "The maximum daily temperature in a city in January is approximately normally distributed with mean #mu# = #mean[index](10,15,20,25)##degrees#C and standard deviation #sigma# = #sd[](3,4,5)##degrees#C.\\nWhat is the daily maximum temperature that will not be reached in #percent(5:50)#% of days?", "index(0:3)#intervalType(0)#varName(maximum temperature in day)#maxValue(99.99)", null, 0);
addVariation("temperature2", "The maximum daily temperature in a city in January is approximately normally distributed with mean #mu# = #mean[index](10,15,20,25)##degrees#C and standard deviation #sigma# = #sd[](3,4,5)##degrees#C.\\nWhat is the daily maximum temperature that will be exceeded in #percent(5:50)#% of days?", "index(0:3)#intervalType(1)#varName(maximum temperature in day)#maxValue(99.99)", null, 0);

//----------------------------------------------

startExercise("exerciseNormalProg.NormalMixedApplet", 500, 750);

addVariation("potatoesUnderweight", "Bags of potatoes sold by a supermarket have weights that are normally distributed with mean #mu# = #mean[index](1.05,1.1,1.15,1.2)# kg and standard deviation #sigma# = #sd[](0.02,0.04,0.08)# kg.\\n", "index(0:3)#intervalType(4)#varName(weight)#maxValue(9.999)", "questionType(0)#The bags are labeled with weight #cut-offs(-3:-1:2)# kg. What is the probability that an individual bag will be underweight?|||questionType(1)#If bags are labeled with weight #cut-offs(-2:-1:2)# kg, how many bags a sample of #count[](50,100,400)# would you expect to be underweight?|||questionType(2)#What weight should be printed on the bag labels so that only #percent(2:10)#% of bags will be underweight?", 0);
addVariation("potatoesOverweight", "Bags of potatoes sold by a supermarket have weights that are normally distributed with mean #mu# = #mean[index](1.05,1.1,1.15,1.2)# kg and standard deviation #sigma# = #sd[](0.02,0.04,0.08)# kg.\\n", "index(0:3)#intervalType(5)#varName(weight)#maxValue(9.999)", "questionType(0)#The bags are labeled with weight #cut-offs(-3:-1:2)# kg. What is the probability that an individual bag will contain at least this weight of potatoes?|||questionType(1)#If bags are labeled with weight #cut-offs(-2:-1:2)# kg, how many bags a sample of #count[](50,100,400)# are expected to contain at least this weight of potatoes?|||questionType(2)#What weight should be printed on the bag labels so that #percent(90:98)#% of bags will contain at least this weight of potatoes?", 0);
addVariation("insectWeight", "The weight of a species of insect has a normal distribution with mean #mu# = #mean[index](18,19,20,21)# grams and standard deviation #sigma# = #sd[](1,1.5,2)# grams.\\n", "index(0:3)#intervalType(0:1)#varName(weight)", "questionType(0)#What is the probability that an insect will weight #cut-offs(-3:3:1)# grams?|||questionType(1)#How many insects in a sample of #count[](20,50,100,400)# would you expect to weigh #cut-offs(-3:3:1)# grams?|||questionType(2)#percent(10:90)#% of insects will have weights #?:string[intervalType](less than*greater than)# how many grams?", 0);
addVariation("studentPass", "Student marks in a course are approximately normally distributed with mean #mu# = #mean[index](45,50,55,60)# and standard deviation #sigma# = #sd[](5,8,12)#.\\n", "index(0:3)#intervalType(5)#varName(mark)#maxValue(99.9)", "questionType(0)#If the pass mark for the course is set at #cut-offs(-2:0:0)#, what proportion of students is expected to pass the course?|||questionType(1)#How many students in a class of #count[](20,50,100,400)# would you expect would you expect to get marks above #cut-offs(-3:3:1)#?|||questionType(2)#What mark will be exceeded by #percent(10:90)#% of students?", 0);
addVariation("studentFail", "Student marks in a course are approximately normally distributed with mean #mu# = #mean[index](45,50,55,60)# and standard deviation #sigma# = #sd[](5,8,12)#.\\n", "index(0:3)#intervalType(4)#varName(mark)#maxValue(99.9)", "questionType(0)#If the pass mark for the course is set at #cut-offs(-2:0:0)#, what proportion of students is expected to fail the course?|||questionType(1)#How many students in a class of #count[](20,50,100,400)# would you expect would you expect to get marks below #cut-offs(-3:3:1)#?|||questionType(2)#How should the pass mark be set so that only #percent(4:15)#% of students fail?", 0);

//----------------------------------------------

startExercise("exerciseNormalProg.GuessNormalProbApplet", 500, 500);

addVariation("studentMarks", "Student marks in a course are approximately normally distributed with mean #mu# = #mean(:)# and standard deviation #sigma# = #sd(:)#.\\nWhat is the probability of a mark #interval(:)#?", "index(0)#varName(Mark)#axis(30 90 30 10)#jointMeanSD(0.5:0:2.8)#interType(0:19)", null, 0);
addVariation("insectWeight", "The weight of a species of insect has a normal distribution with mean #mu# = #mean(:)# grams and standard deviation #sigma# = #sd(:)# grams.\\nWhat is the probability that a single insect's weight is #interval# grams?", "index(0)#varName(Insect weight)#axis(5 8 5 0.5)#jointMeanSD(0.5:1:2.8)#interType(0:19)", null, 0);

//----------------------------------------------

