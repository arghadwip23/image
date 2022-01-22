console.log("heloo world");
var img,inp = document.getElementById("img");
var imgg = document.getElementById("imgg");
console.log(imgg);

inp.addEventListener("input", ()=>{
 img = inp.files;
 console.log(img);
 imgg.src=URL.createObjectURL(img[0]);
 getExif();
})








function getExif() {
 EXIF.getData(img[0], function() {
  var make = EXIF.getTag(this, "Make");
  var model = EXIF.getTag(this, "Model");
  var makeAndModel = document.getElementById("result");
  makeAndModel.innerHTML = `${make} ${model}`;
 });

 var img2 = document.getElementById("img2");
 EXIF.getData(img[0], function() {
  var allMetaData = EXIF.getAllTags(this);
  console.log(allMetaData);
  var allMetaDataSpan = document.getElementById("result2");
  allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");
 });
}