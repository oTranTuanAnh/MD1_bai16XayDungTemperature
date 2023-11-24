class Temperature {
    celcius;
    constructor(celcius) {
        this.celcius = celcius;
    }

    convertF(){
        return (this.celcius*9/5+32);
    }

    converetK(){
        return (this.celcius+273.15);
    }
}

let myTem = new Temperature(25);
let myF = myTem.convertF();
let myK = myTem.converetK();

document.write("nhiet do F la "+ myF + "<br>");
document.write("nhiet do K la "+ myK);

