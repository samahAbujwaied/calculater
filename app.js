'use strict';
let ViewForm = document.getElementById('ViewForm');
function update() {
				let select = document.getElementById('myList');
				let option = select.options[select.selectedIndex];

			 if (option.value=="scince"){
         let newline1 = document.createElement('br')
         let input1 = document.createElement('input');
         let lable1 = document.createElement('lable');
         ViewForm.appendChild(input1);
         ViewForm.appendChild(lable1);
         ViewForm.appendChild(newline1);
         lable1.innerHTML = " : ادخل علامة الرياضيات للورقة الاولى ";


         let newline2 = document.createElement('br')
         let input2 = document.createElement('input');
         let lable2 = document.createElement('lable');
         ViewForm.appendChild(input2);
         ViewForm.appendChild(lable2);
         ViewForm.appendChild(newline2);
         lable2.innerHTML = " : ادخل علامة الرياضيات للورقة الثانية";


         // let newline3 = document.createElement('br')
         // let input3 = document.createElement('input');
         // let lable3 = document.createElement('lable');
         // ViewForm.appendChild(input3);
         // ViewForm.appendChild(lable3);
         // ViewForm.appendChild(newline3);
         // lable3.innerHTML ="  : ادخل علامة الفيزياء ";

         let newline4 = document.createElement('br')
         let input4 = document.createElement('input');
         let lable4 = document.createElement('lable');
         ViewForm.appendChild(input4);
         ViewForm.appendChild(lable4);
         ViewForm.appendChild(newline4);
         lable4.innerHTML ="  : ادخل اول اعلى علامة لمادة علمية ";

         let newline5 = document.createElement('br')
         let input5 = document.createElement('input');
         let lable5 = document.createElement('lable');
         ViewForm.appendChild(input5);
         ViewForm.appendChild(lable5);
         ViewForm.appendChild(newline5);
         lable5.innerHTML ="  : ادخل ثاني اعلى علامة لمادة علمية ";

         let newline6 = document.createElement('br')
         let input6 = document.createElement('input');
         let lable6 = document.createElement('lable');
         ViewForm.appendChild(input6);
         ViewForm.appendChild(lable6);
         ViewForm.appendChild(newline6);
         lable6.innerHTML =" :  ادخل علامة العربي  ";

         let newline7 = document.createElement('br')
         let input7 = document.createElement('input');
         let lable7 = document.createElement('lable');
         ViewForm.appendChild(input7);
         ViewForm.appendChild(lable7);
         ViewForm.appendChild(newline7);
         lable7.innerHTML =" : ادخل علامة التربية الاسلامية  ";


         let newline8 = document.createElement('br')
         let input8 = document.createElement('input');
         let lable8 = document.createElement('lable');
         ViewForm.appendChild(input8);
         ViewForm.appendChild(lable8);
         ViewForm.appendChild(newline8);
         lable8.innerHTML ="  : ادخل علامة اللغة العربية ";


         let newline9 = document.createElement('br')
         let input9 = document.createElement('input');
         let lable9 = document.createElement('lable');
         ViewForm.appendChild(input9);
         ViewForm.appendChild(lable9);
         ViewForm.appendChild(newline9);
         lable9.innerHTML ="  : ادخل علامة اللغة الانجليزية ";


         let newline = document.createElement('br')
         let supmit = document.createElement('button');
         supmit.setAttribute("type", "submit");
         ViewForm.appendChild(newline);
         ViewForm.appendChild(supmit);
         supmit.innerHTML='احتساب المعدل'


            supmit.addEventListener('click',btn);



          function btn(event) {
            event.preventDefault();
            let math = (parseInt(input1.value)  + parseInt(input2.value))/2
            let totalScinece = (math + parseInt(input1.value) + parseInt(input5.value))/10
            let totalAcadimec = (parseInt(input6.value) + parseInt(input7.value) + parseInt(input8.value) + parseInt(input9.value))/20

            let newline = document.createElement('br')
            let result = document.createElement('p');
            ViewForm.appendChild(newline);
            ViewForm.appendChild(result);
           console.log(totalScinece);
           console.log(totalAcadimec);

              result.innerHTML= '  معدلك هو '
              result.innerHTML+= totalScinece + totalAcadimec




          }

       }

			}
