startExercise("exerciseEstimProg.PopnSampleApplet", 600, 700);
addCoreParam("popSampText", "population#sample");
addCoreParam("summaryMessage", "A population is the underlying distribution of values about which we are really interested but that we usually cannot completely observe. A sample is a random subset of these values.");
addCoreParam("nDescriptions", "5");
addCoreParam("title0", "Height of London girls");
addCoreParam("scenario0", "Public health researchers are interested in the heights of children of different ages. As part of the study, they sample 50 girls aged 12 from schools in London and record their heights.");
addCoreParam("popnDescription0", "The heights of all girls aged 12 in London should be treated as a ...");
addCoreParam("sampleDescription0", "The heights that were recorded from the 50 girls in the study are a ...");
addCoreParam("popnMessages0", "The researchers is interested in the distribution of heights of all girls age 12 in London, so this is the population.# (The heights of the 50 girls are a sample from this population.)");
addCoreParam("sampleMessages0", "The 50 girls are a sample from all girls aged 12 in London. From their distribution of heights, the researchers will hope to find information about the wider population of London girls of this age. # (The corresponding population consists of all girls aged 12 in London.)");
addCoreParam("title1", "Silkworm survival");
addCoreParam("scenario1", "Researchers are interested in how long silkworm larvae survive when heated to 50 #degrees#C. They perform an experiment on 20 silkworm larvae and record their survival times.");
addCoreParam("popnDescription1", "The distribution of the survival time of all silkworm larvae at #degrees#C is a ...");
addCoreParam("sampleDescription1", "The distribution of the survival time of these 20 silkworm larvae is a ...");
addCoreParam("popnMessages1", "The question refers to silkworm larvae in general, not the specific 20 on which the experiment was conducted. It therefore refers to a population.# (The survival times of the 20 silkworms in the experiment are a sample.)");
addCoreParam("sampleMessages1", "These 20 silkworms are a sample from the wider population of all possible silkworms.# ");
addCoreParam("title2", "Annual rainfall");
addCoreParam("scenario2", "Climatologists have recorded the total annual rainfall in a region each year for the previous 25 years. They intend to use the mean annual rainfall from this period to predict future rainfall, assuming no change in climate.");
addCoreParam("popnDescription2", "The distribution of annual rainfall in the region is a ...");
addCoreParam("sampleDescription2", "The distribution of rainfall that was observed in the previous 25 years is a ...");
addCoreParam("popnMessages2", "The question refers to the distribution of rainfall in the region in general (a population), not just in the specific 25 years for which data was collected.# (The annual rainfalls for the 25 years are a sample from this process.)");
addCoreParam("sampleMessages2", "The 25 years for which rainfall was recorded can be considered to be a sample from the possible rainfalls that could arise in the region -- our main interest is in the distribution that is likely in the future, not these particular 25 years.# (The corresponding population is the underlying distribution of the annual rainfalls that could occur in future years.)");
addCoreParam("title3", "Gender of reptiles");
addCoreParam("scenario3", "The gender of many species of reptile depends on the temperature at which the eggs incubate. Biologists hatch 16 eggs of one species of lizard at 20#degrees#C and record the gender of the lizards.");
addCoreParam("popnDescription3", "The distribution of male and female lizards that could be hatched at this temperature is a ...");
addCoreParam("sampleDescription3", "The genders of these 16 lizards is a ...");
addCoreParam("popnMessages3", "The question refers to the genders of the lizards in general (a population), not just in the sample of 16 lizards.# (The genders of the 16 lizards are a sample from this population.)");
addCoreParam("sampleMessages3", "The question refers to the genders of the 16 lizards that were observed, hopefully a representative sample from the population of all such lizards.# ");
addCoreParam("title4", "Invoice errors");
addCoreParam("scenario4", "A large plumbing company sent out 792 invoices to customers in one tax year. In order to estimate accuracy of these invoices, the company accountant checked a random sample of 40 of the invoices and classified them as 'accurate', 'too low' or 'too high'.");
addCoreParam("popnDescription4", "The accuracy of all 792 company invoices forms a ...");
addCoreParam("sampleDescription4", "The accuracy of the 40 invoices that the accountant checked is a ...");
addCoreParam("popnMessages4", "The question refers to all 792 company invoices, not just the sample of 40 that were checked.# ");
addCoreParam("sampleMessages4", "The question refers to the accuracy of the 40 invoices that were sampled from those that the company sent out in the year.# (The corresponding accuracy of all 792 company invoices would be the underlying population.)");

addVariation("generic", "Correctly complete the three statements below.", null, null, 0);

//----------------------------------------------

