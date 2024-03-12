let customFont;
let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16;
let loseImg;
let winImg;
function preload() {
  img1 = loadImage("https://openclipart.org/download/277914/Easter-Egg5.svg");
  img2 = loadImage("https://openclipart.org/download/277780/Broken-Easter-Egg.svg");
  //loseImg = loadImage("https://openclipart.org/download/3783/nicubunu-Wicked-Easter-Egg-Shell.svg");
  img3 = loadImage("https://openclipart.org/download/276560/DecorativeEgg2.svg");
  img4 = loadImage("https://openclipart.org/download/276562/DecorativeEgg5.svg");
  img5 = loadImage("https://openclipart.org/download/276570/DecorativeEgg12.svg");
  img6 = loadImage("https://openclipart.org/download/284139/DecoratedEgg6.svg");
  img7 = loadImage("https://openclipart.org/download/284141/DecoratedEgg8.svg");
  img8 = loadImage("https://openclipart.org/download/279057/EasterEggs5.svg");
  img9=loadImage("https://openclipart.org/download/226925/Easter-egg-2015090723.svg");
  img10=loadImage("https://openclipart.org/download/226927/Easter-egg-2-2015090723.svg");
  img11=loadImage("https://openclipart.org/download/300005/BasketOfEggs-remix.svg");
  img12=loadImage("https://openclipart.org/download/276568/DecorativeEgg10.svg");
  img13=loadImage("https://openclipart.org/download/276561/DecorativeEgg3.svg");
  img14=loadImage("https://openclipart.org/download/284138/DecoratedEgg5.svg");
  img15=loadImage("https://openclipart.org/download/284140/DecoratedEgg7.svg");
  loseImg = loadImage("./assets/images/devil.png");
  winImg = loadImage("./assets/images/unicorn.png")

  customFont=loadFont("./assets/font.otf");

}