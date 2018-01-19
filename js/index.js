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
    let email = $('#email').val();
    let phone = $('#phone').val();
    let address = $('#address').val();
    let fb = $('#fb').val();
    let twitter = $('#twitter').val();
    let linkedin = $('#linkedin').val();
    let github = $('#github').val();

    if(name)
      info.name = name;
    if(job)
      info.job = job;
    if(bio)
      info.bio = bio;
    if(email)
      info.email = email;
    if(phone)
      info.phone = phone;
    if(address)
      info.address = address;
    if(fb)
      info.fb = fb;
    if(twitter)
      info.twitter = twitter;
    if(linkedin)
      info.linkedin = linkedin;
    if(github)
      info.github = github;

    let experiences = [];

    for(let i = 1 ; i<= expCounter; i++){
      let exp = {};

      let job = $('#expJob' + i).val();
      let company = $('#expCompany' + i).val();
      let year = $('#expYear' + i).val();
      let des = $('#expDes' + i).val();

      if(job)
        exp.job = job;
      if(company)
        exp.company = company;
      if(year)
        exp.year = year;
      if(des)
        exp.des = des;

      experiences.push(exp);

    }

    let educations = [];

    for(let i = 1 ; i<= eduCounter; i++){
      let edu = {};

      let name = $('#eduName' + i).val();
      let type = $('#eduType' + i).val();
      let time = $('#eduTime' + i).val();
      let marks = $('#eduMarks' + i).val();

      if(name)
        edu.name = name;
      if(type)
        edu.type = type;
      if(time)
        edu.time = time;
      if(marks)
        edu.marks = marks;

      educations.push(edu);

    }

    let skills = [];

    for(let i = 1 ; i<= skillCounter; i++){
      let skill = {};

      let skillName = $('#skillName' + i).val();

      if(skillName)
        skill.name = skillName;

      skills.push(skill);

    }

    let achievements = [];

    for(let i = 1 ; i<= achievementCounter; i++){
      let ach = {};

      let des = $('#achDes' + i).val();

      if(des)
        ach.des = des;

      achievements.push(ach);

    }

    if(experiences.length > 0){
      info.experiences = experiences;
    }
    if(educations.length > 0){
      info.education = educations;
    }
    if(skills.length > 0){
      info.skills = skills;
    }
    if(achievements.length > 0){
      info.achievements = achievements;
    }


    console.log(info)

    var zip = new JSZip();
    zip.folder('test').file("test.txt", JSON.stringify(info));
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