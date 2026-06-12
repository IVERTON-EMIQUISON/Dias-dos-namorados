const nao = document.getElementById('nao');

if(nao){

    nao.addEventListener('mouseover',()=>{

        const x = Math.random() * (window.innerWidth - 200);
        const y = Math.random() * (window.innerHeight - 100);

        nao.style.position = 'fixed';
        nao.style.left = x + 'px';
        nao.style.top = y + 'px';
    });

}

const sim = document.getElementById('sim');

if(sim){

    sim.addEventListener('click',()=>{

        document.getElementById('resultado').style.display='block';

        document.getElementById('musica').play();

        const flores = ['🌹','🌷','🌸','🌺','🌼','💐'];

        for(let i=0;i<150;i++){

            setTimeout(()=>{

                const flor = document.createElement('div');

                flor.classList.add('flor');

                flor.innerHTML =
                    flores[Math.floor(Math.random()*flores.length)];

                flor.style.left =
                    Math.random()*100 + 'vw';

                flor.style.fontSize =
                    (Math.random()*30 + 20) + 'px';

                flor.style.animationDuration =
                    (Math.random()*4 + 4) + 's';

                document.body.appendChild(flor);

                setTimeout(()=>{
                    flor.remove();
                },8000);

            },i*50);

        }

    });

}