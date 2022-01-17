import { Injectable } from '@angular/core';

@Injectable()
export class VideojuegosService {

  private videojuegos: Videojuego[]=[
    {
    nombre: 'Fornite',
    descripcion: 'Fortnite es un videojuego del año 2017 desarrollado por la empresa epic games, lamzado como' +
      ' diferentes paqutes de software que presentan diferentes modos de juego, pero que comparte con el ' +
      'mismo motor general de juegos y las mecanicas. Fue anunciado en los Spike Video Games Awards en 2011',
    img:'assets/img/ps4/fortnite.png',
    lanzamiento: '2017',
    consola:'PS4'
  },
    {
      nombre: 'God of War',
      descripcion: 'El videojuego se centra en la historia de la mitología nórdica, ' +
        'a diferencia de los títulos anteriores, que se ubicaban en la Antigua Grecia y ' +
        'su mitología. Con el cambio de cultura, hacen su aparición espacios míticos como ' +
        'el árbol de Yggdrasil y criaturas como la serpiente Jörmungandr.',
      img:'assets/img/ps4/god_of_war_4.jpg',
      lanzamiento: '2018',
      consola:'PS4'
    },
    {
      nombre: 'Uncharted',
      descripcion: 'Uncharted 4: El Desenlace del Ladrón es la llegada de Nathan Drake ' +
        'a la nueva generación de videojuegos, en una cuarta parte de la serie desarrollada ' +
        'por Naughty Dog que nos llevará de nuevo a vivir aventuras en los lugares más ' +
        'recónditos del mundo.',
      img:'assets/img/ps4/uncharted_4.jpg',
      lanzamiento: '2016',
      consola:'PS4'
    },
    {
      nombre: 'assassin\'s creed valhalla',
      descripcion: 'Assassin\'s Creed Valhalla es una nueva entrega de la saga de aventura y acción ' +
        'histórica a cargo de Ubisoft para PC, PlayStation 4, Xbox One, PlayStation 5, Xbox Series X ' +
        'y Stadia ambientada en la era vikinga. Ponte en la piel de Eivor y lidera a tu clan desde los ' +
        'gélidos páramos de Noruega hasta un nuevo hogar en los exuberantes campos de la Inglaterra del ' +
        'siglo IX. Funda tu asentamiento, conquista esa tierra hostil cueste lo que cueste y gánate un ' +
        'lugar en el Valhalla. La Inglaterra de la era vikinga es una nación fracturada, plagada de ruines ' +
        'señores feudales y reinos en guerra, pero bajo ese caos yace una tierra rica e indómita que aguarda ' +
        'a que alguien la conquiste',
      img:'assets/img/ps4/assassins_creed_valhalla.png',
      lanzamiento: '2020',
      consola:'PS4'
    },
    {
      nombre: 'Grand Theft Auto V',
      descripcion: 'Grand Theft Auto V es el juego de mundo abierto más grande, ' +
        'más dinámico y más diverso jamás creado. Combina la historia y la jugabilidad ' +
        'de un modo nuevo, mientras los jugadores entran y salen repetidamente de las ' +
        'vidas de los tres personajes principales.',
      img:'assets/img/ps4/gta_v.jpg',
      lanzamiento: '2013',
      consola:'PS4'
    },
    {
      nombre: 'second son',
      descripcion: 'Sinopsis. El juego se localiza siete años después del final ' +
        'de inFAMOUS 2. El jugador encarna a Delsin Rowe, un joven de 24 años afincado ' +
        'en Seattle con una fuerte y contestataria conciencia política, y una personalidad con dotes artísticas',
      img:'assets/img/ps4/second_son.jpg',
      lanzamiento: '2014',
      consola:'PS4'
    },
    {
      nombre: 'horizon zero sawn',
      descripcion: 'Horizon Zero Dawn es un videojuego de rol con elementos de ' +
        'acción y aventura en tercera persona. El juego se ambienta en un mundo ' +
        'post-apocalíptico donde reina la naturaleza, las zonas rurales, zonas ' +
        'montañosas y los bosques. ... En el mundo de Horizon Zero Dawn, el jugador ' +
        'pueden cumplir misiones secundarias.',
      img:'assets/img/ps4/horizon_zero_sawn.jpg',
      lanzamiento: '2017',
      consola:'PS4'
    },
    {
      nombre: 'Halo Infinite',
      descripcion: 'Halo Infinite es un videojuego de disparos en primera ' +
        'persona de la franquicia de videojuegos de ciencia ficción creada ' +
        'por Bungie Studios y actualmente desarrollada por 343 Industries. ' +
        'Es exclusivo para las plataformas Xbox One, Microsoft Windows y Xbox Series X|S.',
      img:'assets/img/ps4/halo_infinite.jpg',
      lanzamiento: '2021',
      consola:'Xbox'
    }
  ];

  constructor() {
    console.log('Servicio listo para usarse.');
  }

  getVideojuegos(): Videojuego[]{
    return this.videojuegos;
  }

  getVideojuego(idx:number){
    return this.videojuegos[idx];
  }

  buscarVideojuegos(termino: string): Videojuego[]{
  let videojuegosArr: Videojuego[]=[];
  termino=termino.toLowerCase();

  for(let videojuego of this.videojuegos){
    let nombre=videojuego.nombre.toLowerCase();
    if (nombre.indexOf(termino)>=0){
      videojuegosArr.push(videojuego);
    }
  }
return videojuegosArr;
  }

}

export interface Videojuego{
  nombre: String;
  descripcion:String;
  img: String;
  lanzamiento: String;
  consola: String;
}
