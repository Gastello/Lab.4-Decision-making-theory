let default__table = document.querySelector('.default__table');
let default__tr = document.querySelector('.default__tr');
let sevig__table = document.querySelector('.sevig__table');
let sevig__tr = document.querySelector('.sevig__tr');

let maximax_area = document.querySelector('.maximax_area');
let minimax_area = document.querySelector('.minimax_area');
let gurvic_area = document.querySelector('.gurvic_area');
let sevig_area = document.querySelector('.sevig_area');

let yCount = prompt(`Введіть к-сть Y:`);
while (!isNumeric(yCount)) {
   yCount = prompt(`Введіть число!`);
}
for (let i = 1; i <= yCount; i++) {
   default__tr.insertAdjacentHTML(
      `beforeend`,
      `
      <th class="table__th">Y${i}</th>
      `
   )
}

let xCount = prompt(`Введіть к-сть X:`);
while (!isNumeric(xCount)) {
   xCount = prompt(`Введіть число!`);
}

for (let i = 1; i <= xCount; i++) {
   default__table.insertAdjacentHTML(
      `beforeend`,
      `
      <tr>
         <td class="table__td table__td_bold">X${i}</td>
      </tr>
      `
   )
}

let aValues = [];
for (let i = 0; i < xCount; i++) {
   let bufferArray = [];
   for (let j = 0; j < yCount; j++) {
      let a = prompt(`Введіть A${i + 1}${j + 1}:`);
      while (!isNumeric(a)) {
         a = prompt(`Введіть число!`);
      }
      bufferArray.push(+a);
      default__table.children[i + 1].children[0].insertAdjacentHTML(
         `beforeend`,
         `
         <tr>
            <td class="table__td">${a}</td>
         </tr>
         `
      )
   }
   aValues.push(bufferArray);
}

//========================MAXI-MAX==============================
// z1=max(zi)=max(45;25;50)=50
let maxiMaxArr = [];
for (let i = 0; i < xCount; i++) {
   let zi = Math.max(...aValues[i]);
   maxiMaxArr.push(zi);
   maximax_area.insertAdjacentHTML(
      `beforeend`,
      `
      <div class="solution">
         ${i + 1}. z${i + 1} = max⁡(zi)= max(${aValues[i].join(';')}) = ${zi}
      </div>
      `
   )
}
// Z=max⁡(zi)=z2
maximax_area.insertAdjacentHTML(
   `beforeend`,
   `
   <div class="solution">
      Z = max⁡(zi) = ${Math.max(...maxiMaxArr)}
   </div>
   `
)
//========================MINI-MAX==============================
// z1=max(zi)=max(45;25;50)=50
let miniMaxArr = [];
for (let i = 0; i < xCount; i++) {
   let zi = Math.min(...aValues[i]);
   miniMaxArr.push(zi);
   minimax_area.insertAdjacentHTML(
      `beforeend`,
      `
      <div class="solution">
         ${i + 1}. z${i + 1} = min(a${i + 1}j) = min(${aValues[i].join(';')}) = ${zi}
      </div>
      `
   )
}
// Z=max⁡(zi)=z2
minimax_area.insertAdjacentHTML(
   `beforeend`,
   `
   <div class="solution">
      Z = max⁡(zi) = ${Math.max(...miniMaxArr)}
   </div>
   `
)
//========================GURVIC==============================
// max⁡(a1j) = max (45;25;50)=50;   min(a1j) = min(45;25;50)=25;
// z1=0,8*50+(1-0,8)*25=40+5=45;
let gurvicOptimistArr = [];
let gurvicPessimistArr = [];
let pessimistGurvic = prompt(`Введіть α для песимістично налаштованої людини:`);
while (!isNumeric(pessimistGurvic)) {
   pessimistGurvic = prompt(`Введіть число!`);
}

