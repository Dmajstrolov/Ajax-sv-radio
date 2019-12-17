

async function getAllChannels()
{

    const url = "http://api.sr.se/api/v2/channels?format=json&pagination=false";

    const data = await fetch(url);
    const channels = (await data.json()).channels;
 

    printChannels(channels);

}

function printChannels(channels)
{
    let html = channels.map(channel=>{
        return `
        
            <div onclick = "getPrograms(${channel.id})">
                <h5>${channel.name}</h5>
                <img src = "${channel.image}">
            </div>

        `;
    });
    document.getElementById("channels").innerHTML=html.join("");
}

async function getPrograms(id){

    let url = `http://api.sr.se/api/v2/programs/index?format=json&pagination=false&channelid=${id}`;
    
    let data = await fetch(url);
    let programs = (await data.json()).programs;
    console.log(programs);
    printPrograms(programs);

}

function printPrograms(programs){

    let html = programs.map(program=>{

        return `
        
        <div onclick ="getPodfiles(${programs.podfiles})">
       <h2> ${program.name}</h2>
        ${program.description}<br>
        </div>
        
        `;

    });

    document.getElementById("programs").innerHTML=html.join("");
}

async function getPodfiles(podfiles){

    let url = `http://api.sr.se/api/v2/podfiles/index?format=json&pagination=fals&channelid=${id}`;

    let data = await fetch(url);
    let podfiles = (await data.json()).podfiles;
    console.table(podfiles);
    printPodfiles(podfiles);

}
function printPodfiles(podfiles){

    let html = podfiles.map(podfiles=>{

        return `
        <div>
        <h2>${podfiles.name}</h2>
        ${podfiles.description}<br>
        </div>

        </div>
        
        `;

    });
    document.getElementById("podfiles").innerHTML=html.join("");
}