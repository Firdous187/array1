import logo from './logo.svg';
import './App.css';

function App() {

  let characterOfMovieInterstellar =["Matthew McConaughey" ,"Jessica  chastain ", "Anne Hathaway", "Machenzie Foy", "Timothee Chalamet" , "Matt Damon" ,"Michael Caine"]; 
  return (
    <div className="App">

      <button type ="button" onClick ={()=>{
        console.log(characterOfMovieInterstellar);
        console.log(characterOfMovieInterstellar.length);
        console.log(characterOfMovieInterstellar[5]);

        for(let i=0;i<=characterOfMovieInterstellar.length;i++){
          console.log(characterOfMovieInterstellar[i]);
        }

      }}>Length</button>


      <button type ="button" onClick ={()=>{
       for(let i=0;i<=characterOfMovieInterstellar.length;i++){
        console.log(characterOfMovieInterstellar.at(i));
      }
      }}>At</button>


      <button type ="button" onClick ={()=>{

        console.log(characterOfMovieInterstellar);
        console.log(characterOfMovieInterstellar.toString());
      }}>To String</button>

      <button type ="button" onClick ={()=>{
        console.log(characterOfMovieInterstellar.join("'''"));
      }}>Join</button>


      <button type ="button" onClick ={()=>{
        console.log(characterOfMovieInterstellar);
        delete characterOfMovieInterstellar[0];
      }}>Delete</button>

      <button type ="button" onClick ={()=>{
        console.log(characterOfMovieInterstellar);
        characterOfMovieInterstellar.pop();
      }}>pop</button>

      <button type ="button" onClick ={()=>{
        console.log(characterOfMovieInterstellar);
        characterOfMovieInterstellar.push("Hero");
      }}>push</button>

      <button type ="button" onClick ={()=>{
            console.log(characterOfMovieInterstellar);
            characterOfMovieInterstellar.shift();
      }}>Shift</button>

      <button type ="button" onClick ={()=>{
        console.log(characterOfMovieInterstellar);
        characterOfMovieInterstellar.unshift("Hello");
      }}>Unshift</button>


      <button type ="button" onClick ={()=>{
       console.log(characterOfMovieInterstellar);
       characterOfMovieInterstellar.splice(2,3,"shaik","firdous");


      }} >Splice</button>
      <button type ="button" onClick ={()=>{}}></button>
      <button type ="button" onClick ={()=>{}}></button>
    </div>
  );
}

export default App;
