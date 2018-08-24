let input;
let listTitle;
let form;
let list;
let divTarjeta;
let saveText;
let textArea;
let listado=[];
let button1;


function addList(){
    btnAddList.style.display="none";
    let element = document.getElementById("containerNewList");
    let listsNode = document.createElement('div');
    element.appendChild(listsNode);
    listsNode.id = 'trelloBoard';
    list=document.createElement('div');
    listsNode.appendChild(list);
    list.className='col';
    list.id='list'
    listTitle=document.createElement('div');
    list.appendChild(listTitle);
    listTitle.className='listTitle'
    listTitle.id='listTitle';
    form=document.createElement('form');
    list.appendChild(form);
    input=document.createElement('input');
    let inputbtn=document.createElement('input')
    let btnClear=document.createElement('button');
    form.appendChild(input);
    form.appendChild(inputbtn);
    form.appendChild(btnClear)
    input.type='text';
    input.className='inputTitleList';
    input.placeholder='Ingresa un nombre..';
    inputbtn.value='Guardar';
    inputbtn.className='btn btn-success';
    inputbtn.type='button';
    btnClear.innerHTML="X"
    btnClear.className='btn btn-secondary'
    inputbtn.addEventListener('click',saveTitleList);
}

function saveTitleList(){
    let titulo=input.value;
    listTitle.innerHTML=titulo;
    listTitle.style.display='block';
    form.style.display='none';
    displayFormCards(); 
    createAnotherList();

}


function createAnotherList(){
    let element1 = document.getElementById("containerNewList");
    button1=document.createElement('button');
    button1.className='add-list-button';
    button1.innerHTML='Add a List';
    element1.appendChild(button1);
    button1.addEventListener('click',addList2)

    return createAnotherList;
}

function addList2(){
    button1.style.display="none";
    addList();
}




function displayFormCards(){
    divTarjeta = document.createElement("div");
    divTarjeta.setAttribute("class","divTarjeta");
    list.appendChild(divTarjeta);
    formTarjeta = document.createElement("form");
    formTarjeta.className="tarjeta";
    formTarjeta.id="formTarjeta";
    divTarjeta.appendChild(formTarjeta);
    let  addCard = document.createElement("a"); 
    let  addCardText = document.createTextNode("Add a Card...");
    addCard.setAttribute("class","agrega");
    addCard.setAttribute("href","#");
    addCard.setAttribute("onclick","showCards()");
    addCard.appendChild(addCardText);
    formTarjeta.appendChild(addCard);
}

function showCards(){
    formTarjeta.style.display='none';
    saveText = document.createElement('div');
    saveText.style.display='none'
    divTarjeta.appendChild(saveText)
    textArea = document.createElement('textarea');
	textArea.placeholder='Add a Note..';
    textArea.className='txtArea';
    textArea.focus();
    divTarjeta.appendChild(textArea);
    let btnSaveCards = document.createElement('input');
	btnSaveCards.type='button';
    btnSaveCards.value= 'Guardar';
    btnSaveCards.className='btn btn-success'
    btnSaveCards.addEventListener('click',saveMessage)
    divTarjeta.appendChild(btnSaveCards);
}

function saveMessage(){
    let elementList;
    let txtToSave=textArea.value;
    listado.push(txtToSave);
    for (let i = 0; i <=listado.length; i++) {
        if(listado[i] != undefined){
        elementList=document.createElement('p');
        elementList.className='cardsText'
        elementList.innerHTML = listado[i];
    }}
    saveText.appendChild(elementList);
    saveText.style.display='block';
    textArea.value='';
}



module.exports= (createAnotherList,saveTitleList,addList);

