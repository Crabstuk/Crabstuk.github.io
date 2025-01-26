const ea = smth => {
    if(smth == "meow"){
        console.log("i liek trains")
    }else{
        console.log(smth);
    }
};

const k = smth =>{
    if (smth == "nothing"){
        console.log("...")
    }else{
        return "explosion";
    }
};

const slabaLogika = keasdweeea => {
    if(keasdweeea == "e"){
        if(k() == "explosion"){
            console.log("explodes")
        }
    }else{
        console.log("EAFSASDASDASDADAS")
    }
}
ea(new Date().getHours());
k(1);
slabaLogika("e");