function first(){
    // Mô phỏng delay code
    setTimeout( function(){
        console.log("Một");
    }, 5000);
}
function second(){
    console.log("Hai");
}

first();
second();