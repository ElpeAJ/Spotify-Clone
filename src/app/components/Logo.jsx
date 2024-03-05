import SpotifyWhite from '../assets/images/logo.png';
import SpotifyBlack from "../assets/images/spotify-black.png";
// import SpotifyBlackSVG from "../assets/images/spotify-black.svg";

export function Logo(props){
  if (props.useWhite){
    return (
      <a href = "#/dashboard">
        <img src={SpotifyWhite}/>
        
      </a>
    )
  } else {
    return (
      <a href="#/dashboard">
        <img src={SpotifyBlack} />
      </a>
    );
  }
}

// export function Logo2(){
//   return(
//     <img src={SpotifyBlack}/>
//   )
// }