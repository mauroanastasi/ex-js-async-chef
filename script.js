const getChefBirthday = async (id) => {
    const ric = await fetch(`https://dummyjson.com/recipes/${id}`)
    const ricetta = await ric.json()
    const chef = await fetch(`https://dummyjson.com/users/${ricetta.userId}`)
    const idChef = chef.json()
    return idChef

}

(async () => {
    const ricetta = await getChefBirthday(1)
    console.log(ricetta)
})();
