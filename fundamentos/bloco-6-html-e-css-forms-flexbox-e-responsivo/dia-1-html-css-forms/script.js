function createStates (){
let estados = document.getElementById('state');
let todosEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

for(let i =0; i <todosEstados.length; i+=1){
    let option = document.createElement('option');
    option.innerText = todosEstados[i];
    option.value = todosEstados[i];
    estados.appendChild(option);
}
}
createStates();