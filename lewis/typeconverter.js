function typeConverter(x) {
    
    if ( typeof x === 'number')  {
        //x is of type number
        
        var floatTest = parseInt(x);
        
        if ( (x - floatTest) != 0 ){
            
            return 'Float';
            
        }else if ( (x - floatTest) === 0 ){
            
            return 'Integer';
            
        }
         
    }else{
        //x isn't of type no
        
        if ( typeof x === 'object' ){
            //only when x is type object
            
            if ( x === null ){
                
                return "Null";
                
            }else{
                
                return "Object";
                
            }
            
        }else {
            //x is anything but type object
            
            switch ( typeof x ) {
            
                case 'string':
                    return 'String';
                    break;
                
                case 'boolean':
                    return 'Boolean';
                    break;
                
                case 'undefined':
                    return 'Undefined';
                    break;
                
                case 'object':
                    return 'Object';
                    break;
                
                case 'string':
                    return 'string';
                    break;
               
            }
            
        }
        
        
    }
    
}


console.log( typeConverter( 32.0000001 ) );
console.log( typeConverter(32) );
console.log( typeConverter( 'The quick brown fox' ) );
console.log( typeConverter( null ) );

var undef; // null variable
console.log( typeConverter( undef ) );

console.log( typeConverter( true ) );
console.log( typeConverter( {} ) );

//var conf =  prompt('Would you like to suggest something to convert?');

//if (conf) {
 //	var answer = prompt('waiting for suggestion...');

//	typeConverter(answer);

//}

