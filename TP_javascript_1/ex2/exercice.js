//question 1

function alea(n){
    return Math.floor(Math.random()*n);
}

console.log(alea(10));

//question 2
function createRandomArray(n,max){
    var tab = [];
    for(var i=0; i<n; i++){
        tab.push(alea(max+1));
    }
    return tab;
}

console.log(createRandomArray(10,10));

//question 3
function maxElement(tab){
    var max = 0;
    for(var i=0; i<tab.length; i++){
        if(tab[i]>max){
            max = tab[i];
        }
    }
    return max;
}


//question 4
function nbOccurrences(tab,element)
{
    var count = 0;
    for(var i=0; i<tab.length;i++)
    {
        if(tab[i] == element){
            count++;
        }
    }
    return count;
}
