
// window.onload = function(){
//     document.getElementById('name1').innerHTML = localStorage.getItem("name");
//     document.getElementById('summ1').innerHTML =localStorage.getItem("summ");
//     document.getElementById('email1').innerHTML =localStorage.getItem("email1");
//     document.getElementById('phnumber2').innerHTML =localStorage.getItem("phnumber");
//     document.getElementById('location2').innerHTML =localStorage.getItem("location1");
//     document.getElementById('linkedin2').innerHTML =localStorage.getItem("linkedin");
//     document.getElementById('github2').innerHTML =localStorage.getItem("github");
//     document.getElementById('year11').innerHTML =localStorage.getItem("year1");
//     document.getElementById('univ1').innerHTML =  localStorage.getItem("education1");
//     document.getElementById('score1').innerHTML = localStorage.getItem("percentage1");
//     document.getElementById('year22').innerHTML = localStorage.getItem("year2");
//     document.getElementById('univ2').innerHTML =   localStorage.getItem("education2");
//     document.getElementById('score2').innerHTML =  localStorage.getItem("percentage2");
//     document.getElementById('year33').innerHTML =  localStorage.getItem("year3");
//     document.getElementById('univ3').innerHTML =   localStorage.getItem("education3");
//     document.getElementById('score3').innerHTML =   localStorage.getItem("percentage3");
//     document.getElementById('year44').innerHTML =  localStorage.getItem("year4");
//     document.getElementById('score4').innerHTML =  localStorage.getItem("education4");
//     document.getElementById('univ4').innerHTML =  localStorage.getItem("percentage4");
//     document.getElementById('cert1').innerHTML = localStorage.getItem("certificates1");
//     document.getElementById('cert2').innerHTML = localStorage.getItem("certificates2");
//     document.getElementById('cert3').innerHTML = localStorage.getItem("certificates3");
//     document.getElementById('cert4').innerHTML = localStorage.getItem("certificates4");
//     document.getElementById('interest1').innerHTML = localStorage.getItem("interest1"); 
//     document.getElementById('softskills1').innerHTML = localStorage.getItem("softskills1");
//     document.getElementById('technicalskills1').innerHTML = localStorage.getItem("technicalskills1");
//     document.getElementById('lang1').innerHTML = localStorage.getItem("languages");
//     let img = document.getElementById('imagefile1');
//     img.src = localStorage.getItem('image');
// }


// function funcresume()
// {
//     const imgPath = document.querySelector('#imagefile').files[0];
//     const reader = new FileReader();

//     reader.addEventListener("load", function () {
//     // convert image file to base64 string and save to localStorage
//         localStorage.setItem("image", reader.result);
//     }, false);

//     if (imgPath) {
//     reader.readAsDataURL(imgPath);
//     }
//     var name = document.getElementById('name').value;
//     var summ = document.getElementById('summary1').value;
//     var email1 = document.getElementById('email').value;
//     var phnumber = document.getElementById('phnumber').value;
//     var location1 = document.getElementById('location').value;
//     var linkedin = document.getElementById('linkedin').value;
//     var github = document.getElementById('github').value;
//     var year1 = document.getElementById('year1').value;
//     var education1 = document.getElementById('education1').value;
//     var percentage1 = document.getElementById('percentage1').value;
//     var year2 = document.getElementById('year2').value;
//     var education2 = document.getElementById('education2').value;
//     var percentage2 = document.getElementById('percentage2').value;
//     var year3 = document.getElementById('year3').value;
//     var education3 = document.getElementById('education3').value;
//     var percentage3 = document.getElementById('percentage3').value;
//     var year4 = document.getElementById('year4').value;
//     var percentage4 = document.getElementById('percentage4').value;
//     var education4 = document.getElementById('education4').value;
//     var certicates1 = document.getElementById('certificates1').value;
//     var certicates2 = document.getElementById('certificates2').value;
//     var certicates3 = document.getElementById('certificates3').value;
//     var certicates4 = document.getElementById('certificates4').value;
//     var interest1 = document.getElementById('interest11').value;
//     var softskills1 = document.getElementById('softskills11').value;
//     var technicalskills1 = document.getElementById('technicalskills11').value;
//     var languages = document.getElementById('languages11').value;
//     localStorage.setItem("name",name);
//     localStorage.setItem("summ",summ);
//     localStorage.setItem("email1",email1);
//     localStorage.setItem("phnumber",phnumber);
//     localStorage.setItem("location1",location1);
//     localStorage.setItem("linkedin",linkedin);
//     localStorage.setItem("github",github);
//     localStorage.setItem("year1",year1);
//     localStorage.setItem("education1",education1);
//     localStorage.setItem("percentage1",percentage1);
//     localStorage.setItem("year2",year2);
//     localStorage.setItem("education2",education2);
//     localStorage.setItem("percentage2",percentage2);
//     localStorage.setItem("year3",year3);
//     localStorage.setItem("education3",education3);
//     localStorage.setItem("percentage3",percentage3);
//     localStorage.setItem("year4",year4);
//     localStorage.setItem("education4",education4);
//     localStorage.setItem("percentage4",percentage4);
//     localStorage.setItem("certificates1",certicates1);
//     localStorage.setItem("certificates2",certicates2);
//     localStorage.setItem("certificates3",certicates3);
//     localStorage.setItem("certificates4",certicates4);
//     localStorage.setItem("interest1",interest1);
//     localStorage.setItem("softskills1",softskills1);
//     localStorage.setItem("technicalskills1",technicalskills1);
//     localStorage.setItem("languages",languages);
//     window.location.href = "funcop.html";    

