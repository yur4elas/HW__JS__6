class Notebook {
   constructor(brand, year, processor, core, ram, hardDrive, weight) {
      this.brand = brand;
      this.year = year;
      this.processor = processor;
      this.core = core;
      this.ram = ram;
      this.hardDrive = hardDrive;
      this.weight = weight;
      console.log( ' в классе',this.weight)
   }
};


class Laptop extends Notebook {
   constructor(brand, year, processor, core, ram, hardDrive, weight, touchBar, gpu) {
      super(brand, year, processor, core, ram, hardDrive, weight);
      this.touchBar = touchBar;
      this.gpu = gpu;
      this.type = 'laptop';
   };
};

class Ultra extends Notebook {
   constructor(brand, year, processor, core, ram, hardDrive, weight, screeenSize, open) {
      super(brand, year, processor, core, ram, hardDrive, weight);
      this.screeenSize = screeenSize;
      this.open = open;
      this.type = 'ultra';
   };
};

document.querySelectorAll('.radio').forEach(elem => {
   elem.addEventListener('click', val => {
      console.log(val.target.value);
      if (val.target.value == 'laptop') {
         document.getElementById('create_note').children[1].children[7].style.display = 'flex';
         document.getElementById('create_note').children[1].children[8].style.display = 'flex';
         document.getElementById('create_note').children[1].children[9].style.display = 'none';
         document.getElementById('create_note').children[1].children[10].style.display = 'none';
      } else if (val.target.value == 'ultra') {
         document.getElementById('create_note').children[1].children[7].style.display = 'none';
         document.getElementById('create_note').children[1].children[8].style.display = 'none';
         document.getElementById('create_note').children[1].children[9].style.display = 'flex';
         document.getElementById('create_note').children[1].children[10].style.display = 'flex';
      }
   });
});

let arrNotebooks = [];
let currentIndex;

function editNote(i) {
   display('create_note');

   document.getElementById('brand').value = arrNotebooks[i].brand;
   document.getElementById('year').value = arrNotebooks[i].year;
   document.getElementById('processor').value = arrNotebooks[i].processor;
   document.getElementById('core').value = arrNotebooks[i].core;
   document.getElementById('ram').value = arrNotebooks[i].ram;
   document.getElementById('hardDrive').value = arrNotebooks[i].hardDrive;
   document.getElementById('touchBar').value = arrNotebooks[i].touchBar;
   document.getElementById('gpu').value = arrNotebooks[i].gpu;
   document.getElementById('screeenSize').value = arrNotebooks[i].screeenSize;
   document.getElementById('open').value = arrNotebooks[i].open;
   document.getElementById('weight').value = arrNotebooks[i].weight;
   document.querySelector('#createNotebook').className  = 'buttons edit__but';

   deleteNote(i, arrNotebooks);
   document.getElementById('mainMenu').style.display = 'none'
};

function deleteNote(i, arrNotebooks) {   
   printInfo(arrNotebooks);
};

function printDefaultInfo(i, arrNotebooks) {
   let form = document.getElementById('all_info').getElementsByTagName('form');

   if (arrNotebooks[i].type == 'laptop') {
      form[0].innerHTML += `<div class="prop-default">
                              <div class="prop-info" id="details${i}">
                                 <div class="sub-prop"><span>Бренд</span> <span>${arrNotebooks[i].brand}</span></div>
                                 <div class="sub-prop"><span>Год выпуска</span> <span>${arrNotebooks[i].year}</span></div>
                                 <div class="sub-prop"><span>Процессор</span> <span>${arrNotebooks[i].processor}</span></div>
                                 <div class="sub-prop"><span>Количество ядер</span> <span>${arrNotebooks[i].core}</span></div>
                                 <div class="sub-prop"><span>ОЗУ</span> <span>${arrNotebooks[i].ram}</span></div>
                                 <div class="sub-prop"><span>Диск</span> <span>${arrNotebooks[i].hardDrive}</span></div>
                                 <div class="sub-prop"><span>TouchBar</span> <span>${arrNotebooks[i].touchBar}</span></div>
                                 <div class="sub-prop"><span>GPU</span> <span>${arrNotebooks[i].gpu}</span></div>
                                 <div class="sub-prop"><span>Вес</span> <span>${arrNotebooks[i].weight}</span></div>
                              </div>                              
                           </div>`

      form[0].innerHTML += `<input type="button" class="buttons" id="mainMenu2" value="Главное меню">`;

   } else if (arrNotebooks[i].type == 'ultra') {
      form[0].innerHTML += `<div class="prop-default">
                              <div class="prop-info" id="details${i}">
                                 <div class="sub-prop"><span>Бренд</span> <span>${arrNotebooks[i].brand}</span></div>
                                 <div class="sub-prop"><span>Год выпуска</span> <span>${arrNotebooks[i].year}</span></div>
                                 <div class="sub-prop"><span>Процессор</span> <span>${arrNotebooks[i].processor}</span></div>
                                 <div class="sub-prop"><span>Количество ядер</span> <span>${arrNotebooks[i].core}</span></div>
                                 <div class="sub-prop"><span>ОЗУ</span> <span>${arrNotebooks[i].ram}</span></div>
                                 <div class="sub-prop"><span>Диск</span> <span>${arrNotebooks[i].hardDrive}</span></div>
                                 <div class="sub-prop"><span>screeenSize</span> <span>${arrNotebooks[i].screeenSize}</span></div>
                                 <div class="sub-prop"><span>Открытие одной рукой</span> <span>${arrNotebooks[i].open}</span></div>
                                 <div class="sub-prop"><span>Вес</span> <span>${arrNotebooks[i].weight}</span></div>
                              </div>                              
                           </div>`

      form[0].innerHTML += `<input type="button" class="buttons" id="mainMenu2" value="Главное меню">`;
   };

   document.getElementById('mainMenu2').addEventListener('click', () => {
      document.getElementById('all_info').getElementsByTagName('form')[0].innerHTML = "";
      display('information');
   });
};

