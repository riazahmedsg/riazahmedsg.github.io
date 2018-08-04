/* Custom JS goes here */
/* File name:           app.js                   
Author's name:          Riaz Ahmed      
web site name:          riazahmedsg.github.io                
file description:       contains Javascript code Code      */


// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
let app = (function () {
    "use strict"

    //Output Data to Console

    function OutputFormDataToConsole() {
        let FirstName = document.getElementById("FirstName");
        let LastName = document.getElementById("LastName");
        let ContactNumber = document.getElementById("ContactNumber");
        let EmailAddress = document.getElementById("EmailAddress");
        let Message = document.getElementById("Message");
        //
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Data`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c First Name     : ${FirstName.value}`, "color: blue;");
        console.log(`%c Last Name      : ${LastName.value}`, "color: blue;");
        console.log(`%c Contact Number: ${ContactNumber.value}`, "color: blue;");
        console.log(`%c Email Address : ${EmailAddress.value}`, "color: blue;");
        console.log(`%c Your Message  : ${Message.value}`, "color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
    }
    //Clear Validation Message
    function clearValidationMessages() {
        FirstName.setCustomValidity("");
        LastName.setCustomValidity("");
        ContactNumber.setCustomValidity("");
        EmailAddress.setCustomValidity("");
        Message.setCustomValidity("");
        
    }

    function setEventHandlersForFormElements() {

        for (const element of document.forms[0].elements) {
            if ((element.tagName === "INPUT") || (element.tagName === "TEXTAREA")) {
                // when the user is inputting data
                element.addEventListener("input", function () {
                    element.setCustomValidity("");
                });

                // when the user enters incorrect data
                element.addEventListener("invalid", function () {
                    switch (element.id) {
                        case "FirstName":
                            element.setCustomValidity("Enter at least two characters for FullName");
                            break;
                        case "LastName":
                            element.setCustomValidity("Enter at least two characters for FullName");
                            break;
                        case "ContactNumber":
                            element.setCustomValidity("Enter Phone Number with the following Pattern (###) ###-####");
                            break;
                        case "EmailAddress":
                            element.setCustomValidity("Invalid Email");
                            break;
                        case "Message":
                            element.setCustomValidity("Message field cannot be blank");
                            break;
                        default:
                            element.setCustomValidity("This Field is Required");
                            break;
                    }

                })

            }

        }
    }

    function ValidateForm() {
        setEventHandlersForFormElements();
    }


    function ContactContentnew() {
        clearValidationMessages();

        // console.log("%c Contact Content Accessed...", "font-weight:bold; font-size: 20px;");

        document.getElementsByClassName("card-title")[0].textContent = "Contact Us!";

        // create a new HTML Element
        let cancelButton = document.createElement("button");
        // configure the HTML Element
        cancelButton.setAttribute("class", "btn btn-warning");
        cancelButton.classList.add("btn-lg");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("index.html", "_parent");
        });

        // add the HTML Element to the page somewhere 
        // in this case I'm attaching a button to the first forml element
        document.forms[0].appendChild(cancelButton);


        let SendButton = document.getElementById("SendButton");
        SendButton.addEventListener("click", (event) => {
            event.preventDefault();
            //--------------------------------
            // if (!document.forms[0].checkValidity()) {
            //     OutputFormDataToConsole();
            //     ValidateForm();
            // }
            //--------------------------------
            OutputFormDataToConsole();
            ValidateForm();

        });

    }

    function nameValue() {
        let name = document.getElementById("FullName").value;
        console.log(name);


    }



    function SubmitContent() {

        // "hook into" a ul that is empty that has an id of "myFavouriteThings"
        let myFavouritesList = document.getElementById("myFavouriteThings");

        myFavouriteThingsList.forEach(thing => {
            let newItem = document.createElement("li");
            newItem.textContent = thing;
            myFavouritesList.appendChild(newItem);
        });
        console.log(myFavouritesList);
    }

    function ContactContent() {}
    //About Me Data
    //variables containg about me data
    let portfolio = "Riaz Ahmed's Mini Portfolio";
    let skillset = "Skillset:";
    let skill1 = "FileMaker Developer - Develop Cross-Platform Custom Apps";
    let skill2 = "Software Business Analyst - Use state of the art UML methodology and Prototyping";
    let skill3 = "Software Quality Analyst";
    let sw = "Software Solutions Developed:";
    let app1d = "Drug Information App";
    let app2d = "Patient Care App";
    let app3d = "Custom Email App";
    let mission = "Mission: To develop robust quality, reasonably priced Custom Business Apps in the fast paced modern world of today";
    //
    //Projects Data
    function projects() {
        let projects = document.getElementById("myprojects");
        let projecttext = "Software Projects I enjoyed";
        projects.textContent = projecttext;
    }

    let app1text = "Tracking the progress of physicians being trained in bedside ultrasound is critical to ensure accurate diagnosis and quality patient care. Modern Hospital’s IMBUS Program has streamlined this process, improving the accuracy and efficiency of the training process with a custom solution created using the FileMaker Platform.";
    let app2 = "Summer Snow Juice App";
    let app2text = "Family farm uses custom app to manage sales, production, and employee scheduling. Fewer bookkeeping errors and production efficiency gains give Summer Snow Juice a competitive edge. Today the app does the administrative work of three full-time employees, allowing the company’s office staff to stay the same size despite a 7x increase in production output.";
    let app3 = "Project Management App";
    let app3text = "Our client replaces ad-hoc mix of spreadsheets, paper, and packaged software offerings with three custom apps built on the FileMaker Platform. The apps manage incoming pitches, calendars, project management, and client ad approvals. It reduced operational costs. Custom app helps our client save $405k annually in operating costs.";

    //Arrays for Data Display
    let projectsID = ["myprojects", "app1", "app1text", "app2", "app2text",
        "app3", "app3text"
    ];
    //
    let projectstxt = ["Software Projects I enjoyed",
        "Patient Care App",
        "Tracking the progress of physicians being trained in bedside ultrasound is critical to ensure accurate diagnosis and quality patient care. Modern Hospital’s IMBUS Program has streamlined this process, improving the accuracy and efficiency of the training process with a custom solution created using the FileMaker Platform.",
        "Summer Snow Juice App",
        "Family farm uses custom app to manage sales, production, and employee scheduling. Fewer bookkeeping errors and production efficiency gains give Summer Snow Juice a competitive edge. Today the app does the administrative work of three full-time employees, allowing the company’s office staff to stay the same size despite a 7x increase in production output.",
        "Project Management App",
        "Our client replaces ad-hoc mix of spreadsheets, paper, and packaged software offerings with three custom apps built on the FileMaker Platform. The apps manage incoming pitches, calendars, project management, and client ad approvals. It reduced operational costs. Custom app helps our client save $405k annually in operating costs."
    ];

    function displayprojects(projectsID) {

        let gettag1 = document.getElementById("myprojects");
        let txt1 = "Software Projects I enjoyed";
        gettag1.textContent = txt1;
        let mypval = document.getElementById("myprojects").value;
        console.log(mypval);
        //
        let gettag2a = document.getElementById("app1");
        let txt2a = "Patient Care App";
        gettag2a.textContent = txt2a;
        //
        let gettag2b = document.getElementById("app1text");
        let txt2b = "Tracking the progress of physicians being trained in bedside ultrasound is critical to ensure accurate diagnosis and quality patient care. Modern Hospital’s IMBUS Program has streamlined this process, improving the accuracy and efficiency of the training process with a custom solution created using the FileMaker Platform.";
        gettag2b.textContent = txt2b;
        //
        let gettag3a = document.getElementById("app2");
        let txt3a = "Summer Snow Juice App";
        gettag3a.textContent = txt3a;
        //
        let gettag3b = document.getElementById("app2text");
        let txt3b = "Family farm uses custom app to manage sales, production, and employee scheduling. Fewer bookkeeping errors and production efficiency gains give Summer Snow Juice a competitive edge. Today the app does the administrative work of three full-time employees, allowing the company’s office staff to stay the same size despite a 7x increase in production output.";
        gettag3b.textContent = txt3b;
        //
        let gettag4a = document.getElementById("app3");
        let txt4a = "Project Management App";
        gettag4a.textContent = txt4a;
        //
        let gettag4b = document.getElementById("app3text");
        let txt4b = "Our client replaces ad-hoc mix of spreadsheets, paper, and packaged software offerings with three custom apps built on the FileMaker Platform. The apps manage incoming pitches, calendars, project management, and client ad approvals. It reduced operational costs. Custom app helps our client save $405k annually in operating costs.";
        gettag4b.textContent = txt4b;
        //

    }

    function displayAboutme() {
        // 
        let portfolio1 = document.getElementById("portfolio");
        let txt2 = "Riaz Ahmed's Mini Portfolio";
        portfolio1.textContent = txt2;
        //
        let Skillset1 = document.getElementById("skillset");
        let txt3 = "Skillset:";
        Skillset1.textContent = txt3;
        //
        let skill1a = document.getElementById("skill1");
        let txt4 = "FileMaker Developer - Develop Cross-Platform Custom Apps";
        skill1a.textContent = txt4;
        //
        let skill2a = document.getElementById("skill2");
        let txt5 = "Software Business Analyst - Use state of the art UML methodology and Prototyping";
        skill2a.textContent = txt5;
        //
        let skill3a = document.getElementById("skill3");
        let txt6 = "Software Quality Analyst";
        skill3a.textContent = txt6;
        //
        let swsda = document.getElementById("swsd");
        let txt7 = "Software Solutions Developed:";
        swsda.textContent = txt7;
        //
        let app1da = document.getElementById("app1d");
        let txt8 = "Drug Information App";
        app1da.textContent = txt8;
        //
        let app2da = document.getElementById("app2d");
        let txt9 = "Patient Care App";
        app2da.textContent = txt9;
        //
        let app3da = document.getElementById("app3d");
        let txt10 = "Custom Email App";
        app3da.textContent = txt10;
        //
        let mission1 = document.getElementById("mission");
        let txt1 = "Mission: To develop robust quality, reasonably priced Custom Business Apps in the fast paced modern world of today";
        mission1.textContent = txt1;
        //
    }


    function Start() {
        // local variable
        let title = document.title;

        console.log("App Started!");
        console.log("----------------------------");
        console.log("Title: " + title);

        try {

            switch (title) {

                case "COMP125 - About Me":
                    displayAboutme();
                    break;

                case "COMP125 - Contact":
                    ContactsContentnew();
                    OutputFormDataToConsole();

                    break;

                case "COMP125 - Projects":

                    displayprojects(projectsID);
                    break;

                default:
                    throw ("Title not Defined");
                    break;
            }
        } catch {
            console.warn("Incorrect Title ecountered upon page switching");
        }
    }


    window.addEventListener("load", Start);


    return {
        title: document.title

    };

})();