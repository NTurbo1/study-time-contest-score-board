export const updateLocalStorageScores = () => {

    let dict = {
        'shokha_score': localStorage.getItem('shokha_study_time'),
        'tore_score': localStorage.getItem('tore_study_time'),
        'nurbo_score': localStorage.getItem('nurbo_study_time')
    }

    var items = Object.keys(dict).map(function(key) {
        return [key, dict[key]];
    });
      
    items.sort(function(first, second) {
        return second[1] - first[1];
    });

    console.log(items);

    // Allocate points
    const item0Point = 2 
    let item1Point = 1 
    let item2Point = 0

    if (items[1][1] === items[0][1]) item1Point = item0Point
    if (items[2][1] === items[1][1]) item2Point = item1Point

    localStorage.setItem(items[0][0], parseInt(localStorage.getItem(items[0][0])) + item0Point)
    localStorage.setItem(items[1][0], parseInt(localStorage.getItem(items[1][0])) + item1Point)
    localStorage.setItem(items[2][0], parseInt(localStorage.getItem(items[2][0])) + item2Point)

}