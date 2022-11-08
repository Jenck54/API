$(".berries").click(() => {
    $.get("https://pokeapi.co/api/v2/berry/", (data) => {
        $("#resultsBerries").html("").css("display","block")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsBerries").html($("#resultsBerries").html() + "<div onclick =\"detailsBerries('"+ data.results[index].url + "')\">" + data.results[index].name + "</div>")
        }
        // $("#resultsBerries").html($("#resultsBerries").html() + "nombre :" + data.count)
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"precedent('"+data.previous+"')\">Précedent</button>")
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"suivant('"+data.next+"')\">Suivant</button>")
    })
})
$(".contests").click(() => {
    $.get("https://pokeapi.co/api/v2/contest-type/", (data) => {
        $("#resultsBerries").html("").css("display","block")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsBerries").html($("#resultsBerries").html() + "<div onclick =\"detailsContests('"+ data.results[index].url + "')\">" + data.results[index].name + "</div>")
        }
        // $("#resultsBerries").html($("#resultsBerries").html() + "nombre :" + data.count)
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"precedent('"+data.previous+"')\">Précedent</button>")
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"suivant('"+data.next+"')\">Suivant</button>")
    })
})
$(".encounters").click(() => {
    $.get("https://pokeapi.co/api/v2/encounter-method/", (data) => {
        $("#resultsBerries").html("").css("display","block")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsBerries").html($("#resultsBerries").html() + "<div onclick =\"detailsEncounters('"+ data.results[index].url + "')\">" + data.results[index].name + "</div>")
        }
        // $("#resultsBerries").html($("#resultsBerries").html() + "nombre :" + data.count)
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"precedent('"+data.previous+"')\">Précedent</button>")
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"suivant('"+data.next+"')\">Suivant</button>")
    })
})
$(".evolution").click(() => {
    $.get("https://pokeapi.co/api/v2/evolution-chain/", (data) => {
        $("#resultsBerries").html("").css("display","block")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsBerries").html($("#resultsBerries").html() + "<div onclick =\"detailsEvolution('"+ data.results[index].url + "')\">" + index + "</div>")
        }
        // $("#resultsBerries").html($("#resultsBerries").html() + "nombre :" + data.count)
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"precedent('"+data.previous+"')\">Précedent</button>")
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"suivant('"+data.next+"')\">Suivant</button>")
    })
})
$(".games").click(() => {
    $.get("https://pokeapi.co/api/v2/generation/", (data) => {
        $("#resultsBerries").html("").css("display","block")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsBerries").html($("#resultsBerries").html() + "<div onclick =\"detailsGames('"+ data.results[index].url + "')\">" + data.results[index].name + "</div>")
        }
        // $("#resultsBerries").html($("#resultsBerries").html() + "nombre :" + data.count)
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"precedent('"+data.previous+"')\">Précedent</button>")
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"suivant('"+data.next+"')\">Suivant</button>")

    })
})
$(".items").click(() => {
    $.get("https://pokeapi.co/api/v2/item/", (data) => {
        $("#resultsBerries").html("").css("display","block")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsBerries").html($("#resultsBerries").html() + "<div onclick =\"detailsItems('"+ data.results[index].url + "')\">" + data.results[index].name + "</div>")
        }
        // $("#resultsBerries").html($("#resultsBerries").html() + "nombre :" + data.count)
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"precedent('"+data.previous+"')\">Précedent</button>")
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"suivant('"+data.next+"')\">Suivant</button>")
    })
})
$(".locations").click(() => {
    $.get("https://pokeapi.co/api/v2/location/", (data) => {
        $("#resultsBerries").html("").css("display","block")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsBerries").html($("#resultsBerries").html() + "<div onclick =\"detailsLocations('"+ data.results[index].url + "')\">" + data.results[index].name + "</div>")
        }
        // $("#resultsBerries").html($("#resultsBerries").html() + "nombre :" + data.count)
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"precedent('"+data.previous+"')\">Précedent</button>")
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"suivant('"+data.next+"')\">Suivant</button>")
    })
})
$(".machines").click(() => {
    $.get("https://pokeapi.co/api/v2/machine/", (data) => {
        $("#resultsBerries").html("").css("display","block")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsBerries").html($("#resultsBerries").html() + "<div onclick =\"detailsMachines('"+ data.results[index].url + "')\">" + index + "</div>")
        }
        // $("#resultsBerries").html($("#resultsBerries").html() + "nombre :" + data.count)
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"precedent('"+data.previous+"')\">Précedent</button>")
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"suivant('"+data.next+"')\">Suivant</button>")
    })
})
$(".moves").click(() => {
    $.get("https://pokeapi.co/api/v2/move/", (data) => {
        $("#resultsBerries").html("").css("display","block")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsBerries").html($("#resultsBerries").html() + "<div onclick =\"detailsMoves('"+ data.results[index].url + "')\">" + data.results[index].name + "</div>")
        }
        // $("#resultsBerries").html($("#resultsBerries").html() + "nombre :" + data.count)
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"precedent('"+data.previous+"')\">Précedent</button>")
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"suivant('"+data.next+"')\">Suivant</button>")
    })
})
$(".pokemon").click(() => {
    $.get("https://pokeapi.co/api/v2/ability/", (data) => {
        $("#resultsBerries").html("").css("display","block")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsBerries").html($("#resultsBerries").html() + "<div onclick =\"detailsPokemon('"+ data.results[index].url + "')\">" + data.results[index].name + "</div>")
        }
        // $("#resultsBerries").html($("#resultsBerries").html() + "nombre :" + data.count)
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"precedent('"+data.previous+"')\">Précedent</button>")
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"suivant('"+data.next+"')\">Suivant</button>")
    })
})
function suivant (url) {
    let get_url = new URL(url)
    let search_url = get_url.searchParams
    let url_limit = search_url.get('limit')
        if (url_limit <20 ) {
            search_url.set('limit', 20)
            get_url.toString()
        }
    $.get(get_url.toString(), (data)=> {
        $("#resultsBerries").html("").css("display","block")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsBerries").html($("#resultsBerries").html() + "<div onclick =\"detailsBerries('"+ data.results[index].url + "')\">" + (data.results[index].name||(i+1)) + "</div>")
        }
        // $("#resultsBerries").html($("#resultsBerries").html() + "nombre :" + data.count)
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"precedent('"+data.previous+"')\">Précedent</button>")
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"suivant('"+data.next+"')\">Suivant</button>")
    })
}
function precedent (url) {
    let get_url = new URL(url)
    let search_url = get_url.searchParams
    let url_limit = search_url.get('limit')
        if (url_limit <20 ) {
            search_url.set('limit', 20)
            get_url.toString()
        }
    $.get(get_url.toString(), (data)=> {
        $("#resultsBerries").html("").css("display","block")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsBerries").html($("#resultsBerries").html() + "<div onclick =\"detailsBerries('"+ data.results[index].url + "')\">" + (data.results[index].name||(i+1)) + "</div>")
        }
        // $("#resultsBerries").html($("#resultsBerries").html() + "nombre :" + data.count)
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"precedent('"+data.previous+"')\">Précedent</button>")
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"suivant('"+data.next+"')\">Suivant</button>")
    })
}
function detailsBerries (url) {
    $.get (url, (data)=> {
        $("#detailsBerries").html("").css("display","block")
        $("#detailsBerries").html($("#detailsBerries").html() + "Nom :" + data.name + "<br>")
        $("#detailsBerries").html($("#detailsBerries").html() + "Fermeté :" + data.firmness.name + "<br>") 
        for (let index = 0; index < data.flavors.length; index++) {
            const element = data.flavors[index];
            if (element.potency > 0) {
            $("#detailsBerries").html($("#detailsBerries").html() + "Saveurs :" + element.flavor.name + " : note : "+ element.potency+"<br>")
            }
        }
        $("#detailsBerries").html($("#detailsBerries").html() + "Temps de croissance :" + data.growth_time + "min" + "<br>")
        $("#detailsBerries").html($("#detailsBerries").html() + "Récolte maximale :" + data.max_harvest + "<br>")
        $("#detailsBerries").html($("#detailsBerries").html() + "Taille :" + data.size + "<br>")
        $("#detailsBerries").html($("#detailsBerries").html() + "Douceur :" + data.smoothness + "<br>")
        $("#detailsBerries").html($("#detailsBerries").html() + "Sécheresse du sol :" + data.soil_dryness + "<br>")
    })
}
function detailsContests (url) {
    $.get (url, (data)=> {
        $("#detailsBerries").html("").css("display","block")
        $("#detailsBerries").html($("#detailsBerries").html() + "Nom :" + data.name + "<br>")
    })
}
function detailsEncounters (url) {
    $.get (url, (data)=> {
        $("#detailsBerries").html("").css("display","block")
        $("#detailsBerries").html($("#detailsBerries").html() + "Nom :" + data.name + "<br>")
    })
}
function detailsEvolution (url) {
    $.get (url, (data)=> {
        $("#detailsBerries").html("").css("display","block")
        $("#detailsBerries").html($("#detailsBerries").html() + "Pokemon de base :" + data.chain.species.name + "<br>")
        $("#detailsBerries").html($("#detailsBerries").html() + "1ere Evolution :" + data.chain.evolves_to[0].species.name + "<br>")
        if (data.chain.evolves_to[0].evolves_to[0]!==undefined) {
            $("#detailsBerries").html($("#detailsBerries").html() + "2e Evolution :" + data.chain.evolves_to[0].evolves_to[0].species.name + "<br>")
        }
    })
}
function detailsGames (url) {
    $.get (url, (data)=> {
        $("#detailsBerries").html("").css("display","block")
        $("#detailsBerries").html($("#detailsBerries").html() + "Région principale :" + data.main_region.name + "<br>")
        for (let index = 0; index < data.pokemon_species.length; index++) {
            const element = data.pokemon_species[index];
            if (element.name !==undefined) {
                $("#detailsBerries").html($("#detailsBerries").html() + "Espèces de pokemon :" + element.name + "<br>")
            }
        }
    })
}
function detailsItems (url) {
    $.get (url, (data)=> {
        $("#detailsBerries").html("").css("display","block")
        $("#detailsBerries").html($("#detailsBerries").html() + "Nom :" + data.name + "<br>")
        $("#detailsBerries").html($("#detailsBerries").html() + "Photo : <img class=\"image\" src='" + data.sprites.default + "'><br>")
        for (let index = 0; index < data.attributes.length; index++) {
            const element = data.attributes[index];
            if (element.name !==undefined) {
                $("#detailsBerries").html($("#detailsBerries").html() + "Attributs :" + element.name + "<br>")
            }
        }
    })
}
function detailsLocations (url) {
    $.get (url, (data)=> {
        $("#detailsBerries").html("").css("display","block")
        $("#detailsBerries").html($("#detailsBerries").html() + "Nom :" + data.name + "<br>")
        for (let index = 0; index < data.areas.length; index++) {
            const element = data.areas[index];
            if (element.name !==undefined) {
                $("#detailsBerries").html($("#detailsBerries").html() + "Zone :" + element.name + "<br>")
            }
        }
        for (let index = 0; index < data.game_indices.length; index++) {
            const element = data.game_indices[index];
            if (element.generation.name !==undefined) {
                $("#detailsBerries").html($("#detailsBerries").html() + "Generation :" + element.generation.name + "<br>")
            }
        }
    })
}
function detailsMachines (url) {
    $.get (url, (data)=> {
        $("#detailsBerries").html("").css("display","block")
        $("#detailsBerries").html($("#detailsBerries").html() + "Attaque :" + data.move.name + "<br>")
        $("#detailsBerries").html($("#detailsBerries").html() + "Version de jeu :" + data.version_group.name + "<br>")
    })
}
function detailsMoves (url) {
    $.get (url, (data)=> {
        $("#detailsBerries").html("").css("display","block")
        $("#detailsBerries").html($("#detailsBerries").html() + "Nom :" + data.name + "<br>")
        if (data.accuracy == null) {
            data.accuracy = 0
        }
        $("#detailsBerries").html($("#detailsBerries").html() + "Précision :" + data.accuracy + "%" + "<br>")
        $("#detailsBerries").html($("#detailsBerries").html() + "Type de dommage :" + data.damage_class.name + "<br>")
        $("#detailsBerries").html($("#detailsBerries").html() + "Generation :" + data.generation.name + "<br>")
        $("#detailsBerries").html($("#detailsBerries").html() + "Type d'attaque :" + data.type.name + "<br>")
        if (data.power == null) {
            data.power = 0
        }
        $("#detailsBerries").html($("#detailsBerries").html() + "Puissance :" + data.power + "<br>")
        if (data.pp == null) {
            data.pp = 0
        }
        $("#detailsBerries").html($("#detailsBerries").html() + "PP :" + data.pp + "<br>")
        if (data.priority == null) {
            data.priority = 0
        }
        $("#detailsBerries").html($("#detailsBerries").html() + "Priorité :" + data.priority + "<br>")
        for (let index = 0; index < data.learned_by_pokemon.length; index++) {
            const element = data.learned_by_pokemon[index];
            if (element.name !== undefined) {
                $("#detailsBerries").html($("#detailsBerries").html() + "Appris par :" + element.name + "<br>")
            }
        }
    })
}