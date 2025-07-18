const getChefBirthday = async (id) => {
    const ric = await fetch(`https://dummyjson.com/recipes/${id}`)
    const ricetta = await ric.json()
    return ricetta
}

(async () => {
    const ricetta = await getChefBirthday(3)
    console.log(ricetta)
})();
