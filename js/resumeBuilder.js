/*
This is empty on purpose! Your code to build the resume will go here.
*/
var data = "%data%";
var bio = {
	name : "Haroon Wardak",
	role : "Security Engineer",
	contacts : {
		mobile: "0568877432",
		email: "haroon@hotmail.com",
		github: "H-Wardak",
		//twitter: string (optional)
		location: "Riyadh"
	},
	welcomeMessage: "Currently, I'm working as pre-sales engineer in Ethergulf "+
	"enterprise for world class security products such as Symantec Solutions, Proofpoint,"+
	" Darktrace, LogRhythm, etc.", 
	skills: ["Java", "Front-end Development", "C#", "Ethical Hacking", "Kali Linux", "Digital Forensics"],
	biopic: "images/me.jpg",
	display: function(){
		var formattedName = HTMLheaderName.replace(data, bio.name);
		var formattedRole = HTMLheaderRole.replace(data, bio.role);
		var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

		var formattedContactInfo = [];
		formattedContactInfo.push(HTMLemail.replace(data, bio.contacts.email));
		formattedContactInfo.push(HTMLgithub.replace(data, bio.contacts.github));
		formattedContactInfo.push(HTMLlocation.replace(data, bio.contacts.location));


		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			for(var i = 0; i<bio.skills.length; i++) {
				$("#skills").append(HTMLskills.replace(data, bio.skills[i]));
			}
		}

		for(var j = 0; j<formattedContactInfo.length; j++) {
			$("#topContacts").append(formattedContactInfo[j]);
			$("#footerContacts").append(formattedContactInfo[j]);
		}
	}
};

var education = {
	schools: [
	{
		name: "King Fahd University of Petroleum and Minerals",
		location: "Dhahran, KSA",
		degree: "Master",
		majors: ["Information Assurance and Security"],
		dates: "2013 - 2017",
		url: "www.kfupm.edu.sa"
	},
	{
		name: "King Abdulaziz University",
		location: "Jeddah, KSA",
		degree: "Bachelor",
		majors: ["Computer Science, Information Technology"],
		dates: "2007 - 2011",
		url: "www.kau.edu.sa"
	}
	],
	onlineCourses: [
	{
		title: "Front-end Development",
		school: "Udacity",
		dates: "July 2017 - October 2017",
		url: "www.udacity.com"
	},
	{
		title: "Learn SAP Course - Online Beginner Training",
		school: "Udemy",
		dates: "March 2017",
		url: "www.udemy.com"
	}
	],
	display: function(){
		if(education.schools.length > 0 || education.onlineCourses.length > 0) {
			for(var i=0; i<education.schools.length; i++) {
				$("#education").append(HTMLschoolStart);

				var formattedSchoolName = HTMLschoolName.replace(data, education.schools[i].name).replace("#", education.schools[i].url);
				var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
				var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);
				var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[i].location);			
				var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[i].majors);

				$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
				$(".education-entry:last").append(formattedSchoolDates);
				$(".education-entry:last").append(formattedSchoolLocation);
				$(".education-entry:last").append(formattedSchoolMajor);
			}

			if(education.onlineCourses.length > 0) {
				$("#education").append(HTMLonlineClasses);
				for(var j=0; j<education.onlineCourses.length; j++) {				
					$("#education").append(HTMLschoolStart);
					var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[j].title).replace("#", education.onlineCourses[j].url);
					var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[j].school);
					var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[j].dates);
					var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[j].url).replace("#", education.onlineCourses[j].url);

					$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
					$(".education-entry:last").append(formattedOnlineDates);
					$(".education-entry:last").append(formattedOnlineURL);
				}
			}

		}
	}
};

var work = {
	jobs: [
	{
		employer: "Ethergulf enterprise", 
		title: "pre-sales", 
		location: "Riyadh", 
		dates: "February 2017 - in progress",
		description: "in charge of maser security products, present it to customer, deploy and support." 
	},
	{
		employer: "KFUPM", 
		title: "Research Assistance", 
		location: "Dhahran", 
		dates: "September 2013 - February 2015",
		description: "Participate in department projects, researchs and teaching labs" 
	}
	],
	display: function(){
		if(work.jobs.length > 0) {

			$("#workExperience").append(HTMLworkStart);

			for(var i=0; i<work.jobs.length; i++) {
				var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
				var formattedWorkTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
				var formattedWorkLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
				var formattedDatesWorked = HTMLworkDates.replace(data, work.jobs[i].dates);
				var formattedWorkDescription = HTMLworkDescription.replace(data, work.jobs[i].description);

				var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

				$(".work-entry:last").append(formattedEmployerWorkTitle);
				$(".work-entry:last").append(formattedWorkLocation);
				$(".work-entry:last").append(formattedDatesWorked);
				$(".work-entry:last").append(formattedWorkDescription);
			}

		}
	}
};

var projects = {
	projects: [{
		title: "My portfolio", 
		dates: "August 2017",
		description: "building a personal portfolio collecting projects I have developed.",
		images: ["images/bg.jpg"]
	},
	{
		title: "Animal Trading Card", 
		dates: "July 2017",
		description: "desinging simple animal card highlighting its name, habitat, basic Information with its picture.",
		images: ["images/lion.jpg"]
	}
	],
	display: function(){
		if(projects.projects.length > 0) {
			for(var i=0; i<projects.projects.length; i++) {
				$("#projects").append(HTMLprojectStart);

				var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
				var formattedProjectDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
				var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);

				$(".project-entry:last").append(formattedProjectTitle);
				$(".project-entry:last").append(formattedProjectDates);
				$(".project-entry:last").append(formattedProjectDescription);

				for(var img=0; img<projects.projects[i].images.length; img++) {
					var formattedProjectImage = HTMLprojectImage.replace(data, projects.projects[i].images[img]);
					$(".project-entry:last").append(formattedProjectImage);
				}
			}
		}
	}
};

bio.display();
education.display();
work.display();
projects.display();

$('#mapDiv').append(googleMap);
