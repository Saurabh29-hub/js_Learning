const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){    // here function is return func and val is argument as auto it
//     console.log(val);
// } )

coding.forEach( (item) => {
    console.log(item);  // arrow method
} )

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    // console.log(item.languageName);
} )