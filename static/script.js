document.querySelector('.theme-box').addEventListener('click',()=>{
    let b1=document.getElementById('dot');
    if(b1.classList.contains('ani'))
    {
        document.getElementById('shift').innerText='Day';
        b1.classList.remove('ani');
        b1.classList.add('ani1');
        document.getElementById('box').classList.add('box');
        document.getElementById('box').classList.remove('box1');
        document.getElementById('main').classList.add('main');
        document.getElementById('main').classList.remove('main1');
        document.getElementById('fetch').classList.add('fetch');
        document.getElementById('fetch').classList.remove('fetch1');
        document.getElementById('theme-box').classList.add('theme-box');
        document.getElementById('theme-box').classList.remove('theme-box1');
        document.getElementById('dot').classList.add('dot');
        document.getElementById('dot').classList.remove('dot1');
        setTimeout(() => {
            b1.style.left='0px';
        }, 50);
    }
    else
    {
        document.getElementById('shift').innerText='Night';
        if(b1.classList.contains('ani1'))
        {
            b1.classList.remove('ani1');
        }
        b1.classList.add('ani');
        document.getElementById('box').classList.add('box1');
        document.getElementById('box').classList.remove('box');
        document.getElementById('main').classList.add('main1');
        document.getElementById('main').classList.remove('main');
        document.getElementById('fetch').classList.add('fetch1');
        document.getElementById('fetch').classList.remove('fetch');
        document.getElementById('theme-box').classList.add('theme-box1');
        document.getElementById('theme-box').classList.remove('theme-box');
        document.getElementById('dot').classList.add('dot1');
        document.getElementById('dot').classList.remove('dot');
        setTimeout(() => {
            b1.style.left='32px';
        }, 50);
    }
})
async function getJoke()
{
    let response=await fetch('https://official-joke-api.appspot.com/jokes/random');
    let data=await response.json();
    document.querySelector('.text').innerHTML=`<p>${data.setup}</p><p>${data.punchline}</p>`;
}
document.getElementById('fetch').addEventListener('click',()=>{
    document.querySelector('.text').innerHTML=`Fetching..`;
    getJoke();
})
getJoke();