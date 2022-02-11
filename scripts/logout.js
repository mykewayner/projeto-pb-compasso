export default function logout(){
    const time = document.querySelector('.refresh-time')
    const number = 600
    const button = document.querySelector('.logout-button button')

    setInterval(() => {
        time.innerHTML = number 
        number--
        if(number === 0){
          window.location.reload()
        }
    }, 1000);

    button.addEventListener("click", () => {
        window.location.reload();
    }

    )




  }