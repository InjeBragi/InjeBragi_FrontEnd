export const SET_SPOTIFY_TOKEN = "SET_SPOTIFY_TOKEN"

export const setSpotifyToken = (token:string) =>{
    return{
        type:SET_SPOTIFY_TOKEN,
        token:token
    }
}