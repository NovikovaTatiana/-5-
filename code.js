function dragStart(ev)
{
 ev.dataTransfer.effectAllowed='link';
 ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
 ev.dataTransfer.setDragImage(ev.target,0,0);
 return true;
}
function dragEnter(ev)
 {
 var idelt = ev.dataTransfer.getData("Text");
 return true;
 }
function dragOver(ev)
 {
 var idelt = ev.dataTransfer.getData("Text");
 var id = ev.target.getAttribute('id');
 return false;
 }
function dragEnd(ev)
 {
 ev.dataTransfer.clearData("Text");
 return true
 }
function dragDrop(ev)
 {
 var idelt = ev.dataTransfer.getData("Text");
 ev.target.appendChild(document.getElementById(idelt));
 ev.stopPropagation();
 return false;
 }




 function saveNote()
{
 var name = document.getElementById('notename').value;
 /* создание переменной, хранящей значение введенное в поле Наименование.*/
 var content = document.getElementById('notecontent').value;
 /* создание переменной для хранения текста самой записи*/
 if(content == '')
 {
 alert('enter valid note text');
 /* выводим предупреждающее сообщение, в случае, если не задан текст
записи*/
 }
 else
 {
 if (name == 0)
 {
 alert('enter valid note name');
 /* вывод предупреждающего сообщения, если не задано наименование
записи*/
 }
 else {localStorage[name] = content;}
}
}

function listLoad()
{
 var list = document.getElementById('notelist');
 /* получаем доступ к элементу - списку нашей веб - страницы*/
 for(var i in localStorage)
 /* цикл для перебора каждого значения, сохраненного в localStorage,
 при этом i, принимает значение идентификатора хранимых данных,
переменная i содержит наименование записи*/
 {
 var a = document.createElement('a'); /* создаем новый html - */
 a.setAttribute('onclick', "loadNote('"+i+"'); return false;");
 /*определяем атрибут onclick, при клике вызовется функция
 loadNote с параметром Наименования записи*/
 a.innerText = i;
 /* задаем значение текста ссылки эквивалентным наименованию записи*/
 var element = document.createElement('li');
 /* создаем новый html - элемент, а именно пункт списка*/
 element.appendChild(a);
 /* добавляем пункту списка дочерний элемент – ссылку*/
 list.appendChild(element);
 /* добавляем списку дочерний элемент – пункт списка*/
 }
}

function loadNote(v)
{
 document.getElementById('notecontent').value = localStorage[v];
 /*выводим в текстовое поле текст записи*/
 document.getElementById('notename').value = v;
 /* выводим в поле наименование записи*/
}

function deleteNote()
{
 var name = document.getElementById('notename').value;
 /*получаем значение наименования текущей записи из текстового поля*/
 if (name != '')
 {
 localStorage.removeItem(name);
 /*удаление записи, в качестве идентификатора записи используется ее
наименование*/
 }
 else {alert('note not found');}
 /* сообщение, выдаваемое при попытке удалить неопределенную запись*/
}




function createImage() {
    var ctx = document.getElementById('squareCanvas').getContext('2d');
    var x = 0;
    function animation() {
     ctx.clearRect(0,0, 1000, 1000);
     ctx.fillRect(x, 10, 10, 10);
     x = x+1;
     if (x > 999) { x = 0;}
     setTimeout(animation, 50);
    }
    animation();
}

function createImage()
 {
 var ctx = document.getElementById('squareCanvas').getContext('2d');
 var x = 0;

function animation()
 {
 ctx.fillStyle="blue";
 ctx.fillRect(x*100, (Math.sin(x)*100)+100, 3, 3);
 ctx.fillStyle="red";
 ctx.fillRect(x*100, (Math.cos(x)*100)+100, 3, 3);
 x = x+0.05;
 setTimeout(animation, 50);
 }
 animation();
}
