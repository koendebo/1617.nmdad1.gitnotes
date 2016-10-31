;(function() {
  
  function ITunesApp() {

    // URL of the Search API
    this.API_URL = 'https://itunes.apple.com/search?term=daft+punk&entity=album';
    // The results within the JSON-object
    this.results;

     // Initialize App
    this.init = function() {
      console.log('1. Initialize the app');
      this.loadData();
    }

    // Load the data from the API (iTunes)
    this.loadData = function() {
      console.log('2. Load the Data');
      this.updateUI();
    };

    // Update the User Interface (UI)
    this.updateUI = function() {
      console.log('3. Update UI');
      this.generateTableUI();
    };

     // Generate the albums as a table with rows
    this.generateTableUI = function() {
      console.log('4. Generate UI with table-element');
    };

  };

  // Make an instance of the ITunesApp
  var app = new ITunesApp();
  // Initialize the app
  app.init();


    })();