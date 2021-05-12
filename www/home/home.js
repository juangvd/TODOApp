
document.getElementById('btn-agregar').addEventListener('click', addTask);
document.getElementById('txt-tarea').addEventListener('focus', clearText);

function addTask(){
    let texto = document.getElementById('txt-tarea').value;
    
    let id = Date.now();

    var div = document.createElement("div");
    div.setAttribute('id', "div-"+id);
    div.setAttribute('class','item-check');

    var lbl = document.createElement('label');    
    lbl.setAttribute("for", `chk${id}`);
    lbl.innerHTML = texto;

    var chk = document.createElement('input');
    chk.setAttribute('id', `chk${id}`);
    chk.setAttribute("type", "checkbox");
    chk.setAttribute('class','chk-tarea');

    var img = document.createElement('img');
    img.setAttribute('class','img-exclamacion');
    img.src = "../assets/exclamacion.png";
    img.setAttribute('id', id);
    img.addEventListener('click', eliminar);

    div.appendChild(chk);
    div.appendChild(lbl);
    div.appendChild(img);

    document.getElementById('lst-tareas').appendChild(div);

    document.getElementById('txt-tarea').value = "";
}

function eliminar(e){
    document.getElementById('div-'+e.srcElement.id).remove();
}

function clearText(e){
    e.srcElement.value = '';
}
