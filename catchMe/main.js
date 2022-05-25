// function that returns the sum


function sum(x, y){
   if(typeof(x) !== "number" ){
       throw new Error("The input is not a number!")
   }else if (typeof(y) !== "number" ){
    throw new Error("The input is not a number!")
   }else{return x + y}
    
  };
  console.log(sum(7, 7));

  //forced error throw with incorrect input and catch to console log

  try{
    sum("1", "2")

  }
  catch(err){
    console.log(err)

  };



  // user object/ login   check for correct credentials throw error if not right

  var user = {username: "sam", password: "123abc"};
  
  function login(username, password){
    if(username === user.username && password === user.password){
        console.log("Login was succesful!")
    }else{
        throw new Error("Some or all of the information you have entered is incorrect, please try again.")
    }

  };

  try{
    login("sam", "123abc")


  }

  catch(err){
      console.log(err)
  };

  try{
    login("ssam", "1223abc")


  }

  catch(err){
      console.log(err)
  }


