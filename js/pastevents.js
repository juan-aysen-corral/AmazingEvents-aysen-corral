
let lista = data.events
function filtradop(filtro){
    const pasado=[]
    for (const fecha  of filtro) {
        let anio = fecha.date.split("-")
        console.log(anio[0])
        if(anio[0] < "2023"){
            pasado.push(fecha)
        }
        
    }
    
 return pasado
}

let eventoPasado = filtradop(lista)
console.log (eventoPasado)

function creartarjetas(tarjet){
    console.log(tarjet)
    return `<div class="card-container col-lg-3 col-sm-12 col-md-6 c">
    <div class="cards" style="width: 100; height: 100;">
     <img class="fotos" src=${tarjet.image} alt="...">
   <div class="card-body">
     <h5 class="card-title">${tarjet.name} </h5>
     <p class="card-text">${tarjet.description}</p>
     <div class="ff ">
      <p>Price =$ ${tarjet.price}</p>
     <a href="./paginas/detail.html" class="btn btn-primary">Details</a>
    </div>
    </div>
 </div>`
}
function mostrartarjeta (vision  ){
    let home= document.getElementById(`muchas`)
    console.log(home)
    for (let visible of vision) {
        const ver = creartarjetas(visible)
        home.innerHTML = home.innerHTML + ver;
        
    }
}

function crearbox ( box){
    
    return  ` <div class="form-check form-check-inline">
     <input class="form-check-input" type="checkbox" id="${box._id} " value="option7" >
     <label class="form-check-label" for="${box._id} " > ${box.category} </label>
   </div>`
    
 
 }
 
 function mostrarbox( ok ){
     let cajas = document.getElementById("cajitas")
     for( let vista of ok){
         
         
             const inyergar= crearbox(vista)
             cajas.innerHTML= cajas.innerHTML + inyergar;
             console.log(vista.id)
         
     }
 }
 


 function separarCategorias () {
let categoriasObjeto=[];
let categorias =[];
let objeto ={};
for(let categoria of eventoPasado){
    if(!categorias.includes(categoria.category)){
        categorias.push(categoria.category);
        objeto = {
            "category": categoria.category ,
            "id": categoria._id,
        }
        categoriasObjeto.push(objeto);
    }
}mostrarbox(categoriasObjeto)
}

separarCategorias()