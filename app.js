/* ----------------------------------------------------------------------------

Exercício: 004
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES
    
    Estão disponíveis três input ranges e respetivas áreas de apresentação dos valores.
    Criar os mecanismos que permitem visualizar os valores dos sliders.
    Todos os sliders devem variar entre 0 e 100. Essas propriedades devem ser
    definidas através do JavaScript.

---------------------------------------------------------------------------- */
// // é uma boa prática sempre criar os nomes de const e variaveis com o nome do elemento que está vai buscar
const range_1 = document.querySelector("#range_1");
// // agora vamor definir a variação do range atraves do java script
// // o atributo minimo do range será 0
range_1.setAttribute('min', 0);
// // o atributo máximo do range será 100
range_1.setAttribute('max', 100);
// // agora definiremos o valor inicial do range
range_1.value = 0;
// // agora vamos criar um evento de escuta o tipo do evento é o input
// // quando o evento input for ativado vai escutar uma arow function
// // que fará o seguinte buscara o value_1 pelo id no html e vai modifica-lo
range_1.addEventListener('input', (event)=>{
    // // busca o value_1 usa textContent para modifica-lo 
    // // o target e o range_1 entao quando acionar vai buscar o span e modificar o valor no html
    document.querySelector('#value_1').textContent = event.target.value;
})
// // é uma boa prática sempre criar os nomes de const e variaveis com o nome do elemento que está vai buscar
const range_2 = document.querySelector("#range_2");
// // agora vamor definir a variação do range atraves do java script
// // o atributo minimo do range será 0
range_2.setAttribute('min', 0);
// // o atributo máximo do range será 100
range_2.setAttribute('max', 100);
// // agora definiremos o valor inicial do range
range_2.value = 0;
// // agora vamos criar um evento de escuta o tipo do evento é o input
// // quando o evento input for ativado vai escutar uma arow function
// // que fará o seguinte buscara o value_2 pelo id no html e vai modifica-lo
range_2.addEventListener('input', (event)=>{
    // // busca o value_2 usa textContent para modifica-lo 
    // // o target e o range_1 entao quando acionar vai buscar o span e modificar o valor no html
    document.querySelector('#value_2').textContent = event.target.value;
})
// // é uma boa prática sempre criar os nomes de const e variaveis com o nome do elemento que está vai buscar
const range_3 = document.querySelector("#range_3");
// // agora vamor definir a variação do range atraves do java script
// // o atributo minimo do range será 0
range_3.setAttribute('min', 0);
// // o atributo máximo do range será 100
range_3.setAttribute('max', 100);
// // agora definiremos o valor inicial do range
range_3.value = 0;
// // agora vamos criar um evento de escuta o tipo do evento é o input
// // quando o evento input for ativado vai escutar uma arow function
// // que fará o seguinte buscara o value_3 pelo id no html e vai modifica-lo
range_3.addEventListener('input', (event)=>{
    // // busca o value_3 usa textContent para modifica-lo 
    // // o target e o range_1 entao quando acionar vai buscar o span e modificar o valor no html
    document.querySelector('#value_3').textContent = event.target.value;
})