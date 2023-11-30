// Interface Pato
class Pato {
  grasnar() {}
  voar() {}
}

// Implementação concreta de um Pato
class PatoSelvagem extends Pato {
  grasnar() {
    console.log('Pato selvagem está grasnando.');
  }
  voar() {
    console.log('Pato selvagem está voando.');
  }
}

// Interface Galinha
class Galinha {
  cacarejar() {}
  voarCurto() {}
}

// Implementação concreta de uma Galinha
class GalinhaComum extends Galinha {
  cacarejar() {
    console.log('Galinha comum está cacarejando.');
  }
  voarCurto() {
    console.log('Galinha comum está voando baixo.');
  }
}

// Adaptador para transformar um Pato em uma Galinha
class AdaptadorPato extends Galinha {
  constructor(pato) {
    super();
    this.pato = pato;
  }

  cacarejar() {
    this.pato.grasnar();
  }

  voarCurto() {
    this.pato.voar();
  }
}

// Demonstração do uso do AdaptadorPato
class AdaptadorPatoDemo {
  static run() {
    const patoSelvagem = new PatoSelvagem();
    const adaptadorPato = new AdaptadorPato(patoSelvagem);

    console.log('Usando o Pato como se fosse uma Galinha:');
    adaptadorPato.cacarejar();
    adaptadorPato.voarCurto();
  }
}

// Executando a demonstração
AdaptadorPatoDemo.run();
