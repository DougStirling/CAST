MathJax.Hub.Config({
  TeX: {
    Macros: {
      spaced: ["\\qquad\\text{#1}\\qquad", 1],
      diagfrac: ["\\raise{0.1em}{#2} \\kern#1pt/ \\raise{-0.3em}{#3}", 3, "-2"],
			Var: "{\\operatorname{Var}}",
			Covar: "{\\operatorname{Covar}}",
			Corr: "{\\operatorname{Corr}}",
      se: "{\\operatorname{se}}",
      Bias: "{\\operatorname{Bias}}",
      MSE: "{\\operatorname{MSE}}",
			
      UniformDistn: "{\\mathcal{Uniform}}",
      BernoulliDistn: "{\\mathcal{Bernoulli}}",
      BinomDistn: "{\\mathcal{Binomial}}",
      GeomDistn: "{\\mathcal{Geometric}}",
      NegBinDistn: "{\\mathcal{N\\kern-2ptegBinom}}",
      RectDistn: "{\\mathcal{Rectangular}}",
      PoissonDistn: "{\\mathcal{Poisson}}",
      ExponDistn: "{\\mathcal{Exponential}}",
      ErlangDistn: "{\\mathcal{Erlang}}",
      GammaDistn: "{\\mathcal{Gamma}}",
      WeibullDistn: "{\\mathcal{Weibull}}",
      NormalDistn: "{\\mathcal{N\\kern-2ptormal}}",
      BetaBinomDistn: "{\\mathcal{BetaBinomial}}",
      BetaDistn: "{\\mathcal{Beta}}",
      ChiSqrDistn: "{\\mathcal{\\chi^2}}",
      TDistn: "{\\mathcal{t}}",
      FDistn: "{\\mathcal{F}}",
      MultinomDistn: "{\\mathcal{Multinomial}}"
    }
  }
});

MathJax.Ajax.loadComplete("[MathJax]/config/statMacros.js");