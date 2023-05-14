window.onload = function()  {

document.getElementById('name1').innerText = localStorage.getItem("chrononame");
document.getElementById('position1').innerText = localStorage.getItem("chronopos");
document.getElementById('position_desc1').innerText = localStorage.getItem("chronopos_decs");
document.getElementById('email1').innerText = localStorage.getItem("chronoemail1");
document.getElementById('phnumber2').innerText = localStorage.getItem("chronophnumber");
document.getElementById('location2').innerText = localStorage.getItem("chronolocation1");
document.getElementById('linkedin2').innerText = localStorage.getItem("chronolinkedin"); 
document.getElementById('github2').innerText = localStorage.getItem("chronogithub"); 
document.getElementById('workexperienceop1').innerText = localStorage.getItem("chronoprevworkexp");
document.getElementById('companyop1').innerText = localStorage.getItem("chronocompanyname");
document.getElementById('fromto').innerText = localStorage.getItem("chronofromdate")+ localStorage.getItem("chronotodate");
document.getElementById('ach1op').innerText = localStorage.getItem("chronoachievement");
document.getElementById('workexperienceop2').innerText = localStorage.getItem("chronoprevworkexp1");
document.getElementById('companyop2').innerText = localStorage.getItem("chronocompanyname1");
document.getElementById('fromto1').innerText = localStorage.getItem("chronofromdate1")+ localStorage.getItem("chronotodate1");
document.getElementById('ach2op').innerText = localStorage.getItem("chronoachievement1");
document.getElementById('degree1').innerText= localStorage.getItem("chronofield");
document.getElementById('fromto3').innerText= localStorage.getItem("chronoyear1"); 
document.getElementById('collegename1').innerText= localStorage.getItem("chronoeducation1");
document.getElementById('degree2').innerText= localStorage.getItem("chronofield1"); 
document.getElementById('fromto4').innerText= localStorage.getItem("chronoyear2");
document.getElementById('collegename2').innerText=  localStorage.getItem("chronoeducation2");
document.getElementById('degree3').innerText = localStorage.getItem("chronofield2");
document.getElementById('fromto5').innerText =  localStorage.getItem("chronoyear3");
document.getElementById('collegename3').innerText =  localStorage.getItem("chronoeducation3");
document.getElementById('certificates1op').innerText = localStorage.getItem("chronocerticates1");
document.getElementById('certificates2op').innerText = localStorage.getItem("chronocerticates2");
document.getElementById('certificates3op').innerText = localStorage.getItem("chronocerticates3");
document.getElementById('certificates4op').innerText = localStorage.getItem("chronocerticates4");
document.getElementById('skill1op').innerText = localStorage.getItem("chronoskill");
document.getElementById('skill2op').innerText = localStorage.getItem("chronoskill1");
document.getElementById('skill3op').innerText = localStorage.getItem("chronoskill2");
document.getElementById('skill4op').innerText = localStorage.getItem("chronoskill3");
document.getElementById('skill5op').innerText = localStorage.getItem("chronoskill4");
document.getElementById('skill6op').innerText = localStorage.getItem("chronoskill5");
document.getElementById('progress1').style.width=localStorage.getItem("chronoskillprog")+"%";
document.getElementById('progress2').style.width=localStorage.getItem("chronoskillprog1")+"%";
document.getElementById('progress3').style.width=localStorage.getItem("chronoskillprog2")+"%";
document.getElementById('progress4').style.width=localStorage.getItem("chronoskillprog3")+"%";
document.getElementById('progress5').style.width=localStorage.getItem("chronoskillprog4")+"%";
document.getElementById('progress6').style.width=localStorage.getItem("chronoskillprog5")+"%";
document.getElementById('lang1').innerText = localStorage.getItem("chronolanguages");
document.getElementById('lang2').innerText = localStorage.getItem("chronolanguages1");
document.getElementById('lang3').innerText = localStorage.getItem("chronolanguages2");
document.getElementById('stage1').innerText = localStorage.getItem("chronostageip");
document.getElementById('stage2').innerText = localStorage.getItem("chronostage1ip");
document.getElementById('stage3').innerText = localStorage.getItem("chronostage2ip");
let img = document.getElementById('imagefile1');
img.src = localStorage.getItem('chronoimage');

}
function chronoresume()
{
    const imgPath = document.querySelector('#imagefile').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
    // convert image file to base64 string and save to localStorage
        localStorage.setItem("chronoimage", reader.result);
    }, false);

    if (imgPath) {
    reader.readAsDataURL(imgPath);
    }
    
    var  name        =       document.getElementById('name').value;
    var  pos         =       document.getElementById('position').value;
    var  pos_decs    =       document.getElementById('position_desc').value;
    var  email1      =       document.getElementById('email').value;
    var  phnumber    =       document.getElementById('phnumber').value;
    var  location1   =       document.getElementById('location').value;
    var  linkedin    =       document.getElementById('linkedin').value;
    var  github      =       document.getElementById('github').value;
    var  prevworkexp =       document.getElementById('workexperience1').value;
    var  companyname =       document.getElementById('companyname1').value;
    var  fromdate    =       document.getElementById('from1').value;
    var  todate      =       document.getElementById('to1').value;
    var  achievement =       document.getElementById('achievements1').value;
    var  prevworkexp1=       document.getElementById('workexperience2').value;
    var  companyname1=       document.getElementById('companyname2').value;
    var  fromdate1   =       document.getElementById('from2').value;
    var  todate1     =       document.getElementById('to2').value;
    var  achievement1=       document.getElementById('achievements2').value;
    var  field       =       document.getElementById('field1').value;
    var  year1       =       document.getElementById('year1').value;
    var  education1  =       document.getElementById('education1').value;
    var  field1      =       document.getElementById('field2').value;
    var  year2       =       document.getElementById('year2').value;
    var  education2  =       document.getElementById('education2').value;
    var  field2      =       document.getElementById('field3').value;
    var  year3       =       document.getElementById('year3').value;
    var  education3  =       document.getElementById('education3').value;
    var  certicates1 =       document.getElementById('certificates1').value;
    var  certicates2 =       document.getElementById('certificates2').value;
    var  certicates3 =       document.getElementById('certificates3').value;
    var  certicates4 =       document.getElementById('certificates4').value;
    var  skill       =       document.getElementById('skill1').value;
    var  skill1      =       document.getElementById('skill2').value;
    var  skill2      =       document.getElementById('skill3').value;
    var  skill3      =       document.getElementById('skill4').value;
    var  skill4      =       document.getElementById('skill5').value;
    var  skill5      =       document.getElementById('skill6').value;
    var  skillprog   =       document.getElementById('skillprog1').value;
    var  skillprog1  =       document.getElementById('skillprog2').value;
    var  skillprog2  =       document.getElementById('skillprog3').value;
    var  skillprog3  =       document.getElementById('skillprog4').value;
    var  skillprog4  =       document.getElementById('skillprog5').value;
    var  skillprog5  =       document.getElementById('skillprog6').value;
    var  languages   =       document.getElementById('language1').value;
    var  languages1  =       document.getElementById('language2').value;
    var  languages2  =       document.getElementById('language3').value;
    var  stageip     =       document.getElementById('stage1ip').value;
    var  stage1ip    =       document.getElementById('stage2ip').value;
    var  stage2ip    =       document.getElementById('stage3ip').value;

    localStorage.setItem("chrononame",name);
    localStorage.setItem("chronopos",pos);
    localStorage.setItem("chronopos_decs",pos_decs);
    localStorage.setItem("chronoemail1",email1);
    localStorage.setItem("chronophnumber",phnumber);
    localStorage.setItem("chronolocation1",location1);
    localStorage.setItem("chronolinkedin",linkedin);
    localStorage.setItem("chronogithub",github);
    localStorage.setItem("chronoprevworkexp",prevworkexp);
    localStorage.setItem("chronocompanyname",companyname);
    localStorage.setItem("chronofromdate",fromdate);
    localStorage.setItem("chronotodate",todate);
    localStorage.setItem("chronoachievement",achievement);
    localStorage.setItem("chronoprevworkexp1",prevworkexp1);
    localStorage.setItem("chronocompanyname1",companyname1);
    localStorage.setItem("chronofromdate1",fromdate1);
    localStorage.setItem("chronotodate1",todate1);
    localStorage.setItem("chronoachievement1",achievement1);
    localStorage.setItem("chronofield",field);
    localStorage.setItem("chronoyear1",year1);
    localStorage.setItem("chronoeducation1",education1);
    localStorage.setItem("chronofield1",field1);
    localStorage.setItem("chronoyear2",year2);
    localStorage.setItem("chronoeducation2",education2);
    localStorage.setItem("chronofield2",field2);
    localStorage.setItem("chronoyear3",year3);
    localStorage.setItem("chronoeducation3",education3);
    localStorage.setItem("chronocerticates1",certicates1);
    localStorage.setItem("chronocerticates2",certicates2);
    localStorage.setItem("chronocerticates3",certicates3);
    localStorage.setItem("chronocerticates4",certicates4);
    localStorage.setItem("chronoskill",skill);
    localStorage.setItem("chronoskill1",skill1);
    localStorage.setItem("chronoskill2",skill2);
    localStorage.setItem("chronoskill3",skill3);
    localStorage.setItem("chronoskill4",skill4);
    localStorage.setItem("chronoskill5",skill5);
    localStorage.setItem("chronoskillprog",skillprog);
    localStorage.setItem("chronoskillprog1",skillprog1);
    localStorage.setItem("chronoskillprog2",skillprog2);
    localStorage.setItem("chronoskillprog3",skillprog3);
    localStorage.setItem("chronoskillprog4",skillprog4);
    localStorage.setItem("chronoskillprog5",skillprog5);
    localStorage.setItem("chronolanguages",languages);
    localStorage.setItem("chronolanguages1",languages1);
    localStorage.setItem("chronolanguages2",languages2);
    localStorage.setItem("chronostageip",stageip);
    localStorage.setItem("chronostage1ip",stage1ip);
    localStorage.setItem("chronostage2ip",stage2ip);
    window.location.href = "Chronologicaloutput.html";    


}

function print1()
{
document.getElementById("chronoframe").contentWindow.print();
}

function back()
{
    localStorage.clear();
    window.location.href = "index.html";
}