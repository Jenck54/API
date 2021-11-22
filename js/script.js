$(".berries").click(() => {
    $.get("https://pokeapi.co/api/v2/berry/", (data) => {
        $("#resultsBerries").html("")
        $("#resultsContests").html("")
        $("#resultsEncounters").html("")
        $("#resultsEvolution").html("")
        $("#resultsGames").html("")
        $("#resultsItems").html("")
        $("#resultsLocations").html("")
        $("#resultsMachines").html("")
        $("#resultsMachines").html("")
        $("#resultsMoves").html("")
        $("#resultsPokemon").html("")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsBerries").html($("#resultsBerries").html() + data.results[index].name + "<br>")
        }
    })
})
$(".contests").click(() => {
    $.get("https://pokeapi.co/api/v2/contest-type/", (data) => {
        $("#resultsBerries").html("")
        $("#resultsContests").html("")
        $("#resultsEncounters").html("")
        $("#resultsEvolution").html("")
        $("#resultsGames").html("")
        $("#resultsItems").html("")
        $("#resultsLocations").html("")
        $("#resultsMachines").html("")
        $("#resultsMachines").html("")
        $("#resultsMoves").html("")
        $("#resultsPokemon").html("")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsContests").html($("#resultsContests").html() + data.results[index].name + "<br>")
        }
    })
})
$(".encounters").click(() => {
    $.get("https://pokeapi.co/api/v2/encounter-method/", (data) => {
        $("#resultsBerries").html("")
        $("#resultsContests").html("")
        $("#resultsEncounters").html("")
        $("#resultsEvolution").html("")
        $("#resultsGames").html("")
        $("#resultsItems").html("")
        $("#resultsLocations").html("")
        $("#resultsMachines").html("")
        $("#resultsMachines").html("")
        $("#resultsMoves").html("")
        $("#resultsPokemon").html("")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsEncounters").html($("#resultsEncounters").html() + data.results[index].name + "<br>")
        }
    })
})
$(".evolution").click(() => {
    $.get("https://pokeapi.co/api/v2/evolution-chain/", (data) => {
        $("#resultsBerries").html("")
        $("#resultsContests").html("")
        $("#resultsEncounters").html("")
        $("#resultsEvolution").html("")
        $("#resultsGames").html("")
        $("#resultsItems").html("")
        $("#resultsLocations").html("")
        $("#resultsMachines").html("")
        $("#resultsMachines").html("")
        $("#resultsMoves").html("")
        $("#resultsPokemon").html("")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsEvolution").html($("#resultsEvolution").html() + index + "<br>")
        }
    })
})
$(".games").click(() => {
    $.get("https://pokeapi.co/api/v2/generation/", (data) => {
        $("#resultsBerries").html("")
        $("#resultsContests").html("")
        $("#resultsEncounters").html("")
        $("#resultsEvolution").html("")
        $("#resultsGames").html("")
        $("#resultsItems").html("")
        $("#resultsLocations").html("")
        $("#resultsMachines").html("")
        $("#resultsMachines").html("")
        $("#resultsMoves").html("")
        $("#resultsPokemon").html("")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsGames").html($("#resultsGames").html() + data.results[index].name + "<br>")
        }
    })
})
$(".items").click(() => {
    $.get("https://pokeapi.co/api/v2/item/", (data) => {
        $("#resultsBerries").html("")
        $("#resultsContests").html("")
        $("#resultsEncounters").html("")
        $("#resultsEvolution").html("")
        $("#resultsGames").html("")
        $("#resultsItems").html("")
        $("#resultsLocations").html("")
        $("#resultsMachines").html("")
        $("#resultsMachines").html("")
        $("#resultsMoves").html("")
        $("#resultsPokemon").html("")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsItems").html($("#resultsItems").html() + data.results[index].name + "<br>")
        }
    })
})
$(".locations").click(() => {
    $.get("https://pokeapi.co/api/v2/location/", (data) => {
        $("#resultsBerries").html("")
        $("#resultsContests").html("")
        $("#resultsEncounters").html("")
        $("#resultsEvolution").html("")
        $("#resultsGames").html("")
        $("#resultsItems").html("")
        $("#resultsLocations").html("")
        $("#resultsMachines").html("")
        $("#resultsMachines").html("")
        $("#resultsMoves").html("")
        $("#resultsPokemon").html("")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsLocations").html($("#resultsLocations").html() + data.results[index].name + "<br>")
        }
    })
})
$(".machines").click(() => {
    $.get("https://pokeapi.co/api/v2/machine/", (data) => {
        $("#resultsBerries").html("")
        $("#resultsContests").html("")
        $("#resultsEncounters").html("")
        $("#resultsEvolution").html("")
        $("#resultsGames").html("")
        $("#resultsItems").html("")
        $("#resultsLocations").html("")
        $("#resultsMachines").html("")
        $("#resultsMachines").html("")
        $("#resultsMoves").html("")
        $("#resultsPokemon").html("")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsMachines").html($("#resultsMachines").html() + index + "<br>")
        }
    })
})
$(".moves").click(() => {
    $.get("https://pokeapi.co/api/v2/move/", (data) => {
        $("#resultsBerries").html("")
        $("#resultsContests").html("")
        $("#resultsEncounters").html("")
        $("#resultsEvolution").html("")
        $("#resultsGames").html("")
        $("#resultsItems").html("")
        $("#resultsLocations").html("")
        $("#resultsMachines").html("")
        $("#resultsMachines").html("")
        $("#resultsMoves").html("")
        $("#resultsPokemon").html("")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsMoves").html($("#resultsMoves").html() + data.results[index].name + "<br>")
        }
    })
})
$(".pokemon").click(() => {
    $.get("https://pokeapi.co/api/v2/move/", (data) => {
        $("#resultsBerries").html("")
        $("#resultsContests").html("")
        $("#resultsEncounters").html("")
        $("#resultsEvolution").html("")
        $("#resultsGames").html("")
        $("#resultsItems").html("")
        $("#resultsLocations").html("")
        $("#resultsMachines").html("")
        $("#resultsMachines").html("")
        $("#resultsMoves").html("")
        $("#resultsPokemon").html("")
        for (let index = 0; index < data.results.length; index++) {
            $("#resultsPokemon").html($("#resultsPokemon").html() + data.results[index].name + "<br>")
        }
    })
})