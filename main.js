  
document.addEventListener("DOMContentLoaded",()=>{
    const keys = document.querySelectorAll(".key-row button")
    let guswords = [[]];
    let word = "Mango";
    let avlspc = 1;
    let count = 0;
    function currentwordarr() {
        const size = guswords.length;
        return guswords[size-1];
    }
    function update(letter) {
        const currentword = currentwordarr();
        if(currentword && currentword.length < 5){
            currentword.push(letter);
            const spacee = document.getElementById(String(avlspc))
            avlspc += 1;
            spacee.textContent = letter  
        }
    }
    function Enterword() {
        const len = currentwordarr();
        if(len.length!==5){
            window.alert("Length should be only of 5 word")
        }
        const guesedword = len.join('')
        
        if(word === guesedword){
            window.alert("You won")
            return; 
        }
        if (guswords.length === 6) {
            window.alert(`No more guesses and the word is, ${word}`)
        }
        guswords.push([])
    }

    // function remove(key) {
    //     const div = document.getElementById(String(avlspc))
    //     div.value = '';
    // }
    for (let i = 0; i < keys.length; i++) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        keys[i].onclick = ({target}) =>{
            const key = target.getAttribute("data-key");
            if(key === 'ENTER'){
                Enterword();
                return;
            }
            if(key === '>>'){
                removeword(key);
                return;
            }
            update(key)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    }

});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
