import React, { Component } from 'react';

import './App.css';
import { GraphQLObjectType, buildSchema, graphql } from 'graphql'



function fetchResponsebyURL(){
  return fetch("https://api.github.com/users/bhanusankhyan/repos").then(res => res.json())
}




/*const Data = new GraphQLObjectType({
  name : 'MyRestAPI',
  fields : () => ({
    fetchResponsebyURL
  }),
});
export default new GraphQLSchema({
  query: Data,
}); 
*/




//graphql(schema, '{ id }', "https://api.github.com/users/bhanusankhyan/repos").then((response) => {
 // console.log(response);
//});


class App extends Component {

  
  render() {
    var schema = buildSchema(`
type Query{
  id:ID,
  name: String,
  full_name : String,
}`
);




/*var new_root = {id: () => 'Hello'};



 const resolver = {   
Query:{
  id: (parent, args, context, info) => 'Hello world!' ,

  },
}
function result(){
 var res =  (fetch("https://api.github.com/users/bhanusankhyan/repos").then((response) => response.data).then((responseJson)=>{
   {id: () => 1}
  console.log(responseJson[0].name)
  alert ("Hello")
}))
}*/
var root =  { id: async() => { var con = await fetch("https://api.github.com/users/bhanusankhyan/repos")
  var conJson = await con.json()
// console.log(responseJson[0].name)
 alert ("Hello")
 return conJson[0].id}, 
}

   //var root = { name: () => 'Hello world!' };

/*   var root = fetch("https://api.github.com/users/bhanusankhyan/repos").then((response) => response.json())
   .then((responseJson) => {
     
       
         id:() => {return (responseJson[0]['id'])}
  
     })*/

    graphql(schema, '{ id, name, full_name }',  root).then((response) =>{
      console.log(response)
    })
    //console.log(schema)
    
     
   
  
       

    
    
    
    return (
      <div className="App">
        Hello
       
        
      </div>
    );
  }
}

export default App;
