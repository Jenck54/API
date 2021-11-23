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
            $("#resultsBerries").html($("#resultsBerries").html() + "<div onclick =\"detailsMachines('"+ index.url + "')\">" + index.name + "</div>")
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
            $("#resultsBerries").html($("#resultsBerries").html() + data.results[index].name + "<br>")
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
            $("#resultsBerries").html($("#resultsBerries").html() + data.results[index].name + "<br>")
        }
        // $("#resultsBerries").html($("#resultsBerries").html() + "nombre :" + data.count)
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"precedent('"+data.previous+"')\">Précedent</button>")
        $("#resultsBerries").html($("#resultsBerries").html() + "<button class=\"bouton\" onclick=\"suivant('"+data.next+"')\">Suivant</button>")
    })
}
function detailsBerries (url) {
    console.log(url);
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