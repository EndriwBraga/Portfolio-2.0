function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i ) =>{
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
    }

    escrevendoLetra()

function menuMobol(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')
    
    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
    })
}

menuMobol()

function sobreMim(){
        
    const divExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content ul li');
    const divEducation = document.querySelectorAll('.education_content div');
    const liEducation = document.querySelectorAll('.education_content ul li');

    divExperiencia[0].classList.add('ativo');
    liExperiencia[0].classList.add('ativo');
    divEducation[0].classList.add('ativo');
    liEducation[0].classList.add('ativo');


    function slideShow(index){
        divExperiencia.forEach((div)=>{
            div.classList.remove('ativo')
        });
        liExperiencia.forEach((botao)=>{
            botao.classList.remove('ativo')
        });
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }

    function slideShow2(index){
        divEducation.forEach((div)=>{
            div.classList.remove('ativo')
        })
        liEducation.forEach((botao)=>{
            botao.classList.remove('ativo')
        })
        divEducation[index].classList.add('ativo');
        liEducation[index].classList.add('ativo');
    }

    liExperiencia.forEach((event, index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
        })
    })

    liEducation.forEach((event, index)=>{
        event.addEventListener('click', ()=>{
            slideShow2(index)
        })
    })

}

sobreMim();

const listaAll = document.querySelectorAll('.projects_armazenamento ul li');

const buttonGeral = document.querySelectorAll('.projects_models ul li');
const buttonAll = document.querySelectorAll('.projects_models .all');

function loadingPage() {
    document.addEventListener('DOMContentLoaded', function() {
        showLista(listaAll, "all");
    });
}

loadingPage();

function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo');
    })

    buttonGeral[index].classList.add('ativo');
}

buttonGeral.forEach((item,index)=>{
    item.addEventListener('click', ()=>{
        removeClick(index);
    })
})

function showLista(lista, button = "all"){
    lista.forEach((item)=>{
        item.classList.remove('ativo')
    })

    if(button === 'design'){
        lista.forEach((item) => {
            if (item.classList.contains('design')){
                item.classList.add('ativo')
            };
          });
    }

    if(button === 'graphic'){
        lista.forEach((item) => {
            if (item.classList.contains('graphic')){
                item.classList.add('ativo');
            }
        })
    }

    if(button === 'website'){
        lista.forEach((item)=>{
            if(item.classList.contains('website')){
                item.classList.add('ativo')
            }})}

    if(button == 'all'){
        lista.forEach((item)=>{
            if(item.classList.contains('allProjects')){
                item.classList.add('ativo')
            }
        })
    }
}

buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentbutton = e.target;
        if(currentbutton.classList.contains('all')){
            showLista(listaAll)
        }
        if(currentbutton.classList.contains('design')){
            showLista(listaAll, "design")
        }
        if(currentbutton.classList.contains('graphic')){
            showLista(listaAll, "graphic")
        }
        if(currentbutton.classList.contains('website')){
            showLista(listaAll, "website")
        }
    })
})


