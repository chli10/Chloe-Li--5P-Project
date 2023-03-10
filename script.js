let enter=document.querySelector(".enter");
let question1=document.querySelector(".question1");
let titlePage=document.querySelector(".title-page");
let title=document.querySelector(".title");
let enterButton=document.querySelector(".enter");
let question2=document.querySelector(".question2");
let enter2=document.querySelector(".enter2");
let answer=document.querySelector(".answer");
let img=document.querySelector(".images");
let result=document.querySelector(".result");
titlePage.onclick=function(){
    question1.style.display="block";
    titlePage.style.display="none";
    title.style.display="none";
};

enter.onclick=function(){
    question2.style.display="block";
    question1.style.display="none";
 	let siblings=document.querySelector(".siblings").value;
    console.log("userInput");
    let dessert=document.querySelector(".dessert").value;
    console.log("userInput2");
   
	};

enter2.onclick=function(){
    question2.style.display="none";
    result.style.display="block";
    let dessert=document.querySelector(".dessert").value;
    console.log("userInput2");
    let siblings=document.querySelector(".siblings").value;
    console.log("userInput");
    
    
    if (siblings <=2 && dessert==="cookies"){
    	answer.innerHTML="Since you have "+ siblings + " siblings and you like eating " + dessert + "...you are most like Pochacco!";
img.src="https://cdn.shopify.com/s/files/1/0416/8083/0620/files/01132022_soc_pinterestboardcoverupdate_PC_1200x1200_2_480x480.png?v=1643148624";
        
        
} else if (siblings <= 2 && dessert==="cake"){
	answer.innerHTML="Since you have "+ siblings + " siblings and you like eating " + dessert + "...you are most like Hello Kitty!";
    img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYTEw2NOCocHI4M3qHstL2_Z5hwGqQgaRX6g&usqp=CAU";
    
    
} else if (siblings >2 && dessert==="cookies"){
	answer.innerHTML="Since you have "+ siblings + " siblings and you like eating " + dessert + "...you are most like Badtz Maru!"; img.src="http://cdn.shopify.com/s/files/1/0416/8083/0620/articles/XO_1200x1200_50a6ecae-031c-4dc3-a8d5-4b3e756b10d9_600x.png?v=1656354632";
    
    
}else if (siblings>2 && dessert==="cake"){ 
    answer.innerHTML="Since you have "+ siblings + " siblings and you like eating " + dessert + "...you are most like My Melody!"; img.src="https://i.pinimg.com/550x/a7/ec/34/a7ec3492f162f6a2fb911a039df85f3b.jpg";
}
    
};
    








