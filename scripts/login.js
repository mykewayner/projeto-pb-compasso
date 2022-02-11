export default function login() {

    const user = document.querySelector(".login-input input");
    const password = document.querySelector(".password-input input");
    const button = document.querySelector("#continue-button")
    const errorMsg = document.querySelector("#error-msg p")
    const loginPage = document.querySelector(".login-page")
    const homePage = document.querySelector(".home-page")
    const title = document.querySelector("#title")

    button.addEventListener("click", () => {
        if (user.value !== "admin" && password.value !== "admin"){
            errorMsg.classList.remove("error-msg-visibility")
            user.style.border =  "1px solid #E9B425"
            password.style.border =  "1px solid #E9B425"

        }
        else{
            loginPage.style.display = "none"
            homePage.style.display = "flex"
            title.textContent = "HomePage"
        }
    }
    )
    
    
    
}