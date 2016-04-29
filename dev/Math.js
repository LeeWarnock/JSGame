"use strict";

Math.flip = function(value, max){
    if(typeof value !== 'number' && typeof max !== 'number'){
        return NaN;
    }
    return Math.abs(max - parseInt(value));
}

Math.toInt = function(num){
    return num | 0;
}

Math.randomRange = function(min, max, integer){
    if(typeof min !== 'number' && typeof max !== 'number'){
        return NaN;
    }
    if(integer === true){
        return Math.toInt(Math.random() * (max - min) + min);        
    }
    return Math.random() * (max - min) + min;
}

Math.invert = function(num){
    return num * -1;
}