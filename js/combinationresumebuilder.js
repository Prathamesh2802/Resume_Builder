window.onload = function()  {

    document.getElementById('name1').innerHTML = localStorage.getItem("combinationalname");
    document.getElementById('position1').innerHTML = localStorage.getItem("combinationalpos");
    document.getElementById('position_desc1').innerHTML = localStorage.getItem("combinationalpos_decs");
    document.getElementById('email1').innerHTML = localStorage.getItem("combinationalemail1");
    document.getElementById('phnumber2').innerHTML = localStorage.getItem("combinationalphnumber");
    document.getElementById('location2').innerHTML = localStorage.getItem("combinationallocation1");
    document.getElementById('linkedin2').innerHTML = localStorage.getItem("combinationallinkedin"); 
    document.getElementById('github2').innerHTML = localStorage.getItem("combinationalgithub"); 
    document.getElementById('workexperienceop1').innerHTML = localStorage.getItem("combinationalprevworkexp");
    document.getElementById('companyop1').innerHTML = localStorage.getItem("combinationalcompanyname");
    document.getElementById('fromto').innerHTML = localStorage.getItem("combinationalfromdate")+ localStorage.getItem("combinationaltodate");
    document.getElementById('ach1op').innerHTML = localStorage.getItem("combinationalachievement");
    document.getElementById('workexperienceop2').innerHTML = localStorage.getItem("combinationalprevworkexp1");
    document.getElementById('companyop2').innerHTML = localStorage.getItem("combinationalcompanyname1");
    document.getElementById('fromto1').innerHTML = localStorage.getItem("combinationalfromdate1")+ localStorage.getItem("combinationaltodate1");
    document.getElementById('ach2op').innerHTML = localStorage.getItem("combinationalachievement1");
    document.getElementById('degree1').innerHTML= localStorage.getItem("combinationalfield");
    document.getElementById('fromto3').innerHTML= localStorage.getItem("combinationalyear1"); 
    document.getElementById('collegename1').innerHTML= localStorage.getItem("combinationaleducation1");
    document.getElementById('degree2').innerHTML= localStorage.getItem("combinationalfield1"); 
    document.getElementById('fromto4').innerHTML= localStorage.getItem("combinationalyear2");
    document.getElementById('collegename2').innerHTML=  localStorage.getItem("combinationaleducation2");
    document.getElementById('degree3').innerHTML = localStorage.getItem("combinationalfield2");
    document.getElementById('fromto5').innerHTML =  localStorage.getItem("combinationalyear3");
    document.getElementById('collegename3').innerHTML =  localStorage.getItem("combinationaleducation3");
    document.getElementById('certificates1op').innerHTML = localStorage.getItem("combinationalcerticates1");
    document.getElementById('certificates2op').innerHTML = localStorage.getItem("combinationalcerticates2");
    document.getElementById('certificates3op').innerHTML = localStorage.getItem("combinationalcerticates3");
    document.getElementById('certificates4op').innerHTML = localStorage.getItem("combinationalcerticates4");
    document.getElementById('skill1op').innerHTML = localStorage.getItem("combinationalskill");
    document.getElementById('skill2op').innerHTML = localStorage.getItem("combinationalskill1");
    document.getElementById('skill3op').innerHTML = localStorage.getItem("combinationalskill2");
    document.getElementById('skill4op').innerHTML = localStorage.getItem("combinationalskill3");
    document.getElementById('skill5op').innerHTML = localStorage.getItem("combinationalskill4");
    document.getElementById('skill6op').innerHTML = localStorage.getItem("combinationalskill5");
    document.getElementById('progress1').style.width=localStorage.getItem("combinationalskillprog")+"%";
    document.getElementById('progress2').style.width=localStorage.getItem("combinationalskillprog1")+"%";
    document.getElementById('progress3').style.width=localStorage.getItem("combinationalskillprog2")+"%";
    document.getElementById('progress4').style.width=localStorage.getItem("combinationalskillprog3")+"%";
    document.getElementById('progress5').style.width=localStorage.getItem("combinationalskillprog4")+"%";
    document.getElementById('progress6').style.width=localStorage.getItem("combinationalskillprog5")+"%";
    document.getElementById('lang1').innerHTML = localStorage.getItem("combinationallanguages");
    document.getElementById('lang2').innerHTML = localStorage.getItem("combinationallanguages1");
    document.getElementById('lang3').innerHTML = localStorage.getItem("combinationallanguages2");
    document.getElementById('stage1').innerHTML = localStorage.getItem("combinationalstageip");
    document.getElementById('stage2').innerHTML = localStorage.getItem("combinationalstage1ip");
    document.getElementById('stage3').innerHTML = localStorage.getItem("combinationalstage2ip");
    document.getElementById('awardop1').innerHTML = localStorage.getItem("combinationalaward");
    document.getElementById('awardop2').innerHTML = localStorage.getItem("combinationalaward1");
    document.getElementById('awardop3').innerHTML = localStorage.getItem("combinationalaward2");
    document.getElementById('awarddescop1').innerHTML = localStorage.getItem("combinationalawarddesc");
    document.getElementById('awarddescop2').innerHTML = localStorage.getItem("combinationalawarddesc1");
    document.getElementById('awarddescop3').innerHTML = localStorage.getItem("combinationalawarddesc2");
    let img = document.getElementById('imagefile1');
    img.src = localStorage.getItem('combinationalres');
    
    }
    function combinationresume()
    {
        const imgPath = document.querySelector('#imagefile').files[0];
        const reader = new FileReader();
    
        reader.addEventListener("load", function () {
        // convert image file to base64 string and save to localStorage
            localStorage.setItem("combinationalres", reader.result);
        }, false);
    
        if (imgPath) {
        reader.readAsDataURL(imgPath);
        }
        var award11       =       document.getElementById('award1').value;         
        var award12       =       document.getElementById('award2').value;         
        var award13       =       document.getElementById('award3').value;         
        var awarddesc11   =       document.getElementById('awarddesc1').value;  
        var awarddesc12   =       document.getElementById('awarddesc2').value;  
        var awarddesc13   =       document.getElementById('awarddesc3').value;  
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
    
        localStorage.setItem("combinationalname",name);
        localStorage.setItem("combinationalpos",pos);
        localStorage.setItem("combinationalpos_decs",pos_decs);
        localStorage.setItem("combinationalemail1",email1);
        localStorage.setItem("combinationalphnumber",phnumber);
        localStorage.setItem("combinationallocation1",location1);
        localStorage.setItem("combinationallinkedin",linkedin);
        localStorage.setItem("combinationalgithub",github);
        localStorage.setItem("combinationalprevworkexp",prevworkexp);
        localStorage.setItem("combinationalcompanyname",companyname);
        localStorage.setItem("combinationalfromdate",fromdate);
        localStorage.setItem("combinationaltodate",todate);
        localStorage.setItem("combinationalachievement",achievement);
        localStorage.setItem("combinationalprevworkexp1",prevworkexp1);
        localStorage.setItem("combinationalcompanyname1",companyname1);
        localStorage.setItem("combinationalfromdate1",fromdate1);
        localStorage.setItem("combinationaltodate1",todate1);
        localStorage.setItem("combinationalachievement1",achievement1);
        localStorage.setItem("combinationalfield",field);
        localStorage.setItem("combinationalyear1",year1);
        localStorage.setItem("combinationaleducation1",education1);
        localStorage.setItem("combinationalfield1",field1);
        localStorage.setItem("combinationalyear2",year2);
        localStorage.setItem("combinationaleducation2",education2);
        localStorage.setItem("combinationalfield2",field2);
        localStorage.setItem("combinationalyear3",year3);
        localStorage.setItem("combinationaleducation3",education3);
        localStorage.setItem("combinationalcerticates1",certicates1);
        localStorage.setItem("combinationalcerticates2",certicates2);
        localStorage.setItem("combinationalcerticates3",certicates3);
        localStorage.setItem("combinationalcerticates4",certicates4);
        localStorage.setItem("combinationalskill",skill);
        localStorage.setItem("combinationalskill1",skill1);
        localStorage.setItem("combinationalskill2",skill2);
        localStorage.setItem("combinationalskill3",skill3);
        localStorage.setItem("combinationalskill4",skill4);
        localStorage.setItem("combinationalskill5",skill5);
        localStorage.setItem("combinationalskillprog",skillprog);
        localStorage.setItem("combinationalskillprog1",skillprog1);
        localStorage.setItem("combinationalskillprog2",skillprog2);
        localStorage.setItem("combinationalskillprog3",skillprog3);
        localStorage.setItem("combinationalskillprog4",skillprog4);
        localStorage.setItem("combinationalskillprog5",skillprog5);
        localStorage.setItem("combinationallanguages",languages);
        localStorage.setItem("combinationallanguages1",languages1);
        localStorage.setItem("combinationallanguages2",languages2);
        localStorage.setItem("combinationalstageip",stageip);
        localStorage.setItem("combinationalstage1ip",stage1ip);
        localStorage.setItem("combinationalstage2ip",stage2ip);
        localStorage.setItem("combinationalaward",award11);
        localStorage.setItem("combinationalaward1",award12);
        localStorage.setItem("combinationalaward2",award13);
        localStorage.setItem("combinationalawarddesc",awarddesc11);
        localStorage.setItem("combinationalawarddesc1",awarddesc12);
        localStorage.setItem("combinationalawarddesc2",awarddesc13);
        window.location.href = "combinationalmainop.html";    
    
    
    }
    
    function print1()
    {
    document.getElementById("combinationalframe").contentWindow.print();
    }
    
    function back()
    {
        localStorage.clear();
        window.location.href = "index.html";
    }