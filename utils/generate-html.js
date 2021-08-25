// const Manager = require('../lib/Manager');
// const Intern = require('../lib/Intern');
// const Engineer = require('../lib/Engineer');
// const Employee = require('../lib/Employee');


function generateCard(teamData) {
    let cards = '';

    for (let i = 0; i < teamData.length; i++) {
        if (teamData[i].job === 'Manager') {
            cards += `
                <div class='card text-center col-3 mx-3 my-3 p-0'>
                    <div class='card-header bg-success'>
                        <h4>${teamData[i].job}</h4>
                        <h3>${teamData[i].name}</h3>
                    </div>

                    <div class="card-body">
                        <p>ID#${teamData[i].id}</p>
                        <a href="mailto:${teamData[i].email}">${teamData[i].email}</a> 
                        <p>Office#${teamData[i].officeNumber}</p> 
                    </div>
                </div>
                `
        } else if (teamData[i].job === 'Intern') {
            cards += `
                <div class='card text-center col-3 mx-3 my-3 p-0'>
                    <div class='card-header bg-warning'>
                        <h4>${teamData[i].job}</h4>
                        <h3>${teamData[i].name}</h3>
                    </div>

                    <div class="card-body">
                        <p>ID#${teamData[i].id}</p>
                        <a href="mailto:${teamData[i].email}">${teamData[i].email}</a>                        
                        <p>School Attended: ${teamData[i].school}</p>
                    </div>
                </div>                
                `
        } else {
            cards += `
                <div class='card text-center col-3 mx-3 my-3 p-0'>
                    <div class='card-header bg-info'>
                        <h4>${teamData[i].job}</h4>
                        <h3>${teamData[i].name}</h3>
                    </div>

                    <div class="card-body">
                        <p>ID#${teamData[i].id}</p>
                        <a href="mailto:${teamData[i].email}">${teamData[i].email}</a> 
                        <a href="http://github.com/${teamData[i].github}"><img  src="https://img.shields.io/badge/GitHub-${teamData[i].github}-red" alt="${teamData[i].github}"></a>
                    </div>
                </div>  
                `
        }
    };

    return cards;
};


function generateHTML(teamData) {
    console.log(teamData)
    return `
    <!doctype html>
<html lang="en">

<head>
    <title>Team Profile Generator</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
</head>

<body>
    <main>
        <header class='bg-danger text-center text-white'>
            <h1>My Team</h1>
        </header>

        <div class="container">
            <div class="row justify-content-center my-5">                
                ${generateCard(teamData)} 
            </div>
        </div>
    </main>


    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</body>

</html>
`

}



module.exports = generateHTML;