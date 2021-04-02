
function test1()
{
var request = new XMLHttpRequest();
    var url = "https://pokeapi.co/api/v2/pokemon/";
 
    console.log(url + document.getElementById("Input").value);
    
    request.open('GET', url + document.getElementById("Input").value);
    request.responseType = 'json';
    request.send();


    request.onload = function()
    {

    	console.log(request.response); 

    	var Result = request.response;
        document.getElementById("Name").innerHTML = Result.name;
        document.getElementById("height").innerHTML = Result.height;
        document.getElementById("weight").innerHTML = Result.weight;
        document.getElementById("base_experience").innerHTML = Result.base_experience
        if (document.getElementById("Name").innerHTML!="undefined")
            document.getElementById("Card").style.display="block"
        else
        {
            document.getElementById("Card").style.display="none"
            document.getElementById("ErrorMessage").style.display="inline"
        }
        //randColor();
   
    }
}
