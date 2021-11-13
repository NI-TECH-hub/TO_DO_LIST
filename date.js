
//jshint esversion:6

module.exports.getDate = function(){
    //javascript date time format

    let today = new Date();

    let options = {
        weekday: "long",
        // month: 'long',
        // day: 'numeric',

    };

    return today.toLocaleDateString("en-US", options);
}

module.exports.getDay = function(){
    

    const today = new Date();

    const options = {
        month: 'long',
        day: 'numeric',

    };

    return today.toLocaleDateString("en-US", options);

}


//best way to declare js functions
module.exports.getDayDate = function() {
    

    const today = new Date();

    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',

    };
 
    // let day = today.toLocaleDateString("en-US", options);
    // return day;
    //instead of making variable and then return i directly return
    return today.toLocaleDateString("en-US",options);

}


//best way to declare js functions documentation
// https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/