function printInfo(arrNotebooks) {
   let form = document.getElementById('information').getElementsByTagName('form');
   form[0].innerHTML = '';

   arrNotebooks.forEach((elem, i) => {
      console.log('элееньт',elem.weight)
      form[0].innerHTML += `<div class="prop-notebook">
                              <div class="text-details" id="details${i}">
                                 <div class="prop-brand">${elem.brand}</div>
                                 <div class="prop-year">${elem.year}</div>
                                 <div class="prop-processor">${elem.processor}</div>
                                 <div class="prop-core">${elem.core}</div>
                                 <div class="prop-ram">${elem.ram}</div>
                                 <div class="prop-hardDrive">${elem.hardDrive}</div>
                                 <div class="prop-weight">${elem.weight}</div>
                              </div>                              
                              <div class="action">
                                 <div class="edit" id="edit${i}">Редактировать</div>
                                 <div class="remove" id="remove${i}">Удалить</div>
                              </div>
                           </div>`
   });

   form[0].innerHTML += `<br><input type="button" id="newCreateNote" class="buttons" value="Создать ноутбук">`;

   for (let i = 0; i < arrNotebooks.length; i++) {
      let edit = `edit${i}`;
      let remove = `remove${i}`;
      let details = `details${i}`;


      document.getElementById(edit).style.color = 'blue';
      document.getElementById(remove).style.color = 'red';
      document.getElementById(details).style.color = 'green';

      document.getElementById(details).addEventListener('click', () => {
         printDefaultInfo(i, arrNotebooks);
         display('all_info');

      });

      document.getElementById(edit).addEventListener('click', () => {
         console.log(edit);
         currentIndex = parseInt(edit.match(/\d+/));
         currentIndex = Number(currentIndex);
         editNote(i, arrNotebooks);
      });

      document.getElementById(remove).addEventListener('click', () => {
         if (confirm(`Удаляем ноутбук ${arrNotebooks[i].brand} ?`)) {
            deleteNote(i, arrNotebooks);
         };
      });
   };
   document.getElementById('newCreateNote').addEventListener('click', () => {
      document.querySelector('#createNotebook').className  = 'buttons';
      display('create_note');
      // document.getElementById('createNote').style.display = "";
   })

};

function display(visibleId) {
   switch (visibleId) {
      case 'create_note':
         document.getElementById('information').style.display = 'none';
         document.getElementById('all_info').style.display = 'none';
         document.getElementById('create_note').style.display = 'block';
         break;
      case 'all_info':
         document.getElementById('information').style.display = 'none';
         document.getElementById('all_info').style.display = 'block';
         document.getElementById('create_note').style.display = 'none';
         break;
      case 'information':
         document.getElementById('information').style.display = 'block';
         document.getElementById('all_info').style.display = 'none';
         document.getElementById('create_note').style.display = 'none';
         break;
   };
};

let radio = document.getElementsByName('radio');
function checkRadio() {
   for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
         return (radio[i].value);
      }
   }
};

display('information');
printInfo(arrNotebooks);

document.getElementById('createNotebook').addEventListener('click', renderInputs );

function renderInputs(){
   let index;

   if(document.getElementById('createNotebook').className === 'buttons edit__but'){
      index = currentIndex;
      console.log('отредактировал');
   } else{
      console.log('добавил');
      index = arrNotebooks.length;
   }

   document.getElementById('mainMenu').style.display = '';
   let type = checkRadio();

   let brand = document.getElementById('brand').value,
      year = document.getElementById('year').value,
      processor = document.getElementById('processor').value,
      core = document.getElementById('core').value,
      ram = document.getElementById('ram').value,
      hardDrive = document.getElementById('hardDrive').value,
      touchBar = document.getElementById('touchBar').value,
      gpu = document.getElementById('gpu').value,
      screeenSize = document.getElementById('screeenSize').value,
      open = document.getElementById('open').value,
      weight = document.getElementById('weight').value;
      console.log('вус элемента:', weight)

   switch (type) {
      case 'laptop':
         if (brand.trim() == '' || year.trim() == '' || processor.trim() == '' || core.trim() == ''
            || ram.trim() == '' || hardDrive.trim() == '' || weight.trim() == '' || touchBar.trim() == '' || gpu.trim() == '') {
            alert('Заполните все поля');
         } else {
            arrNotebooks[index] = new Laptop(brand, year, processor, core, ram, hardDrive, weight, touchBar, gpu);
            printInfo(arrNotebooks);
            display('information');
            alert('Добавили laptop');
         }

         break;
      case 'ultra':
         if (brand.trim() == '' || year.trim() == '' || processor.trim() == '' || core.trim() == ''
            || ram.trim() == '' || hardDrive.trim() == '' || weight.trim() == '' || screeenSize.trim() == '' || open.trim() == '') {
            alert('Заполните все поля');
         } else {
            arrNotebooks[index] = new Ultra(brand, year, processor, core, ram, hardDrive, weight, screeenSize, open);
            printInfo(arrNotebooks);
            display('information');
            alert('Добавили ultrabook');
         }

         break;

      default:
         break;
   }
}

document.getElementById('mainMenu').addEventListener('click', () => {
   display('information');

});
