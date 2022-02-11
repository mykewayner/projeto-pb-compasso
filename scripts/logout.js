export default function logout(){
    const time = document.querySelector('#refresh-time');
    const button = document.querySelector('#logout-button button');
    let seconds = 600;
    

    setInterval(() => {
        time.innerHTML = seconds 
        seconds--
        if(seconds === 0){
          window.location.reload()
        }
    }, 1000);

    button.addEventListener("click", () => {
        window.location.reload();
    }
    )




  }