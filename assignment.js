//feetTOMile status
function feetToMile(feet) {
    if (feet > 0 ) {
        mile = feet*0.00018;
        return mile;
    }
    else{
        console.log("Length can't be negative");
    }
}
//woodCalculator status
function woodCalculator(chair, table, bed) {
    if(table, chair, bed > 0){
        var chairWood = chair * 1;
        var tableWood = table * 3;
        var bedWood = bed * 5;
        var allWood = chairWood+ tableWood + bedWood;
        return allWood;
    }
    else{
        console.log("wood can't be negative")
    } 
}
//brickCalculator status
function brickCalculator(brick) {
    if (brick<0) {
        console.log("Brick can't be Negative")
    }
    else if (brick <= 10) {
        var Brick = brick*1000*15;
    } else if ( brick >= 11 && brick <= 20){
        var brickforbuilding = 1000*10*15;
        var brickkk = brick - 10;
        var brickforBuilding = brickkk*1000*12;
        var Brick = brickforBuilding + brickforbuilding;
    }
    else{
        var firstbrick = 1000*15*10;
        var secondbrick = 1000*12*10;
        var thirdbrick = brick-20;
        var finalBrick = thirdbrick*10*1000;
        var Brick = firstbrick + secondbrick + finalBrick;
    }
    return Brick;
}
//Tinyfriend status
function Tinyfriend(name) {
    var Tinydost = name[0];
    for (var dost = 0; dost < name.length; dost++) {
        var currentName = name[dost];
        if (currentName < Tinydost) {
            Tinydost = currentName;
        }
    }
    return Tinydost;
}