 function wait(ms=0){
    return new Promise(resolve => setTimeout(resolve, ms));
 }

 function getRandomNum(min,max, randomNum = Math.random()){
    return Math.floor(randomNum*  (max-min) +min)
 }

 async function draw(element){

    const text = element.textContent;
    let soFar = ''
    for(const letter of text){
        soFar += letter;
        element.textContent = soFar;
        console.log(element.dataset);
      const {typeMin, typeMax} = element.dataset;


        const timeToWait = getRandomNum(typeMin,typeMax)

          await wait (timeToWait)
     }
 }

 const elements = document.querySelectorAll('[data-type]');
 
elements.forEach(draw)
