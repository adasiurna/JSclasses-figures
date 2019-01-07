class Figura {
    constructor(_krastine) {
        this.krastine = _krastine;
    }

    aprasymas() {
        console.log(`Aš esu figūra, mano kraštinė ${this.krastine}`);
    }

    //surastiPagalPlota(100)
    //surastiPagalPerimetra(100)
}

class Kvadratas extends Figura {
    constructor(_krastine) {
        super(_krastine);
    }

    //skaiciuojam plotą
    getPlotas() {
        return Math.pow(this.krastine, 2);
    }

    getPerimetras() {
        return this.krastine * 4;
    }

    spausdintiAprasyma() {
        console.log(`Aš esu Kvadratas, mano kraštinė ${this.krastine}, mano plotas ${this.getPlotas()}`);
    }

    koksPlotas(perimetras) {
        var krastinePlotui = perimetras / 4;
        return krastinePlotui * krastinePlotui;

    }

    koksPerimetras(plotas) {
        var krastinePerimetrui = Math.sqrt(plotas);
        return krastinePerimetrui * 4;
    }
}

class Trikampis extends Figura {
    constructor(_krastine) {
        super(_krastine);
    }

    //skaiciuojam plotą
    getPlotas() {
        return (this.krastine * this.krastine * Math.sqrt(3)) / 4
    }

    getPerimetras() {
        return this.krastine * 3;
    }

    spausdintiAprasyma() {
        console.log(`Aš esu Trikampis, mano kraštinė ${this.krastine}, mano plotas ${this.getPlotas()}`);
    }

    koksPlotas(perimetras) {
        var krastinePlotui = perimetras / 3;
        return (krastinePlotui * krastinePlotui * Math.sqrt(3)) / 4

    }

    koksPerimetras(plotas) {
        var krastinePerimetrui = Math.sqrt((plotas * 4) / Math.sqrt(3));
        console.log("skai2iuoju" + plotas + " :" + krastinePerimetrui);
        return krastinePerimetrui * 3;
    }
}

class Apskritimas extends Figura {
    constructor(_krastine) {
        super(_krastine);
    }

    //skaiciuojam plotą
    getPlotas() {
        return Math.PI * Math.pow(this.krastine, 2);
    }

    getPerimetras() {
        return this.krastine * 2 * Math.PI;
    }
    spausdintiAprasyma() {
        console.log(`Aš esu Apskritimas, mano kraštinė ${this.krastine}, mano plotas ${this.getPlotas()}`);
    }

    koksPlotas(perimetras) {
        var krastinePlotui = perimetras / (2 * Math.Pi);
        return Math.PI * Math.pow(krastinePlotui, 2)

    }

    koksPerimetras(plotas) {
        var krastinePerimetrui = Math.sqrt(plotas / Math.PI);
        return 2 * Math.PI * krastinePerimetrui
    }
}