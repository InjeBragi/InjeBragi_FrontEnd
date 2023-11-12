export const SEARCH_PAGE_MUSIC = "SEARCH_PAGE_MUSIC";
export const SET_NOW_PLAYING_MUSIC = "SET_NOW_PLAYING_MUSIC"
export const searchMusicOnPage = (data:object) =>{
    
    return{
        type:SEARCH_PAGE_MUSIC,
        data:data
    }
}

export const setNowPlayingMusic = (data:any) =>{
    return{
        type:SET_NOW_PLAYING_MUSIC,
        data:data,
        
    }
}
