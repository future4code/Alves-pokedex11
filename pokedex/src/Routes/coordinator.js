export const goToPokedexPage = (navigate) => {
    navigate("/pokedex")
}

export const goHomePage = (navigate) => {
    navigate ("/")
}

export const goDetailPage = (navigate,name) => {
    navigate(`/details/${name}`)

  } 

  export const goBack = (navigate) =>{
    navigate(-1)

  }