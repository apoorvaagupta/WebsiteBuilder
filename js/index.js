$(function () {

  var zip = new JSZip();
  zip.folder('test').file("test.txt", "hey there!!!!");
  zip.generateAsync({type: "blob"}, function updateCallback(metadata) {
    // var msg = "progression : " + metadata.percent.toFixed(2) + " %";
    // if(metadata.currentFile) {
    //   msg += ", current file = " + metadata.currentFile;
    // }
    // showMessage(msg);
    // updatePercent(metadata.percent|0);
  }).then(function (blob) {
    console.log(blob);
    var url = URL.createObjectURL(blob);
    console.log(url);
    //location.href = url

  })
})