module.exports = function(app){
    let ReceiptTransformerVersion = '1.1';
    let EmptyPackageSummaryVersion = '0.3.11';
     //creating two api routes for programs to check if new version is available
    app.get('/api/ReceiptTransformer/CurrentVersion', function(req,res){
        //return latest release number
        //hardcoded here for now
        res.send(ReceiptTransformerVersion);//one version ahead now for testing purposes
    });
    app.get('/api/EmptyPackageSummary/CurrentVersion',function(req,res){
        res.send(EmptyPackageSummaryVersion);//one version ahead now for testing purposes
    });
};