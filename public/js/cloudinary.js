

const bgMe = cloudinary.image("/portfolio/Crow_Andrew_-_High_Res_2_n88ggh.jpg", {transformation: [
    {width: 200, height: 200, gravity: "face", crop: "thumb"},
    {radius: 20, border: "5px_solid_black"},
    {overlay: "cloudinary_icon_white", opacity: 50, width: "0.25", flags: "relative", gravity: "north_east", y: 10, x: 10}
    ]})

console.log(bgMe)
document.getElementById('background').appendChild(bgMe);
