startExercise("exerciseSDProg.ScaledCumulativeApplet", 500, 600);

addVariation("tempC", "The stacked dot plot below shows temperatures in a city on 21 March on each of #count[](20,50,100)# years in degrees Celsius.\\nIn what proportion of years is the temperature below #cutoff(60:75)# degrees Fahrenheit?", "axis(10 30 10 2)#varName(Temperature)#shortVarName(temp)#xUnits(degreesC)#yUnits(degreesF)#direction(0)#decimals(3)#maxResult(999.99)#intercept(32)#slope(1.8)", null, 0);
addVariation("tempF", "The stacked dot plot below shows temperatures in a city on 21 March on each of #count[](20,50,100)# years in degrees Fahrenheit.\\nIn what proportion of years is the temperature below #cutoff(15:25)# degrees Celsius?", "axis(40 80 40 5)#varName(Temperature)#shortVarName(temp)#xUnits(degreesC)#yUnits(degreesF)#direction(1)#decimals(3)#maxResult(999.99)#intercept(32)#slope(1.8)", null, 0);
addVariation("weightKg", "#count[](20,50,100)# two-year-old sheep were weighed and the distribution of their weights in kilograms is shown below.\\nWhat proportion of the sheep are lighter than #cutoff(80:120)# pounds (lb)?", "axis(25 70 25 5)#varName(Weight)#shortVarName(wt)#xUnits(kg)#yUnits(lb)#direction(0)#decimals(3)#maxResult(999.99)#intercept(0)#slope(2.20)", null, 0);
addVariation("weightLb", "#count[](20,50,100)# two-year-old sheep were weighed and the distribution of their weights in pounds (lb) is shown below.\\nWhat proportion of the sheep are lighter than #cutoff(35:55)# kilograms?", "axis(50 150 50 10)#varName(Weight)#shortVarName(wt)#xUnits(kg)#yUnits(lb)#direction(1)#decimals(3)#maxResult(999.99)#intercept(0)#slope(2.20)", null, 0);

//----------------------------------------------

startExercise("exerciseSDProg.ScaledMeanSdApplet", 600, 650);

addVariation("tempC", "The stacked dot plot below shows temperatures in a city on 21 March on each of #count[](20,40,60,80)# years in degrees Celsius.\\nWhat are the mean and standard deviation of the temperatures in degrees Fahrenheit?", "axis(10 30 10 2)#varName(Temperature)#shortVarName(temp)#xUnits(degreesC)#yUnits(degreesF)#direction(0)#decimals(2)#maxResult(999.9)#intercept(32)#slope(1.8)", null, 0);
addVariation("tempF", "The stacked dot plot below shows temperatures in a city on 21 March on each of #count[](20,40,60,80)# years in degrees Fahrenheit.\\nWhat are the mean and standard deviation of the temperatures in degrees Celsius?", "axis(40 80 40 5)#varName(Temperature)#shortVarName(temp)#xUnits(degreesC)#yUnits(degreesF)#direction(1)#decimals(2)#maxResult(999.9)#intercept(32)#slope(1.8)", null, 0);
addVariation("weightKg", "#count[](20,40,60,80)# two-year-old sheep were weighed and their weights are shown below in kilograms.\\nWhat are the mean and standard deviation of the weights in pounds (lb)?", "axis(25 70 25 5)#varName(Weight)#shortVarName(wt)#xUnits(kg)#yUnits(lb)#direction(0)#decimals(2)#maxResult(999.9)#intercept(0)#slope(2.20)", null, 0);
addVariation("weightLb", "#count[](20,40,60,80)# two-year-old sheep were weighed and their weights are shown below in pounds (lb).\\nWhat are the mean and standard deviation of the weights in kilograms?", "axis(50 150 50 10)#varName(Weight)#shortVarName(wt)#xUnits(kg)#yUnits(lb)#direction(1)#decimals(1)#maxResult(999.9)#intercept(0)#slope(2.20)", null, 0);

//----------------------------------------------

startExercise("exerciseSDProg.ScaledMeanSdExternalApplet", 500, 550);

addVariation("tempC", "The stacked dot plot below shows temperatures in a city on 21 March on each of #count[](20,40,60,80)# years in degrees Celsius.\\nWhat are the mean and standard deviation of the temperatures in degrees Fahrenheit (correct to 2 decimals)?", "axis(10 30 10 2)#varName(Temperature)#shortVarName(temp)#xUnits(degreesC)#yUnits(degreesF)#direction(0)#decimals(2)#maxResult(999.99)#intercept(32)#slope(1.8)#dataName(City temperature)", null, 0);
addVariation("tempF", "The stacked dot plot below shows temperatures in a city on 21 March on each of #count[](20,40,60,80)# years in degrees Fahrenheit.\\nWhat are the mean and standard deviation of the temperatures in degrees Celsius (correct to 2 decimals)?", "axis(40 80 40 5)#varName(Temperature)#shortVarName(temp)#xUnits(degreesC)#yUnits(degreesF)#direction(1)#decimals(2)#maxResult(999.99)#intercept(32)#slope(1.8)#dataName(City temperature)", null, 0);
addVariation("weightKg", "#count[](20,40,60,80)# two-year-old sheep were weighed and their weights are shown below in kilograms.\\nWhat are the mean and standard deviation of the weights in pounds (lb) (correct to 2 decimals)?", "axis(25 70 25 5)#varName(Weight)#shortVarName(wt)#xUnits(kg)#yUnits(lb)#direction(0)#decimals(2)#maxResult(999.99)#intercept(0)#slope(2.20)#dataName(Sheep weight)", null, 0);
addVariation("weightLb", "#count[](20,40,60,80)# two-year-old sheep were weighed and their weights are shown below in pounds (lb).\\nWhat are the mean and standard deviation of the weights in kilograms (correct to 2 decimals)?", "axis(50 150 50 10)#varName(Weight)#shortVarName(wt)#xUnits(kg)#yUnits(lb)#direction(1)#decimals(1)#maxResult(999.99)#intercept(0)#slope(2.20)#dataName(Sheep weight)", null, 0);

//----------------------------------------------

startExercise("exerciseNumGraphProg.MatchTransformApplet", 550, 600);

addVariation("fruitWeight", "The top stacked dot plot shows the distributions of weights of #count[](50,100)# #?:string[](apples*pears)#. The three stacked dot plots underneath show the distribution of three transformations of the raw data. Which distribution matches each transformation?\\nDrag the lower three transformation names up or down to align with the corresponding dot plot.", "baseShape(0:3)", null, 0);

//----------------------------------------------

startExercise("exerciseNumGraphProg.FindTransformApplet", 500, 560);

addVariation("weights", "The top stacked dot plot shows the distribution of #count[](100,200,300)# weights of items. Export the data then find a power transformation that makes its distribution more symmetric (as in the second transformed dot plot)", "varName(Weight)#dataName(Weights of items)#normalMeanSd(4.1 2)#powerIndex(0:5)#transformFactor[powerIndex](-6,-6,-0.2,0.33,1.2,9.5)#decimals(3)", null, 0);
addVariation("survivalTimes", "The top stacked dot plot shows the distribution of #count[](100,200,300)# survival times of insects. Export the data then find a power transformation that makes its distribution more symmetric (as in the second transformed dot plot)", "varName(Time)#dataName(Survival times)#normalMeanSd(4.1 2)#powerIndex(0:5)#transformFactor[powerIndex](-6,-6,-0.2,0.33,1.2,9.5)#decimals(3)", null, 0);

//----------------------------------------------

