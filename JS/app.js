function cal(){
    var x = [];
    var inputs = document.getElementsByTagName('input');
    for (var key in inputs) {
        x.push(inputs[key].value);
    }
    sum = (parseInt(x[0])*20 + parseInt(x[1])*20 + parseInt(x[2])*10 + parseInt(x[3])*10 + parseInt(x[4])*13.33 + parseInt(x[5])*13.33 + parseInt(x[6])*13.33 + parseInt(x[7])*10 + parseInt(x[8])*10 + parseInt(x[9])*10)/100;
    
    document.getElementById('summary').innerHTML = sum.toFixed(4);

}