let optimistGurvic = prompt(`Введіть α для оптимістично налаштованої людини:`);
while (!isNumeric(optimistGurvic)) {
   optimistGurvic = prompt(`Введіть число!`);
}
gurvic_area.insertAdjacentHTML(
   `beforeend`,
   `
   <div class="solution">
      α = ${optimistGurvic}
   </div>
   `
)
for (let i = 0; i < xCount; i++) {
   // z_1=0,8*50+(1-0,8)*25=40+5=45;
   let gurvicOptimistZ = optimistGurvic * maxiMaxArr[i] + (1 - optimistGurvic) * miniMaxArr[i];
   gurvicOptimistArr.push(gurvicOptimistZ);
   gurvic_area.insertAdjacentHTML(
      `beforeend`,
      `
      <div class="solution">
         ${i + 1}. max a${i + 1}j = max(${aValues[i].join(';')}) = ${maxiMaxArr[i]};
      </div>
      <div class="solution">
         min a${i + 1}j = min(${aValues[i].join(';')}) = ${miniMaxArr[i]};
      </div>
      <div class="solution">
         z${i + 1} = ${optimistGurvic}*${maxiMaxArr[i]}+(1-${optimistGurvic})*${miniMaxArr[i]} = ${gurvicOptimistZ};
      </div>
      `
   )
}
// Z=max⁡〖z_i 〗= max{45;52} = 52 = z_2
gurvic_area.insertAdjacentHTML(
   `beforeend`,
   `
   <div class="solution">
      Z = max(zi) = max(${gurvicOptimistArr.join(`;`)}) = ${Math.max(...gurvicOptimistArr)}
   </div>
   `
)
// α = 0,3
gurvic_area.insertAdjacentHTML(
   `beforeend`,
   `
   <br>
   <div class="solution">
      α = ${pessimistGurvic}
   </div>
   `
)
for (let i = 0; i < xCount; i++) {
   // z_1=0,3*50+(1-0,3)*25=15+17,5=31,5;
   let gurvicPessimistZ = pessimistGurvic * maxiMaxArr[i] + (1 - pessimistGurvic) * miniMaxArr[i];
   gurvicPessimistArr.push(gurvicPessimistZ);
   gurvic_area.insertAdjacentHTML(
      `beforeend`,
      `
      <div class="solution">
         ${i + 1}. max a${i + 1}j = max(${aValues[i].join(';')}) = ${maxiMaxArr[i]};
      </div>
      <div class="solution">
         min a${i + 1}j = min(${aValues[i].join(';')}) = ${miniMaxArr[i]};
      </div>
      <div class="solution">
         z${i + 1} = ${pessimistGurvic}*${maxiMaxArr[i]}+(1-${pessimistGurvic})*${miniMaxArr[i]} = ${gurvicPessimistZ};
      </div>
      `
   )
}
// Z=max⁡〖z_i 〗= max{45;52} = 52 = z_2
gurvic_area.insertAdjacentHTML(
   `beforeend`,
   `
   <div class="solution">
      Z = max(zi) = max(${gurvicPessimistArr.join(`;`)}) = ${Math.max(...gurvicPessimistArr)}
   </div>
   `
)
//========================SEVIG==============================
let sevigMaxArray = [];
let sevigArray = [];
sevig_area.insertAdjacentHTML(
   `beforeend`,
   `
   <div class="solution">
      Знайдемо найбільший можливий прибуток для кожного стану середовища yj
   </div>
   `
)

for (let i = 0; i < yCount; i++) {
   let sevigBufferArray = [];
   for (let j = 0; j < xCount; j++) {
      sevigBufferArray.push(aValues[j][i]);
   }
   let sevigMaxOfArray = Math.max(...sevigBufferArray);
   sevigMaxArray.push(sevigMaxOfArray);
   // y1: max{45;20}=45;
   sevig_area.insertAdjacentHTML(
      `beforeend`,
      `
      <div class="solution">
         y${i + 1}: max(${sevigBufferArray.join(`;`)}) = ${sevigMaxOfArray};
      </div>
      `
   )
}

for (let i = 0; i < xCount; i++) {
   let bufferArray = [];
   for (let j = 0; j < yCount; j++) {
      bufferArray.push(sevigMaxArray[j] - aValues[i][j]);
   }
   sevigArray.push(bufferArray);
}
for (let i = 1; i <= yCount; i++) {
   sevig__tr.insertAdjacentHTML(
      `beforeend`,
      `
      <th class="table__th">Y${i}</th>
      `
   )
}
sevig__tr.insertAdjacentHTML(
   `beforeend`,
   `
   <th class="table__th">Max.н.д.</th>
   `
)
for (let i = 1; i <= xCount; i++) {
   sevig__table.insertAdjacentHTML(
      `beforeend`,
      `
      <tr>
         <td class="table__td table__td_bold">X${i}</td>
      </tr>
      `
   )
}
sevig__table.insertAdjacentHTML(
   `beforeend`,
   `
   <tr>
      <td class="table__td table__td_bold">Yj</td>
   </tr>
   `
)
let sevigMaxND = [];
for (let i = 0; i < xCount; i++) {
   for (let j = 0; j < yCount; j++) {
      sevig__table.children[i + 1].children[0].insertAdjacentHTML(
         `beforeend`,
         `
         <tr>
            <td class="table__td">${sevigArray[i][j]}</td>
         </tr>
         `
      )
   }
   let maxND = Math.max(...sevigArray[i]);
   sevigMaxND.push(maxND);
   sevig__table.children[i + 1].children[0].insertAdjacentHTML(
      `beforeend`,
      `
      <tr>
         <td class="table__td">${maxND}</td>
      </tr>
      `
   )
}
for (let j = 0; j < yCount; j++) {
   sevig__table.children[+xCount + 1].children[0].insertAdjacentHTML(
      `beforeend`,
      `
      <tr>
         <td class="table__td">${sevigMaxArray[j]}</td>
      </tr>
      `
   )
}
// Z=min⁡〖z_i 〗= min(35;25)=25=z_2
document.querySelector('.sevig_answer').insertAdjacentHTML(
   `afterend`,
   `
   <div class="solution">
      Z=min(zi) = min(${sevigMaxND.join(`;`)}) = ${Math.min(...sevigMaxND)};
   </div>
   `
)

function isNumeric(n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
} 