function form(a,b,c,d){
const formSection = document.getElementById(a);
const inputs = document.getElementsByTagName(b);
const labels = document.getElementsByTagName(c);
const button = document.getElementById(d);



    
    formSection.style = ` border:1px solid black; padding: 20px;
    width: 60%;
    margin: auto;`

    button.style = `background-color:green;
    color: white;
    width: 200px;
    margin: 10px;
    padding: 5px;
    border: none;
    text-color:none;`

  
   
    


    for(let i = 0; i < inputs.length; i++){
        inputs[i].style = `
        width: 90%;
            padding: 10px;
            margin: 10px;
            text-decoration: none;`
            
    }

    for(let i = 0; i < labels.length; i++){
        labels[i].style = `
        
        margin: 50px;
        padding: 3px;
        color: black;`
    }
    // for(let i = 0; i < labels.length; i++){
    //     labels[r].style = `
        
    //     margin: 10px;
    //     padding: 3px;
    //     color: black;`
    //     float:left;
    // }
}
//calling the function
form("change", "input", "label", "submitBtn")





//Form validattion



document.getElementById("submitBtn").addEventListener("click", validate)

function validate(event){
    
    event.preventDefault()

    const secondName = document.getElementById("secondName").value
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const address = document.getElementById("address").value
    const occupation = document.getElementById("occupation").value
    const propertyOwned = document.getElementById("propertyOwned").value
    const amountToBorrow = document.getElementById("amountToBorrow").value
    const referee = document.getElementById("referee").value
    const Male = document.getElementById("gender").value
    const Female = document.getElementById("gender").value

    if(!firstName){
        document.getElementById("firstName").value = "Please enter first name"
        const input = document.getElementById("firstName")
        input.style.border = "2px solid red"
        
        document.getElementById("firstName").addEventListener("click", ()=>{
            let errorValue = document.getElementById("firstName").value
            if(errorValue.includes("Please")){
            document.getElementById("firstName").value = ""
            }else if(!(isNaN(errorValue))){
                document.getElementById("firstName").value = "Name must not be a number"
            }else if(errorValue.includes("number")){
            document.getElementById("firstName").value = ""
            }
        })
        
    }else if(!(isNaN(firstName))){
        document.getElementById("firstName").value = "Name must not be a number";
        const input = document.getElementById("firstName")
        input.style.border = "2px solid red"
        return false;
    }

   

    if(!secondName){
        document.getElementById("secondName").value = " Please enter second name";
        const input = document.getElementById("secondName")
        input.style.border = "2px solid red"

        document.getElementById("secondName").addEventListener("click", ()=>{
            let errorValue = document.getElementById("secondName").value
            if(errorValue.includes("Please")){
                document.getElementById("secondName").value = ""
            }else if(!(isNaN(errorValue))){
                document.getElementById("secondName").value = "Name must not be a number"
            }else if(errorValue.includes("number")){
            document.getElementById("secondName").value = ""
            }})

        
    }else if(!(isNaN(secondName))){
        document.getElementById("secondName").value = "Name must not be a number";
        const input = document.getElementById("secondName");
        input.style.border = "2px solid red"
    }
    if(!lastName){
        document.getElementById("lastName").value = ""
    }else{
        document.getElementById("lastName").value = ""
    }
    

    if(!address){
        document.getElementById("address").value = "Please enter address"
        const input = document.getElementById("address")
        input.style.border = "2px solid red"
        document.getElementById("address").addEventListener("click", ()=>{
            let errorValue = document.getElementById("address").value
            if(errorValue.includes("Please")){
                document.getElementById("address").value = ""
            }else if(!(isNaN(errorValue))){
                document.getElementById("address").value = "address must not be a number"
            }else if(errorValue.includes("number")){
            document.getElementById("address").value = ""
            }})

    }

    if(!occupation){
        document.getElementById("occupation").value = "Please enter occupation"
        const input = document.getElementById("occupation")
        input.style.border = "2px solid red"
        document.getElementById("occupation").addEventListener("click", ()=>{
            let errorValue = document.getElementById("occupation").value
            if(errorValue.includes("Please")){
                document.getElementById("occupation").value = ""
            }else if(!(isNaN(errorValue))){
                document.getElementById("occupation").value = "occupation must not be a number"
            }else if(errorValue.includes("number")){
            document.getElementById("occupation").value = ""
            }})
    }

    if(!propertyOwned){
        document.getElementById("propertyOwned").value = "Please enter property Owned"
        const input = document.getElementById("propertyOwned")
        input.style.border = "2px solid red"
        document.getElementById("propertyOwned").addEventListener("click", ()=>{
            let errorValue = document.getElementById("propertyOwned").value
            if(errorValue.includes("Please")){
                document.getElementById("propertyOwned").value = ""
            }else if(!(isNaN(errorValue))){
                document.getElementById("propertyOwned").value = "property Owned must not be a number"
            }else if(errorValue.includes("number")){
            document.getElementById("propertyOwned").value = ""
            }})
    }

    if(!amountToBorrow){
        document.getElementById("amountToBorrow").value = "please enter amount to borrow"
        const input = document.getElementById("amountToBorrow")
        input.style.border = "2px solid red"
        document.getElementById("amountToBorrow").addEventListener("click", ()=>{
            let errorValue = document.getElementById("amountToBorrow").value
            if(errorValue.includes("please")){
                document.getElementById("amountToBorrow").value = ""
            }else if(!(is>2,000,000(errorValue))){
                document.getElementById("amountToBorrow").value = "amount to borrow must not be less than 2,000,000"
            }else if(errorValue.includes("<2,000,000")){
                document.getElementById("amountToBorrow").value = ""
            }})
    }

    if(!referee){
        document.getElementById("referee").value = "Please enter referee"
        const input = document.getElementById("referee")
        input.style.border = "2px solid red"
        document.getElementById("referee").addEventListener("click", ()=>{
            let errorValue = document.getElementById("referee").value
            if(errorValue.includes("Please")){
                document.getElementById("referee").value = ""
            }else if(!(isNaN(errorValue))){
                document.getElementById("referee").value = "Referee must not be a number"
            }else if(errorValue.includes("number")){
            document.getElementById("referee").value = ""
            }})
    }
}