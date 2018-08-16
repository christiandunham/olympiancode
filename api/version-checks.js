module.exports = function(app){
     //creating two api routes for programs to check if new version is available
    app.get('/api/ReceiptTransformer/CurrentVersion', function(req,res){
        //return latest release number
        //hardcoded here for now
        res.send('1.1.1');//one version ahead now for testing purposes
    });
    app.get('/api/EmptyPackageSummary/CurrentVersion',function(req,res){
        res.send('0.3.12');//one version ahead now for testing purposes
    });
};