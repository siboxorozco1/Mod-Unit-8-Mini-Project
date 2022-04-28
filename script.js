

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
	let comedy = ["https://elcomercio.pe/resizer/ZWHJ9KjNqt_ga97jqdsMK1Twj-Y=/560x315/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/AJ5OUVYT35BTTL3Z75N66QXUMY.jpg", "https://indiehoy.com/wp-content/uploads/2020/06/peliculas-comedia-1200x900.jpg","https://play-lh.googleusercontent.com/hRmzO3WZm3vrvbO58SbT26504OdxV3NtMCeHzP7QXmjrqAQFbi10Ign3jxa8g27gUyS_nw"];
	 let action =["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHNZE3_WlI70CfTd5PrJ-lR_NLs8WkLSGow&usqp=CAU", "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUmHe2k-pWOSowBMU8TlZP2eXDBKb2TpFdyGZFRL78Y7kYfgYT3ggFvPxpHgqXnL04kfhU4xLb_FUOH8mLoqlsa734k.jpg?r=14f","https://i.ytimg.com/vi/1UoKJj5LRsA/maxresdefault.jpg"];
	 let drama =["https://www.lafilacero.com/covers/215/129481554800192.jpg?7", "https://qph.fs.quoracdn.net/main-qimg-cf4a92776a1eb4c01c618f8ad3707eb9.webp","https://www.lafilacero.com/covers/215/132501581244160.jpg?7"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
    if(genreInput==="comedy"){
     for(let show of comedy){
    $(".shows").append("<img src="+show+">");
    }
	}
    else if(genreInput==="action"){
    for (let show of action){
    (".shows").append("<img src="+ show+">");
   }
   }
    else if(genreInput==="drama"){
    for (let show of drama){
    $(".shows").append("<img src="+ show+">");
    }
    }
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	comedy.push(suggestion);
     console.log(comedy);
    action.push(suggestion);
    console.log(action);
    drama.push(suggestion);
    console.log(drama);

    
});