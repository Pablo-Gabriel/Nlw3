const Database = require('./db');
const saveOrphanage = require("./saveOrphanage");

Database.then(async db => {
    // insert data into the table
    await saveOrphanage(db,{
        lat: "-27.2218739",
        lng: "-49.6335875",
        name: "Lar dos meninos",
        about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "819248912489",
        images: [
            "https://images.unsplash.com/photo-1600712242868-18d4e92fb599?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1602389569471-5df5bde61968?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horários de Visitas Das 18h até 8h",
        open_on_weekends: "0"

    })

    //query data in the table 
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // query just one orphanate by id 
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    // delete data of table
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})