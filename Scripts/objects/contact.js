/* Custom JS goes here 
File name:              contact.js                   
Author's name:          Riaz Ahmed 
Student ID              300759573     
Assignment # 3          Mini Portfolio – JSON Data & AJAX Components
Website Name      
file description:       contains Javascript code for Classes     */

let objects;
(function (objects) {

    //Contact Class
    class Contact {
        constructor(name = "", number = "", email = "") {
            this.name = name;
            this.number = number;
            this.email = email;
        }
    }
    //Mission Class
    class Mission {
        constructor(mission = "") {
            this.mission = mission;
        }
    }
    //Aboutme Class
    class Aboutme {
        constructor(aboutme = "") {
            this.aboutme = aboutme;
        }
    }
    //Project Class
    class Project {
        constructor(name = "", detail = "") {
            this.name = name;
            this.details = detail;
        }
    }
    //Skill Class
    class Skill {
        constructor(name = "", details = "") {
            this.name = name;
            this.details = details;
        }
    }
    //Solution Class
    //Skill Class
    class Solution {
        constructor(solution = "") {
            this.solution = solution;
        }
    }

    objects.Contact = Contact;
    objects.Mission = Mission;
    objects.Skill = Skill;
    objects.Solution = Solution;
    objects.Project = Project;
    objects.Aboutme = Aboutme;



})(objects || (objects = {}));