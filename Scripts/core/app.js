// core module - IIFE
(function () {
  // App variables
  let XHR;
  let hash;
  let projects
  let aboutmedata
  let projectbook
  let paragraphs
  let skills

  /**
   * This function inserts HTML from a file or other location
   * into the specificied tag / element that exists on the 
   * index.html page
   *
   * @param {string} sourceURL
   * @param {string} destTag
   */

  // Insert HTml Function
  function insertHTML (sourceURL, destTag) {
    console.log("Source URL"+ sourceURL);
    
    let target = document.querySelector(destTag)

    XHR = new XMLHttpRequest()
    XHR.addEventListener('readystatechange', function () {
      if (this.status === 200) {
        if (this.readyState === 4) {
          target.innerHTML = this.responseText
          setActiveNavLink();
          

          if (document.title == 'About') {
            loadAboutmedata()
          } else if (document.title == 'Project') {
            loadProjects()
          }
        }
      }
    })
    XHR.open('GET', sourceURL)
    XHR.send()
  }
  /**
   * This
   function loads a JSON file and dumps it into the projectbook container
   *
   */

  // Load Projects
  function loadProjects () {
    XHR = new XMLHttpRequest()
    XHR.addEventListener('readystatechange', function () {
      if (this.status === 200) {
        if (this.readyState === 4) {
          projects = JSON.parse(this.responseText)
          console.log('Project Data finished loading')

          console.log(projects)
          // What is purpose of this function
          for (const property in projects) {
            // if (projects.hasOwnProperty(property)) {
            if (projects.hasOwnProperty(property)) {
              console.log(projects[property])
            }
          }
          // Projects for Console
          console.log(`Project1 name: ${projects.project1.name}`)
          console.log(`Project1 details: ${projects.project1.details}`)
          console.log(`Project2 name: ${projects.project2.name}`)
          console.log(`Project2 details: ${projects.project2.details}`)
          // Projects for HTML
          if (document.title == 'Project') {
            // alert("On Project Page")
            document.getElementById('name1').textContent = projects.project1.name
            document.getElementById('detail1').textContent = projects.project1.details
            document.getElementById('name2').textContent = projects.project2.name
            document.getElementById('detail2').textContent = projects.project2.details
            document.getElementById('name3').textContent = projects.project2.name
            document.getElementById('detail3').textContent = projects.project2.details
          }
        }
      }
    })
    XHR.open('GET', '/JsonData/projects.json')
    XHR.send()
  }
  //
  

  function loadAboutmedata () {
    console.log("Loading About Pagr");
    XHR = new XMLHttpRequest()
    XHR.addEventListener('readystatechange', function () {
      if (this.status === 200) {
        if (this.readyState === 4) {
          aboutmedata = JSON.parse(this.responseText)
          console.log('Paragraph Data finished loading')

          // console.log(aboutmedat)

          // for (const property in aboutmedata) {
          //   if (aboutmedata.hasOwnProperty(property)) {
          //     console.log(aboutmedata[property])
          //   }
          // }

          console.log(`Mission: ${aboutmedata.mission}`)
          document.getElementById('mission').textContent = aboutmedata.mission

          document.getElementById('skill1').textContent = aboutmedata.skill1
          document.getElementById('skill2').textContent = aboutmedata.skill2
          document.getElementById('skill3').textContent = aboutmedata.skill3
          document.getElementById('solution1').textContent = aboutmedata.solution1
          document.getElementById('solution2').textContent = aboutmedata.solution2
          document.getElementById('solution3').textContent = aboutmedata.solution3
        }
      }
    })
    XHR.open('GET', '/JsonData/about.json')
    XHR.send()
  }

  /**
   * This function is used for Intialization
   */
  function Start () {
    console.log(
      `%c App Initializing...`,
      'font-weight: bold; font-size: 20px;'
    )

    Main()
  }

  /**
   * This function is the where the main functionality for our
   * web app is happening
   */
  function Main () {
    console.log(`%c App Started...`, 'font-weight: bold; font-size: 20px;')

    insertHTML('/Views/partials/header.html', 'header')

    setPageContent('/Views/content/about.html')

    insertHTML('/Views/partials/footer.html', 'footer')
    // aboutmedata()

    // loadParagraphs()

  // loadSkills()
  }

  function setPageContent (url) {
    insertHTML(url, 'main')
  }

  function Route () {
    // sanitize the url - remove the #
    // console.log(location.hash)
    hash = location.hash.slice(1)
    // console.log(hash)
    document.title = hash;

    // change the URL of my page
    history.pushState('', document.title, '/' + hash.toLowerCase() + '/')
    // console.log(history.pushState)
    // console.log(history.length)

    setPageContent('/Views/content/' + hash.toLowerCase() + '.html')
  // console.log(history)
  }

  function setActiveNavLink () {
    // clears the "active" class from each of the list items in the navigation
    document.querySelectorAll('li.nav-item').forEach(function (listItem) {
      listItem.setAttribute('class', 'nav-item')
    })



    console.log(document.title);
    // add the "active" class to the class attribute of the appropriate list item
    document.getElementById(document.title).classList.add('active')
  }

  window.addEventListener('load', Start)

  window.addEventListener('hashchange', Route)
})()
