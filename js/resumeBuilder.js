var education = {
    "schools": [
        {
            "name": "Haas School of Business, UC Berkeley",
            "location": "Berkeley, CA",
            "degree": "MBA",
            "majors": ["Management","Enterprenuership"],
            "dates": "Aug 2005 - Aug 2008",
            "url": "http://www.haas.berkeley.edu/"
        },
        {
            "name": "Purdue University",
            "location": "West Lafayette, IN",
            "degree": "Master of Science",
            "majors": ["Computer Sciences"],
            "dates": "Aug 1992 - Dec 1993",
            "url": "https://www.cs.purdue.edu/"
        },
        {
            "name": "University of Kentucky",
            "location": "Lexington, KY",
            "degree": "Bachelor of Science",
            "majors": ["Computer Science"],
            "dates": "Aug 1989 - May 1992",
            "url": "http://www.cs.uky.edu//"
        }
    ],
    "onlineCourses": [
        {
            "title": "Web-end Deverloper Nano Degree",
            "school": "Udacity",
            "dates": "May 2015 - Present",
            "url": "http://udacity.com"
        }
    ]
}

education.display = function(){
    $("#education").append(HTMLschoolStart);
    for (school in education.schools){
        var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedHTMLschoolName + formattedHTMLschoolDegree + formattedHTMLschoolDates +
                                          formattedHTMLschoolLocation + formattedHTMLschoolMajor );
    }
    $(".education-entry:last").append("<br><br>");
    $(".education-entry:last").append(HTMLonlineClasses);
    for (onlineCourse in education.onlineCourses){
        var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool +
                                          formattedHTMLonlineDates + formattedHTMLonlineURL);
    }
}

var work = {
    "job" :[
        {
            "employer": "Google",
            "title": "Engineering Productivity Manager",
            "location": "San Bruno, CA",
            "dates": "Feb 2014 - Present",
            "description": "Manage a team of SWE and SET to develop test infrastructure and tools"
        },
        {
            "employer": "Adap.tv",
            "title": "Director of Test Engineering",
            "location": "San Mateo, CA",
            "dates": "April 2013 - Jan 2014",
            "description": "Responsible for all test infrastructure and quality of products"
        },
        {
            "employer": "Marin Software",
            "title": "Senior Director of Test Engineering",
            "location": "San Francisco, CA",
            "dates": "Jan 2012 - March 2013",
            "description": "Responsible for all test infrastructure and quality of products"
        }
    ]
}

work.display = function populateWork() {
    // populate work experience section
    for (job in work.job){
        $("#workExperience").append(HTMLworkStart);

        var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.job[job].employer);
        var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.job[job].title);
        var formattedWorkAndTitle = formattedHTMLworkEmployer + formattedHTMLworkTitle;
        $(".work-entry:last").append(formattedWorkAndTitle);
       
        var formattedHTMLworkDates = HTMLworkDates.replace("%data%", work.job[job].dates);
        $(".work-entry:last").append(formattedHTMLworkDates);
       
       var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", work.job[job].description);
        $(".work-entry:last").append(formattedHTMLworkDescription);
    }
}

var project = {
    "projects": [
        {
            "title": "Porfolio",
            "dates": "May 2015",
            "description": "A website that show case my design porfolio",
            "image": ["images/proj1.png", "images/fry.jpg"]
        },
        {
            "title": "Game Design",
            "dates": "May 2015",
            "description": "A puzzle game for kids"
        }
    ]
}

project.display = function(){
    for (proj in project.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", project.projects[proj].title);
        $(".project-entry:last").append(formattedHTMLprojectTitle);
        var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%",project.projects[proj].dates);
        $(".project-entry:last").append(formattedHTMLprojectDates);
        var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", project.projects[proj].description);
        $(".project-entry:last").append(formattedHTMLprojectDescription);
        for (image in project.projects[proj].image) {
            var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", project.projects[proj].image[image]);
            $(".project-entry:last").append(formattedHTMLprojectImage);
        }
    }
    // add a line break
    $(".project-entry:last").append("<br>");
}


var bio = {
    "name": "Victor Tse",
    "role": "Seasoned Software Professional",
    "picture": "images/Frogger.jpg",
    "welcomeMessage": "A day without laughter is a day wasted!",
    "contacts": {
        "mobile": "650-245-8567",
        "email": "victortse93@alumni.purdue.edu",
        "github": "zenbar",
        "twiter": "vtse",
        "location": "Foster City, CA"
    },
    "skills": ["Javascript", "Java", "C++", "C", "HTML/CSS", "Python", "Bootstrap", "RDBMS"]
}

bio.display = function populateBio() {

    // populate name and role
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    // populate contact info for header and footer
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedHTMLtwitter = HTMLtwitter.replace("%data%",bio.contacts.twiter);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedHTMLtwitter)
        .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);    
    
    // populate picture 
    var formattedHTMLbioPic = HTMLbioPic.replace("%data%",bio.picture);
    $("#header").append(formattedHTMLbioPic);
    
    // populate welcome message
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    
    // populate skills section
    if (bio.skills.length > 0){
        $("#header").append(HTMLskillsStart);
        var formattedSkill;
        for (skill in bio.skills)
        {
            formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
}


bio.display();
work.display();
education.display();
project.display();
$("#mapDiv").append(googleMap);
