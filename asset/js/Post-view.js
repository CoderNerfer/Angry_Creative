const arrowLeftTheme = document.querySelectorAll(".arrowLeftTheme")[0]
const arrowRightTheme = document.querySelectorAll(".arrowRightTheme")[0]

arrowLeftTheme.addEventListener("click", () => {
    const theme = document.getElementById("theme")
    theme.scrollTo({
        left:0,
        top:theme.scrollLeft-500,
        behavior:"smooth"
    })
})

arrowRightTheme.addEventListener("click", () => {
    const theme = document.getElementById("theme")
    theme.scrollTo({
        left:0,
        top:theme.scrollLeft+500,
        behavior:"smooth"
    })
})
