const getChefBirthday = async (id) => {

    let ric
    let ricetta

    try {
        ric = await fetch(`https://dummyjson.com/recipes/${id}`)
        ricetta = await ric.json()

    } catch (error) {
        throw new Error(`Non è stato possibile trovare la ricetta con id ${id}`)
    }

    let chef
    let idChef


    try {
        chef = await fetch(`https://dummyjson.com/users/${ricetta.userId}`)
        idChef = await chef.json()

    } catch (error) {
        throw new Error(`Non è stato possibile trovare lo chef con id ${ricetta.userId}`)

    }
    return idChef.birthDate

}

(async () => {
    try {
        const birthDate = await getChefBirthday(3)
        console.log(`Ecco la data di compleanno dello chef:`, birthDate)

        if (birthDate === undefined) {
            throw new Error(`Hai inserito un id non valido`)
        }

    } catch (error) {
        console.error(error)

    } finally {
        console.log(`Fine operazione!`)
    }
})();
