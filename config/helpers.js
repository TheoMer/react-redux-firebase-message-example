module.exports = {
  notification: function(msg){
    function output(text){
      console.log('\n\n##############################################');
      console.log('#    ... '+ text +' ...');
      console.log('##############################################\n\n');
    }
    if(msg){
      output(msg);
    }
    else {
      console.log("Error: please provide text for notification");
    }
  }
};

