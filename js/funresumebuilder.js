
window.onload = function(){
    document.getElementById('name1').innerText = localStorage.getItem("funname");
    document.getElementById('summ1').innerText =localStorage.getItem("funsumm");
    document.getElementById('email1').innerText =localStorage.getItem("funemail1");
    document.getElementById('phnumber2').innerText =localStorage.getItem("funphnumber");
    document.getElementById('location2').innerText =localStorage.getItem("funlocation1");
    document.getElementById('linkedin2').innerText =localStorage.getItem("funlinkedin");
    document.getElementById('github2').innerText =localStorage.getItem("fungithub");
    document.getElementById('year11').innerText =localStorage.getItem("funyear1");
    document.getElementById('univ1').innerText =  localStorage.getItem("funeducation1");
    document.getElementById('score1').innerText = localStorage.getItem("funpercentage1");
    document.getElementById('year22').innerText = localStorage.getItem("funyear2");
    document.getElementById('univ2').innerText =   localStorage.getItem("funeducation2");
    document.getElementById('score2').innerText =  localStorage.getItem("funpercentage2");
    document.getElementById('year33').innerText =  localStorage.getItem("funyear3");
    document.getElementById('univ3').innerText =   localStorage.getItem("funeducation3");
    document.getElementById('score3').innerText =   localStorage.getItem("funpercentage3");
    document.getElementById('year44').innerText =  localStorage.getItem("funyear4");
    document.getElementById('score4').innerText =  localStorage.getItem("funpercentage4");
    document.getElementById('univ4').innerText =  localStorage.getItem("funeducation4");
    document.getElementById('cert1').innerText = localStorage.getItem("funcertificates1");
    document.getElementById('cert2').innerText = localStorage.getItem("funcertificates2");
    document.getElementById('cert3').innerText = localStorage.getItem("funcertificates3");
    document.getElementById('cert4').innerText = localStorage.getItem("funcertificates4");
    document.getElementById('interest1').innerText = localStorage.getItem("funinterest1"); 
    document.getElementById('softskills1').innerText = localStorage.getItem("funsoftskills1");
    document.getElementById('technicalskills1').innerText = localStorage.getItem("funtechnicalskills1");
    document.getElementById('lang1').innerText = localStorage.getItem("funlanguages");
    let img = document.getElementById('imagefile1');
    img.src = localStorage.getItem('funimage');
}


function funcresume()
{
    const imgPath = document.querySelector('#imagefile').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
    // convert image file to base64 string and save to localStorage
        localStorage.setItem("funimage", reader.result);
    }, false);

    if (imgPath) {
    reader.readAsDataURL(imgPath);
    }
    var name = document.getElementById('name').value;
    var summ = document.getElementById('summary1').value;
    var email1 = document.getElementById('email').value;
    var phnumber = document.getElementById('phnumber').value;
    var location1 = document.getElementById('location').value;
    var linkedin = document.getElementById('linkedin').value;
    var github = document.getElementById('github').value;
    var year1 = document.getElementById('year1').value;
    var education1 = document.getElementById('education1').value;
    var percentage1 = document.getElementById('percentage1').value;
    var year2 = document.getElementById('year2').value;
    var education2 = document.getElementById('education2').value;
    var percentage2 = document.getElementById('percentage2').value;
    var year3 = document.getElementById('year3').value;
    var education3 = document.getElementById('education3').value;
    var percentage3 = document.getElementById('percentage3').value;
    var year4 = document.getElementById('year4').value;
    var percentage4 = document.getElementById('percentage4').value;
    var education4 = document.getElementById('education4').value;
    var certicates1 = document.getElementById('certificates1').value;
    var certicates2 = document.getElementById('certificates2').value;
    var certicates3 = document.getElementById('certificates3').value;
    var certicates4 = document.getElementById('certificates4').value;
    var interest1 = document.getElementById('interest11').value;
    var softskills1 = document.getElementById('softskills11').value;
    var technicalskills1 = document.getElementById('technicalskills11').value;
    var languages = document.getElementById('languages11').value;
    localStorage.setItem("funname",name);
    localStorage.setItem("funsumm",summ);
    localStorage.setItem("funemail1",email1);
    localStorage.setItem("funphnumber",phnumber);
    localStorage.setItem("funlocation1",location1);
    localStorage.setItem("funlinkedin",linkedin);
    localStorage.setItem("fungithub",github);
    localStorage.setItem("funyear1",year1);
    localStorage.setItem("funeducation1",education1);
    localStorage.setItem("funpercentage1",percentage1);
    localStorage.setItem("funyear2",year2);
    localStorage.setItem("funeducation2",education2);
    localStorage.setItem("funpercentage2",percentage2);
    localStorage.setItem("funyear3",year3);
    localStorage.setItem("funeducation3",education3);
    localStorage.setItem("funpercentage3",percentage3);
    localStorage.setItem("funyear4",year4);
    localStorage.setItem("funeducation4",education4);
    localStorage.setItem("funpercentage4",percentage4);
    localStorage.setItem("funcertificates1",certicates1);
    localStorage.setItem("funcertificates2",certicates2);
    localStorage.setItem("funcertificates3",certicates3);
    localStorage.setItem("funcertificates4",certicates4);
    localStorage.setItem("funinterest1",interest1);
    localStorage.setItem("funsoftskills1",softskills1);
    localStorage.setItem("funtechnicalskills1",technicalskills1);
    localStorage.setItem("funlanguages",languages);
    window.location.href = "Functionaloutput.html";    

}

function print1()
{
document.getElementById("funcframe").contentWindow.print();
}

function back()
{
    localStorage.clear();
    window.location.href = "index.html";
}