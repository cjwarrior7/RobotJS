var robot = require("robotjs");
var fs = require("fs");//fileSystem
robot.moveMouseSmooth(25, 738);
robot.mouseClick();//557,66
robot.moveMouseSmooth(557, 66)
robot.mouseClick();
setTimeout(handleOpenBoard, 2000)//only execute once
function handleOpenBoard() {
    robot.typeString('terminal');
    robot.keyTap('enter');
    robot.typeString('   flatpak run ch.openboard.OpenBoard');
    robot.keyTap('enter');
    setTimeout(writeHi,2000);

}
function writeHi(){
   //H
   robot.moveMouseSmooth(400, 250);
   robot.mouseToggle("down", "left");
   robot.dragMouse(400, 450);
   robot.mouseToggle("up", "left");

   robot.moveMouseSmooth(400, 350);
   robot.mouseToggle("down", "left");
   robot.dragMouse(600, 350);
   robot.mouseToggle("up", "left");

   robot.moveMouseSmooth(600, 250);
   robot.mouseToggle("down", "left");
   robot.dragMouse(600, 450);
   robot.mouseToggle("up", "left");


//I
    robot.moveMouseSmooth(700, 250);
    robot.mouseToggle("down", "left");
    robot.dragMouse(900, 250);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(800, 250);
    robot.mouseToggle("down", "left");
    robot.dragMouse(800, 450);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(700, 450);
    robot.mouseToggle("down", "left");
    robot.dragMouse(900, 450);
    robot.mouseToggle("up", "left");
    setTimeout(handleTelegram, 2000);
}
function handleTelegram() {
    robot.moveMouseSmooth(1213, 19);
    robot.mouseClick();
    robot.moveMouseSmooth(32, 733);
    robot.mouseClick();
    robot.moveMouseSmooth(577, 69);
    robot.typeString('Telegram');
    robot.keyTap('enter');
  
    setTimeout(function () {
        robot.moveMouseSmooth(283, 75);
        robot.mouseClick();
        robot.typeString('Telegram');
        robot.keyTap('enter');
        robot.typeString('Hello World');
        robot.keyTap('enter');
    }, 2000);
    setTimeout(openChrome, 2000);

}
function openChrome() {
    robot.moveMouseSmooth(25, 738);
    robot.mouseClick();
    robot.moveMouseSmooth(557, 66)
    robot.mouseClick();
    robot.typeString('chrome');
    robot.keyTap('enter');
    setTimeout(openTabs, 2000);

}
function openTabs() {
    var rdata = fs.readFileSync("./chrome.json");//./chrome.jso
    console.log(rdata);
    var tabs = JSON.parse(rdata);
    console.log(tabs);
    for (var i = 0; i < tabs.length; i++) {
        for (var j = 0; j < tabs[i].length; j++) {
            robot.typeString(tabs[i][j]);
            robot.keyTap('enter');
            if (j < tabs[i].length - 1) {
                robot.keyToggle("control", "down");
                robot.keyTap('T');
                robot.keyToggle("control", "up");
            }
            else if (i < tabs.length - 1) {
                robot.keyToggle("control", "down");
                robot.keyTap('N');
                robot.keyToggle("control", "up");
            }
        }

    }
    setTimeout(openNotePad, 2000);
}
function openNotePad(){
    robot.moveMouseSmooth(25, 738);
    robot.mouseClick();
    robot.moveMouseSmooth(557, 66)
    robot.mouseClick();
    robot.typeString('Notepad');
    robot.keyTap('enter');
    setTimeout(writeinNotePad, 2000);
}
function writeinNotePad(){
    robot.moveMouseSmooth(643, 55);
    robot.mouseClick();
    console.log("reach")
    robot.typeString(' The system is ready for use.');
}

