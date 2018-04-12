const { Given, When, Then} = require('cucumber');
const sinon = require('sinon');

Given ('myFunctions',function(callback){
    return callback();
});

When ('myFunction', function myFunction(callback){
    if(true){
        var database = sinon.mock(Database);
        database.expects('save').once().withArgs(expectedUser);

        setupNewUser(info, function() { });

        database.verify();
        database.restore();

    }
});

Then ('should call the callback function', function() {
    var callback = sinon.spy();
    myFunction(true, callback);
    assert(callback.calledOnce);
});
