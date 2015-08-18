app.factory('versionFactory', function() {

  function version () {
  	return '0.0.3';
  }

  function developer () {
  	return 'Marco Ferraioli';
  }

  function webSite () {
  	return 'https://www.marcoferraioli.com/';
  }

  function githubName () {
  	return 'ParanoiaSystem';
  }

  function githubUrl () {
  	return 'https://github.com/paranoiasystem';
  }

  return{
  	version: version,
  	developer: developer,
  	webSite: webSite,
  	githubName: githubName,
  	githubUrl: githubUrl
  };

});
