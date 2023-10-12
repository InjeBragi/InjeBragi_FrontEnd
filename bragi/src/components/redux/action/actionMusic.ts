export const SEARCH_PAGE_MUSIC = "SEARCH_PAGE_MUSIC";

export const searchMusicOnPage = (data:object) =>{
    
    return{
        type:SEARCH_PAGE_MUSIC,
        data:data
    }
}