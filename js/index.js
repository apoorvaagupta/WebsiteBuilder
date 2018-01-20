$(function () {

  let eduCounter = 0, expCounter = 0, skillCounter = 0, achievementCounter = 0;

  //
  // var zip = new JSZip();
  // zip.folder('test').file("test.txt", "hey there!!!!");
  // zip.generateAsync({type: "blob"}, function updateCallback(metadata) {
  //   // var msg = "progression : " + metadata.percent.toFixed(2) + " %";
  //   // if(metadata.currentFile) {
  //   //   msg += ", current file = " + metadata.currentFile;
  //   // }
  //   // showMessage(msg);
  //   // updatePercent(metadata.percent|0);
  // }).then(function (blob) {
  //   console.log(blob);
  //   var url = URL.createObjectURL(blob);
  //   console.log(url);
  //location.href = url

//})

  $('#explbl').click(function () {
    expCounter++;
    $('#expDiv').append(`<div class="form-group">
                                <input id="expJob${expCounter}" required type="text" class="form-control input"
                                       placeholder="Job/Designation">
                            </div>
                            <div class="form-group">
                                <input id="expCompany${expCounter}" type="text" class="form-control input"
                                       placeholder="Company Name">
                            </div>
                            <div class="form-group">
                                <input id="expYear${expCounter}" type="text" class="form-control input"
                                       placeholder="Tenure">
                            </div>
                            <div class="form-group">
                                <textarea id="expDes${expCounter}" class="form-control input" placeholder="Description"></textarea>
                            </div>`);
  })


  $('#edulbl').click(function () {
    eduCounter++;
    $('#eduDiv').append(`<div class="form-group">
    <input id="eduName${eduCounter}" required type="text" class="form-control input"
  placeholder="Institution Name">
    </div>
    <div class="form-group">
    <input id="eduType${eduCounter}" type="text" class="form-control input"
  placeholder="Qualification/Degree">
    </div>
    <div class="form-group">
    <input id="eduTime${eduCounter}" type="text" class="form-control input"
  placeholder="Tenure">
    </div>
    <div class="form-group">
    <input id="eduMarks${eduCounter}" type="text" class="form-control input"
  placeholder="Marks">
    </div>`);
  })

  $('#skllbl').click(function () {
    skillCounter++;
    $('#sklDiv').append(`<div class="form-group">
    <input id="skillName${skillCounter}" required type="text" class="form-control input"
  placeholder="Skill">
    </div>`);
  })

  $('#achlbl').click(function () {
    achievementCounter++;
    $('#achDiv').append(`<div class="form-group">
                                <textarea id="achDes${achievementCounter}" class="form-control input" placeholder="Description"></textarea>
                            </div>`);
  })


  $('#genWebBtn').click(function (e) {
    e.preventDefault();
    let info = {};

    let name = $('#name').val();
    let job = $('#job').val();
    let bio = $('#bio').val();
    let image = $('#image')[0].files[0]
    let email = $('#email').val();
    let phone = $('#phone').val();
    let address = $('#address').val();
    let fb = $('#fb').val();
    let twitter = $('#twitter').val();
    let linkedin = $('#linkedin').val();
    let github = $('#github').val();

    if (name)
      info.name = name;
    if (job)
      info.job = job;
    if (bio)
      info.bio = bio;
    if (email)
      info.email = email;
    if (phone)
      info.phone = phone;
    if (address)
      info.address = address;
    if (fb)
      info.fb = fb;
    if (twitter)
      info.twitter = twitter;
    if (linkedin)
      info.linkedin = linkedin;
    if (github)
      info.github = github;

    let experiences = [];

    for (let i = 1; i <= expCounter; i++) {
      let exp = {};

      let job = $('#expJob' + i).val();
      let company = $('#expCompany' + i).val();
      let year = $('#expYear' + i).val();
      let des = $('#expDes' + i).val();

      if (job)
        exp.job = job;
      if (company)
        exp.company = company;
      if (year)
        exp.year = year;
      if (des)
        exp.des = des;

      experiences.push(exp);

    }

    let educations = [];

    for (let i = 1; i <= eduCounter; i++) {
      let edu = {};

      let name = $('#eduName' + i).val();
      let type = $('#eduType' + i).val();
      let time = $('#eduTime' + i).val();
      let marks = $('#eduMarks' + i).val();

      if (name)
        edu.name = name;
      if (type)
        edu.type = type;
      if (time)
        edu.time = time;
      if (marks)
        edu.marks = marks;

      educations.push(edu);

    }

    let skills = [];

    for (let i = 1; i <= skillCounter; i++) {
      let skill = {};

      let skillName = $('#skillName' + i).val();

      if (skillName)
        skill.name = skillName;

      skills.push(skill);

    }

    let achievements = [];

    for (let i = 1; i <= achievementCounter; i++) {
      let ach = {};

      let des = $('#achDes' + i).val();

      if (des)
        ach.des = des;

      achievements.push(ach);

    }

    if (experiences.length > 0) {
      info.experiences = experiences;
    }
    if (educations.length > 0) {
      info.education = educations;
    }
    if (skills.length > 0) {
      info.skills = skills;
    }
    if (achievements.length > 0) {
      info.achievements = achievements;
    }


    console.log(info)

    let css = `/*!
 * Start Bootstrap - Resume v4.0.0-beta.2 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
 */body{font-family:'Open Sans',serif;padding-top:54px;color:#868e96}@media (min-width:992px){body{padding-top:0;padding-left:17rem}}h1,h2,h3,h4,h5,h6{font-family:'Saira Extra Condensed',serif;font-weight:700;text-transform:uppercase;color:#343a40}h1{font-size:6rem;line-height:5.5rem}h2{font-size:3.5rem}.subheading{text-transform:uppercase;font-weight:500;font-family:'Saira Extra Condensed',serif;font-size:1.35rem}.list-social-icons a{color:#495057}.list-social-icons a:hover{color:#bd5d38}.list-social-icons a .fa-lg{font-size:1.75rem}.list-icons{font-size:3rem}.list-icons .list-inline-item i:hover{color:#bd5d38}#sideNav .navbar-nav .nav-item .nav-link{font-weight:600;text-transform:uppercase}@media (min-width:992px){#sideNav{text-align:center;position:fixed;top:0;left:0;display:flex;flex-direction:column;width:17rem;height:100vh}#sideNav .navbar-brand{display:flex;margin:auto auto 0;padding:.5rem}#sideNav .navbar-brand .img-profile{max-width:10rem;max-height:10rem;border:.5rem solid rgba(255,255,255,.2)}#sideNav .navbar-collapse{display:flex;align-items:flex-start;flex-grow:0;width:100%;margin-bottom:auto}#sideNav .navbar-collapse .navbar-nav{flex-direction:column;width:100%}#sideNav .navbar-collapse .navbar-nav .nav-item{display:block}#sideNav .navbar-collapse .navbar-nav .nav-item .nav-link{display:block}}section.resume-section{border-bottom:1px solid #dee2e6;padding-top:5rem!important;padding-bottom:5rem!important}section.resume-section .resume-item .resume-date{min-width:none}@media (min-width:768px){section.resume-section{min-height:100vh}section.resume-section .resume-item .resume-date{min-width:18rem}}@media (min-width:992px){section.resume-section{padding-top:3rem!important;padding-bottom:3rem!important}}.bg-primary{background-color:#bd5d38!important}.text-primary{color:#bd5d38!important}a{color:#bd5d38}a:active,a:focus,a:hover{color:#824027}`;

    let js = `/*!
 * Start Bootstrap - Resume v4.0.0-beta.2 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
 */
!function(e){"use strict";e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\\//,"")==this.pathname.replace(/^\\//,"")&&location.hostname==this.hostname){var t=e(this.hash);if((t=t.length?t:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body").animate({scrollTop:t.offset().top},1e3,"easeInOutExpo"),!1}}),e(".js-scroll-trigger").click(function(){e(".navbar-collapse").collapse("hide")}),e("body").scrollspy({target:"#sideNav"})}(jQuery);`;


    var zip = new JSZip();
    zip.folder('test').file("test.txt", JSON.stringify(info)).file("resume.min.css", css).file("resume.min.js", js);
    if(image){
      zip.folder('test').file('profile.jpg', image, {base64: true});
    }
    zip.generateAsync({type: "blob"}, function updateCallback(metadata) {
      // var msg = "progression : " + metadata.percent.toFixed(2) + " %";
      // if(metadata.currentFile) {
      //   msg += ", current file = " + metadata.currentFile;
      // }
      // showMessage(msg);
      // updatePercent(metadata.percent|0);
    }).then(function (blob) {
      console.log(blob);
      var url = URL.createObjectURL(blob);
      console.log(url);
      location.href = url
    })
  })

})