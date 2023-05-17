let width = prompt(' Enter Width : ')
let height = prompt('Enter height : ')

function cal(width = 1, height = 1){

   height =  height === undefined ? 1 :height;
    return width * height;
}

let value = cal(width, height)

alert(' Calculated value is : '+ value)