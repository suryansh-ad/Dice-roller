const mybtn = document.getElementById('mybtn')
mybtn.onclick = function ()
{
    const input = document.getElementById("inputfordice").value;
    const outputtext = document.getElementById("outputtext")
    const outputimage = document.getElementById("outputimage");
    const arr = [];
    const img=[];
    for(i = 0;i<input;i++)
        {
            const random = Math.floor(Math.random() *6)+1;
            arr[i] = random;
            img[i] = (`<img src="dice_images/${random}.png">`)
            
        }
        outputtext.textContent = [...arr].join(", ");
        
    outputimage.innerHTML = img.join(" ")
}
const themebtn = document.getElementById("themebtn")
const outputtext = document.getElementById('outputtext')
themebtn.onclick = function()
{
let element = document.body;
    element.classList.toggle("darklight");
    if(element.classList.contains("darklight")) 
        {
    themebtn.src = 'theme_images/light.svg';
    outputtext.style.color = '#0088ff'
        }
        else
        {
            themebtn.src = 'theme_images/dark.svg';
            outputtext.style.color = 'black'
        }
}