const getChefBirthday = async (id) => {
    const ric = await fetch(`https://dummyjson.com/recipes/${id}`)
    const ricetta = await ric.json()
    const chef = await fetch(`https://dummyjson.com/users/${ricetta.userId}`)
    const idChef = await chef.json()
    return idChef.birthDate

}

(async () => {
    const birthDate = await getChefBirthday(1)
    console.log(birthDate)
})();
