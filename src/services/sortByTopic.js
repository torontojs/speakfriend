export default (sortBy, arr) => {
    const regex = new RegExp(sortBy.toLowerCase());
    arr.sort((a,b) => {
        let topicsA = a.fields['Topics'] ? a.fields['Topics'] : "" ,
            topicsB = b.fields['Topics'] ? b.fields['Topics'] : "" ;

        topicsA = regex.test(topicsA.toLowerCase());
        topicsB = regex.test(topicsB.toLowerCase());

        if(topicsA && topicsB) {
            return 0;
        } else if ( topicsA && !topicsB){
            return -1;
        } else if ( topicsB && !topicsA){
            return 1;
        }
    })

    return arr;
}