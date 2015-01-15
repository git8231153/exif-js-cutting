// change图片默认压缩的最大比例  裁剪比例 裁剪的大小
var changeWidth="640";
var changeHeight="640";
var minWidth="120";
var minHeight="120";
var cancelImagesWidth="240";
var cancelImagesHeight="240";

var Ratio="1/1"

window.onload = function() {

//参数调用 调用的插件 压缩后的显示对象  压缩   是否裁剪  
InputOnchange("file-input","resultImage","1","1");
InputOnchange("file-input2","resultImage","1","0");
};

