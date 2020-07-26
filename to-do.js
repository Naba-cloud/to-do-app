var list=document.getElementById('list');
function AddTodo()
{
    var td=document.getElementById('enter-item');
    var li=document.createElement('li');
    var litex=document.createTextNode(td.value);
    li.appendChild(litex);
    
    td.value="";
    var delbtn=document.createElement('button');
    var deltext=document.createTextNode('Delete');
    delbtn.appendChild(deltext);
    delbtn.setAttribute("onclick","deleteitem(this)");
    
    list.style.listStyle='none';
    li.appendChild(delbtn);
    list.appendChild(li);
   

   
}
function deleteitem(e)
{
    // list.remove();
    e.parentNode.remove();
}
function deleteall()
{
  list.innerHTML="";
   
}