const addToFavoriteButtons = document.querySelectorAll("a.movie-card__button");

addToFavoriteButtons.forEach((addTofavoriteButton) => {
    addTofavoriteButton.addEventListener("click", (e) => {
        e.preventDefault();
        fetch(addTofavoriteButton.getAttribute("href")).then(response => {
            if(response.status==200){
                M.toast({html: "Se ha agregado la película a favoritos.", classes: "color-success-bg"});
            }else if(response.status == 600){
                M.toast({html: "La película ya se encuentra en favoritos.", classes: "color-error-bg"});
            }
        }).catch((e)=>{
            console.log(e);
        });;
    });
});