// }
   
//     document.getElementById('name1').innerHTML =  name;
//     document.getElementById('summ1').innerHTML = summ;
//     document.getElementById('email1').innerHTML = email1;
//     document.getElementById('phnumber2').innerHTML = phnumber;
//     document.getElementById('location2').innerHTML = location1; 
//     document.getElementById('linkedin2').innerHTML = linkedin; 
//     document.getElementById('github2').innerHTML = github; 
//     document.getElementById('year11').innerHTML = year1; 
//     document.getElementById('univ1').innerHTML = education1 
//     document.getElementById('score1').innerHTML = percentage1
//     document.getElementById('year22').innerHTML = year2 
//     document.getElementById('univ2').innerHTML = education2 
//     document.getElementById('score2').innerHTML = percentage2 
//     document.getElementById('year33').innerHTML = year3 
//     document.getElementById('univ3').innerHTML = education3 
//     document.getElementById('score3').innerHTML = percentage3 
//     document.getElementById('year44').innerHTML = year4 
//     document.getElementById('score4').innerHTML = percentage4 
//     document.getElementById('univ4').innerHTML = education4 
//     document.getElementById('cert1').innerHTML = certicates1
//     document.getElementById('cert2').innerHTML = certicates2
//     document.getElementById('cert3').innerHTML = certicates3
//     document.getElementById('cert4').innerHTML = certicates4
//     document.getElementById('interest1').innerHTML = interest1
//     document.getElementById('softskills1').innerHTML = softskills1
//     document.getElementById('technicalskills1').innerHTML = technicalskills1
//     document.getElementById('lang1').innerHTML = languages


// function chronoresume()
// {
    
