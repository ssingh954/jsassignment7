function truncate(string, limit){
    if(string.length <= limit){
        return string;
    }
    return string.slice(0, limit) + "...";
}

console.log(truncate('Ice',4));
console.log(truncate('Icecream',4));