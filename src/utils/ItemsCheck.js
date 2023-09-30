export const checkLocalStorageItems = () => {

    if (localStorage.getItem('shokhaReported') === null) {
        localStorage.setItem('shokhaReported', false)
    }
    if (localStorage.getItem('toreReported') === null) {
        localStorage.setItem('toreReported', false)
    }
    if (localStorage.getItem('nurboReported') === null) {
        localStorage.setItem('nurboReported', false)
    }
    
    if(localStorage.getItem('shokha_score') === null) {
        localStorage.setItem('shokha_score', 0)
    }
    if(localStorage.getItem('tore_score') === null) {
        localStorage.setItem('tore_score', 0)
    }
    if(localStorage.getItem('nurbo_score') === null) {
        localStorage.setItem('nurbo_score', 0)
    }
}