//     var name = document.getElementById('name').value;
//      var pos = document.getElementById('position').value;
//      var pos_desc = document.getElementById('position_desc').value;
//     var email1 = document.getElementById('email').value;
//     var phnumber = document.getElementById('phnumber').value;
//     var location1 = document.getElementById('location').value;
//     var linkedin = document.getElementById('linkedin').value;
//     var github = document.getElementById('github').value;
//     var previousworkexp = document.getElementById('workexperience1').value;
//     var companyname = document.getElementById('companyname1').value;
//     var fromdate = document.getElementById('from1').value;
//     var todate = document.getElementById('to1').value;
//     var achievement = document.getElementById('achievements1').value;
//     var previousworkexp1 = document.getElementById('workexperience2').value;
//     var companyname1 = document.getElementById('companyname2').value;
//     var fromdate1 = document.getElementById('from2').value;
//     var todate1 = document.getElementById('to2').value;
//     var achievement1 = document.getElementById('achievements2').value;
//     var field = document.getElementById('field1').value;
//     var year1 = document.getElementById('year1').value;
//     var education1 = document.getElementById('education1').value;
//     var field1 = document.getElementById('field2').value;
//     var year2 = document.getElementById('year2').value;
//     var education2 = document.getElementById('education2').value;
//     var field2 = document.getElementById('field3').value;
//     var year3 = document.getElementById('year3').value;
//     var education3 = document.getElementById('education3').value;
//     var certicates1 = document.getElementById('certificates1').value;
//     var certicates2 = document.getElementById('certificates2').value;
//     var certicates3 = document.getElementById('certificates3').value;
//     var certicates4 = document.getElementById('certificates4').value;
//     var skill = document.getElementById('skill1').value;
//     var skill1 = document.getElementById('skill2').value;
//     var skill2 = document.getElementById('skill3').value;
//     var skill3 = document.getElementById('skill4').value;
//     var skill4 = document.getElementById('skill5').value;
//     var skill5 = document.getElementById('skill6').value;
//     var skillprog =  document.getElementById('skillprog1').value;
//     var skillprog1 = document.getElementById('skillprog2').value;
//     var skillprog2 = document.getElementById('skillprog3').value;
//     var skillprog3 = document.getElementById('skillprog4').value;
//     var skillprog4 = document.getElementById('skillprog5').value;
//     var skillprog5 = document.getElementById('skillprog6').value;
//     var languages =  document.getElementById('language1').value;
//     var languages1 = document.getElementById('language2').value;
//     var languages2 = document.getElementById('language3').value;
//     var stageip =    document.getElementById('stage1ip').value;
//     var stage1ip =   document.getElementById('stage2ip').value;
//     var stage2ip =   document.getElementById('stage3ip').value;


   
//     document.getElementById('name1').innerHTML =  name;
//      document.getElementById('position1').innerHTML = pos;
//     document.getElementById('position_desc1').innerHTML = pos_desc;
//     document.getElementById('email1').innerHTML = email1;
//     document.getElementById('phnumber2').innerHTML = phnumber;
//     document.getElementById('location2').innerHTML = location1; 
//     document.getElementById('linkedin2').innerHTML = linkedin; 
//     document.getElementById('github2').innerHTML = github; 
//     document.getElementById('workexperienceop1').innerHTML = previousworkexp;
//     document.getElementById('companyop1').innerHTML = companyname
//     document.getElementById('fromto').innerHTML = fromdate + todate;
//     document.getElementById('ach1op').innerHTML = achievement;
//     document.getElementById('workexperienceop2').innerHTML = previousworkexp1;
//     document.getElementById('companyop2').innerHTML = companyname1;
//     document.getElementById('fromto1').innerHTML = fromdate1 + todate1;
//     document.getElementById('ach2op').innerHTML = achievement1;
//     document.getElementById('degree1').innerHTML= field; 
//     document.getElementById('fromto3').innerHTML= year1; 
//     document.getElementById('collegename1').innerHTML= education1;
//     document.getElementById('degree2').innerHTML= field1; 
//     document.getElementById('fromto4').innerHTML= year2;
//     document.getElementById('collegename2').innerHTML=  education2;
//     document.getElementById('degree3').innerHTML = field2;
//     document.getElementById('fromto5').innerHTML =  year3;
//     document.getElementById('collegename3').innerHTML =  education3;
//     document.getElementById('certificates1op').innerHTML = certicates1
//     document.getElementById('certificates2op').innerHTML = certicates2
//     document.getElementById('certificates3op').innerHTML = certicates3
//     document.getElementById('certificates4op').innerHTML = certicates4
//     document.getElementById('skill1op').innerHTML = skill;
//     document.getElementById('skill2op').innerHTML = skill1;
//     document.getElementById('skill3op').innerHTML = skill2;
//     document.getElementById('skill4op').innerHTML = skill3;
//     document.getElementById('skill5op').innerHTML = skill4;
//     document.getElementById('skill6op').innerHTML = skill5;
//     document.getElementById('progress1').style.width=skillprog+"%";
//     document.getElementById('progress2').style.width=skillprog1+"%";
//     document.getElementById('progress3').style.width=skillprog2+"%";
//     document.getElementById('progress4').style.width=skillprog3+"%";
//     document.getElementById('progress5').style.width=skillprog4+"%";
//     document.getElementById('progress6').style.width=skillprog5+"%";
//     document.getElementById('lang1').innerHTML = languages;
//     document.getElementById('lang2').innerHTML = languages1;
//     document.getElementById('lang3').innerHTML = languages2;
//     document.getElementById('stage1').innerHTML = stageip;
//     document.getElementById('stage2').innerHTML = stage1ip;
//     document.getElementById('stage3').innerHTML = stage2ip;
    

    

// }


// function readURL(input) 
// {

//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             document.getElementById('imagefile1').src =  e.target.result;
//         }

//         reader.readAsDataURL(input.files[0]);
//     }
// }


