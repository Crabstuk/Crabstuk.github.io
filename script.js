const nieWiem = argumentYay =>{
    if(typeof argumentYay === "number"){
      return "10101010101010110101"
    }else if(typeof argumentYay === 'string'){
        return "text"
    }else {
        return "daj argument prawdziwy"
    }
};

// console.log(nieWiem(undefined))

const nieWiem2 = cos =>(cos * cos)

console.log(nieWiem2(5));