startExercise("exerciseEstimProg.ParamStatApplet", 600, 700);
addCoreParam("popSampText", "a parameter#an estimate");
addCoreParam("summaryMessage", "Parameters are constants that describe populations. Estimates are found from samples and vary from sample to sample.");
addCoreParam("nDescriptions", "5");
addCoreParam("title0", "Height of London girls");
addCoreParam("scenario0", "Public health researchers are interested in the heights of children of different ages. As part of the study, they sample 50 girls aged 12 from schools in London and record their heights.");
addCoreParam("popnDescription0", "The average height of all girls aged 12 in London is ...");
addCoreParam("sampleDescription0", "The average height that was recorded from the 50 girls is ...");
addCoreParam("popnMessages0", "The heights of all girls age 12 in London form a population so its mean is the parameter that we are trying to estimate.# (The heights of the 50 girls are a sample from this population.)");
addCoreParam("sampleMessages0", "The 50 girls are a sample from all girls aged 12 in London and their average height is an estimate of the mean height of all such London girls.# ");
addCoreParam("title1", "Silkworm survival");
addCoreParam("scenario1", "Researchers are interested in how long silkworm larvae survive when heated to 50 #degrees#C. They perform an experiment on 20 silkworm larvae and record their survival times.");
addCoreParam("popnDescription1", "The expected survival time of silkworm larvae at #degrees#C is ...");
addCoreParam("sampleDescription1", "The mean survival time of these 20 silkworm larvae is ...");
addCoreParam("popnMessages1", "The question refers to silkworm larvae in general so the expected survival time is a population parameter.# (The mean survival time of a small number of silkworms in an experiment is an estimate of this.)");
addCoreParam("sampleMessages1", "These 20 silkworms are a sample from the population of silkworms in general and their mean estimates the population mean.# The corresponding population value is the expected (mean) survival time of all such silkworm larvae.");
addCoreParam("title2", "Annual rainfall");
addCoreParam("scenario2", "Climatologists have recorded the total annual rainfall in a region each year for the previous 25 years. They intend to use the mean annual rainfall from this period to predict future rainfall, assuming no change in climate.");
addCoreParam("popnDescription2", "The expected annual rainfall in the next year is ...");
addCoreParam("sampleDescription2", "The mean rainfall from the previous 25 years is ...");
addCoreParam("popnMessages2", "The question refers to the annual rainfall that is expected in this region, not just for the specific 25 years for which data was collected. The value is therefore a parameter.# (The mean annual rainfall recorded in the 25 years estimates this.)");
addCoreParam("sampleMessages2", "The 25 years for which rainfall was recorded can be considered to be a sample from the possible rainfalls that could arise in the region - our main interest is in the distribution that is likely in the future, not these particular 25 years.# (The corresponding population parameter is the underlying mean of the annual rainfalls that could occur in future years.)");
addCoreParam("title3", "Gender of reptiles");
addCoreParam("scenario3", "The gender of many species of reptile depends on the temperature at which the eggs incubate. Biologists hatch 16 eggs of one species of lizard at 20#degrees#C and record the gender of the lizards.");
addCoreParam("popnDescription3", "The probability that a lizard hatched at this temperature will be male is ...");
addCoreParam("sampleDescription3", "The proportion of these 16 lizards that are male is ...");
addCoreParam("popnMessages3", "The question refers to the probability of lizards being male in general, not just in the sample of 16 lizards.# (The proportion of males in the 16 lizards would be an estimate of this.)");
addCoreParam("sampleMessages3", "The question refers to the proportion of male lizards in the sample and this is an estimate of the underlying probability of any such lizard being male. (The underlying probability is a population parameter).# ");
addCoreParam("title4", "Invoice errors");
addCoreParam("scenario4", "A large plumbing company sent out 792 invoices to customers in one tax year. In order to estimate accuracy of these invoices, the company accountant checked a random sample of 40 of the invoices.");
addCoreParam("popnDescription4", "The proportion of the company invoices that were accurate is ...");
addCoreParam("sampleDescription4", "The proportion of the 40 sampled invoices that were accurate is ...");
addCoreParam("popnMessages4", "The question refers to all 792 company invoices, not just the sample of 40 that were checked, so the proportion is a parameter.# (The proportion of sampled invoices that are accurate would be an estimate of this.)");
addCoreParam("sampleMessages4", "The question refers to the proportion of accurate invoices in the sample of 40. This is an estimate of the corresponding proportion from all 792 that the company sent out.# (The latter is the corresponding population parameter.)");

addVariation("generic", "Correctly complete the three statements below.", null, null, 0);

//----------------------------------------------

