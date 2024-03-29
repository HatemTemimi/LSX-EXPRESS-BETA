let path = require("path");

const shuffle = (req, res) => {
  const shuffle = true;
  let aliasarr = ['Looper','Joy','Sin','420','Downr','Virtigo','Ease'];
  let alias = aliasarr[Math.floor(Math.random() * aliasarr.length)];
  let arr = [
    //"trapstyle",
    " mindblow-turing-spots",
    " slices",
    "man-o-warp", // not loading chrome
    "suturefluid-mk2-2M",
    "inline-webworker-thread",
    "jamfactory", // not loading chrome
    "turing-fluid",
    "acrylic-fluid",
    //"fractalfluid",
    //"trappist",
    //"hodgepodge",
    //"edgebatch", laggy
    "suckerpunch",
    "viscousfingering-2M", // not loading chrome linux
    //"citylab",
    "suturefluid-fogzone-2M", //not loading chrome linux
     //not loading chrome linux
    //"egregore", laggy
    "fluid-giraffe",
    "DragonTrack2017",
    //"touchy-physarum-fluid-mix",
    //"inksplash", // not loading chrome linux laggy
    "smoked-rainbow-beans",
    "smoked-rainbow-beans-spiced-with-floating-inversions",
    "candlewick",
    "candlewickturing",
    "networth",
    "coupled-Turing-pattern-fluid",
    "cell-division",
    "Bubbles",
    "triangles",
    "particles",
    "blood-cells",
    "brick-tunnel",
    "swim-tube",
    //"suckerpunch-diode", // 404
    "jamfactory", // not loading chrome linux
    // "bleedingedge",
    "milkyway-bivariate1",
    "warpbuffer",
    "traffic-ohio",
    "digicloud",
    "locations",
    "torus-tunnel",
    "spiralforge",
    "spiralgate",
    //"edgebatch",
    "blood-cells", 
    "brick-tunnel",
    "swim-tube",
    "black-nebula", 
    "black&white", 
    "grow-scales", 
    "hxdj",
    "jellyfish",
    "spiralgate",
    "swim-tube",
    
  ];

  let shufflevar = arr[Math.round(Math.random() * arr.length)];
  console.log("chosen : " + shufflevar);
  if (req.query.interval) {
    if (!isNaN(req.query.interval)) {
      if (req.query.interval === 2) {
        res.render(`${shufflevar}`, { loop: true, interval: 60000, alias });
      } else if (req.query.interval === 3) {
        res.render(`${shufflevar}`, { loop: true, interval: 120000,alias });
      } else if (req.query.interval === 4) {
        res.render(`${shufflevar}`, { loop: true, interval: 180000,alias });
      } else {
        res.render(`${shufflevar}`, { loop: true, interval: 30000,alias });
      }
    } else {
      res.redirect("/how-did-u-get-here?");
    }
  } else res.redirect("/how-did-u-get-here?");
};

const bubbles = (req, res) => {
  res.render("Bubbles", { loop: false, interval: 0 });
};

const citylab = (req, res) => {
  res.render("citylab", { loop: false, interval: 0 });
};

const hadleyAttractor = (req, res) => {
  res.render("hadley-attractor-mk2", { loop: false, interval: 0 });
};

const smokedRainbowBeans = (req, res) => {
  res.render("smoked-rainbow-beans", { loop: false, interval: 0, alias:'Rainbow Beans' });
};

const SpicedRainbowBeans = (req, res) => {
  res.render("smoked-rainbow-beans-spiced-with-floating-inversions", {
    loop: false,
    interval: 0,
    alias: 'Beans'
  });
};

const candlewick = (req, res) => {
  res.render("candlewick", { loop: false, interval: 0 ,alias:'candlewick'});
};

const suckerpunch = (req, res) => {
  res.render("suckerpunch", { loop: false, interval: 0,alias:'suckerpunch' });
};

const trapstyle = (req, res) => {
  res.render("trapstyle", { loop: false, interval: 0,alias:'trapstyle' });
};
const trappist = (req, res) => {
  res.render("trappist", { loop: false, interval: 0,alias:'trappist' });
};

const milkyway = (req, res) => {
  res.render("milkyway", { loop: false, interval: 0, alias: 'milkyway' });
};

const turingSpots = (req, res) => {
  res.render("mindblow-turing-spots", { loop: false, interval: 0, alias:'turing spots' });
};
const pickoverAttractor = (req, res) => {
  res.render("pickover-attractor", { loop: false, interval: 0 });
};
const hodgepodge = (req, res) => {
  res.render("hodgepodge", { loop: false, interval: 0,alias:'hodgepodge' });
};
const milkywank = (req, res) => {
  res.render("man-o-warp", { loop: false, interval: 0,alias:'milkywank' });
};
const thomasattractor = (req, res) => {
  res.sendFile(path.join(__dirname, ".views/thomas-attractor-mk2.html"));
  res.render('thomas-attractor-mk2');
};
const halvorsenattractor = (req, res) => {
 // res.sendFile(path.join(__dirname, ".views/halvorsen-attractor-mk2.html"));
  res.render('halvorsen-attractor-mk2');
};

const acrylicfluid = (req, res) => {
  res.render("acrylic-fluid", { loop: false, interval: 0,alias:'Acrylic' });
};
const fractalfluid = (req, res) => {
  res.render("blue-haze", { loop: false, interval: 0,alias:'Blue' });
};
const webworker = (req, res) => {
  res.render("inline-webworker-thread", { loop: false, interval: 0,alias:'WebWorker' });
};

const index = (req, res) => {
  res.render("index");
};
const home = (req, res) => {
  res.render("home", { arrayOfObjects: arrayOfObjects });
};
const error = (req, res) => {
  res.render("abandoned-planet");
};
//const index = (req,res) => { res.render('welcomeoverlay');}

const turing_fluid = (req, res) => {
  res.render("turing-fluid", { loop: false, interval: 0,alias:'Turing Fluid' });
};

const touchy_physarum = (req, res) => {
  res.render("touchy-physarum-fluid-mix", { loop: false, interval: 0,alias:'Acid Night' });
};

const inksplash = (req, res) => {
  res.render("inksplash", { loop: false, interval: 0,alias:'inksplash' });
};
// const inksplash = (req, res) => {
//   res.sendFile(path.join(__dirname, ".simulations/inksplash.html"));
// };
const milkywayBivariate1 = (req, res) => {
  res.render("milkyway-bivariate1", { loop: false, interval: 0,alias:'Bivariate' });
};

const edgebatch = (req, res) => {
  res.render("edgebatch", { loop: false, interval: 0,alias:'edgebatch' });
};

const jamfactory = (req, res) => {
  res.render("jamfactory", { loop: false, interval: 0,alias:'jamfactory' });
};

const powerhouse = (req, res) => {
  res.render("powerhouse", { loop: false, interval: 0,alias:'powerhouse' });
};

const bleedingedge = (req, res) => {
  res.render("bleedingedge", { loop: false, interval: 0,alias:'bleedingedge' });
};
const dragontrack = (req, res) => {
  res.render("DragonTrack2017", { loop: false, interval: 0,alias:'dragontrack' });
};
const lightwheel = (req, res) => {
  res.render("stone-flower", { loop: false, interval: 0,alias:'Stone Flower' });
};
const suckerpunchDiode = (req, res) => {
  res.render("suckerpunch-diode", { loop: false, interval: 0,alias:'spdiode' });
};
const egregore = (req, res) => {
  res.render("egregore", { loop: false, interval: 0,alias:'egregore' });
};

const suturefluid = (req, res) => {
  res.render("suturefluid-mk2-2M", { loop: false, interval: 0,alias:'suture' });
};

const fogzone = (req, res) => {
  res.render("suturefluid-fogzone-2M", { loop: false, interval: 0,alias:'fogzone' });
};
const visciousfingering = (req, res) => {
  res.render("viscousfingering-2M", { loop: false, interval: 0,alias:'viscious fingering' });
};
const fluidgiraffe = (req, res) => {
  res.render("fluid-giraffe", { loop: false, interval: 0,alias:'Kebis' });
};
const candlewickturing = (req, res) => {
  res.render("candlewickturing", { loop: false, interval: 0,alias:'candlewick' });
};
const networth = (req, res) => {
  res.render("networth", { loop: false, interval: 0,alias:'networth' });
};
const warpbuffer = (req, res) => {
  res.render("warpbuffer", { loop: false, interval: 0,alias:'warpbuffer' });
};
const layeredfractals = (req, res) => {
  res.render("layered-fractals-wip", { loop: false, interval: 0,alias:'layered fractals' });
};
const coupledturing = (req, res) => {
  res.render("coupled-Turing-pattern-fluid", {
    loop: false,
    interval: 0,
    alias:'Coupled Patterns'
  });
};
const celldivision = (req, res) => {
  res.render("cell-division", {
    loop: false,
    interval: 0,
    alias:'cell division'
  });
};
const about = (req, res) => {
  res.render("Cocoon-template/about");
};
const particles = (req, res) => {
  res.render("particles", { loop: false, interval: 0,alias:'particles' });
};
const digicloud = (req, res) => {
  res.render("digicloud", { loop: false, interval: 0,alias:'cyber-cloud' });
};
const locations = (req, res) => {
  res.render("locations", { loop: false, interval: 0,alias:'locations' });
};
const torusTunnel = (req, res) => {
  res.render("torus-tunnel", { loop: false, interval: 0,alias:'Torus' });
};
const triangles = (req, res) => {
  res.render("triangles", { loop: false, interval: 0 ,alias:'Triangles'});
};
const spiralforge = (req, res) => {
  res.render("spiralforge", { loop: false, interval: 0,alias:'Forge' });
};
const spiralgate = (req, res) => {
  res.render("spiralgate", { loop: false, interval: 0,alias:'Gate' });
};
const bloodcells = (req, res) => {
  res.render("blood-cells", { loop: false, interval: 0,alias:'O+' });
};
const bricktunnel = (req, res) => {
  res.render("brick-tunnel", { loop: false, interval: 0,alias:'Violenza' });
};
const swimtube = (req, res) => {
  res.render("swim-tube", { loop: false, interval: 0,alias:'Swim' });
};
const blacknebula = (req, res) => {
  res.render("black-nebula", { loop: false, interval: 0 ,alias:'Nebula'});
};
const blacknwhite = (req, res) => {
  res.render("black&white", { loop: false, interval: 0,alias:'B & W' });
};
const growscales = (req, res) => {
  res.render("grow-scales", { loop: false, interval: 0,alias:'scales' });
};
const hxdj = (req, res) => {
  res.render("hxdj", { loop: false, interval: 0 });
};
const blurry = (req, res) => {
  res.render("blurry", { loop: false, interval: 0 });
};
const trafficohio = (req, res) => {
  let arr = ['Headlights','Traffic Ohio', 'Infinite Lights','Aerobase','Cyber Mountain','Ascendency','Vertigo']
  let shufflevar = arr[Math.floor(Math.random() * arr.length)];
  res.render("traffic-ohio", { loop: false, interval: 0, alias: shufflevar });
};
const slices = (req, res) => {
  res.render("slices", { loop: false, interval: 0,alias:'slices' });
};
const littletriangles = (req, res) => {
  res.render("little-triangles", { loop: false, interval: 0,alias:'tri-fractals' });
};
const jellyfish = (req, res) => {
  res.render("jellyfish", { loop: false, interval: 0,alias:'Jelly' });
};


module.exports = {
  jellyfish,
  littletriangles,
  slices,
  trafficohio,
  blurry,
  hxdj,
  growscales,
  blacknwhite,
  blacknebula,
  swimtube,
  bricktunnel,
  bloodcells,
  spiralgate,
  spiralforge,
  digicloud,
  locations,
  torusTunnel,
  triangles,
  particles,
  about,
  celldivision,
  coupledturing,
  warpbuffer,
  layeredfractals,
  candlewickturing,
  networth,
  fluidgiraffe,
  milkywayBivariate1,
  bubbles,
  citylab,
  error,
  home,
  hadleyAttractor,
  smokedRainbowBeans,
  SpicedRainbowBeans,
  candlewick,
  bleedingedge,
  dragontrack,
  lightwheel,
  suckerpunchDiode,
  egregore,
  suturefluid,
  fogzone,
  visciousfingering,
  suckerpunch,
  trappist,
  trapstyle,
  milkyway,
  shuffle,
  turingSpots,
  pickoverAttractor,
  hodgepodge,
  milkywank,
  thomasattractor,
  halvorsenattractor,
  webworker,
  fractalfluid,
  acrylicfluid,
  powerhouse,
  jamfactory,
  edgebatch,
  inksplash,
  turing_fluid,
  touchy_physarum,
  inksplash,
  index,
};

const arrayOfObjects = [
  {
    name: "Hit the road",
    category: "Tunnels",
    link: "/traffic-ohio",
    description: "Ready the wheels !",
    image: "/images/traffic-ohio.png",
    // image: "/images/highway.gif",
  },
  {
    name: "Slices",
    category: "Patterns",
    link: "/slices",
    description: "slice & dice",
    image: "/images/slices.png",
  },
  {
    name: "Grow scales",
    category: "Tunnels",
    link: "/growscales",
    description: "in for some scales ?",
    image: "/images/grow-scales.png",
  },
  {
    name: "Little Triangles",
    category: "Patterns",
    link: "/little-triangles",
    description: "Hooo",
    image: "/images/little-triangles.png",
  },
  {
    name: "B & W",
    category: "Tunnels",
    link: "/blacknwhite",
    description: "swim like an adult.",
    image: "/images/blacknwhite.png",
  },
  {
    name: "R & M Nebula",
    category: "Tunnels",
    link: "/rick&mortynebula",
    description: "swim like an adult.",
    image: "/images/ricknmortynebula.png",
  },
  {
    name: "Swim Tube",
    category: "Tunnels",
    link: "/swimtube",
    description: "swim like an adult.",
    image: "/images/swimtube.png",
  },
  {
    name: "Triangles Tube",
    category: "Tunnels",
    link: "/triangles",
    description: "it might be an animal.",
    image: "/images/triangles.png",
  },
  {
    name: "Blood Wagon",
    category: "Tunnels",
    link: "/bloodcells",
    description: "hope into the spiral.",
    image: "/images/blood-cells.png",
  },
  {
    name: "Violenza",
    category: "Tunnels",
    link: "/violenza",
    description: "hope into the spiral.",
    image: "/images/brick-tunnel.png",
  },
  {
    name: "Spiral Forge",
    category: "Tunnels",
    link: "/spiralforge",
    description: "hope into the spiral.",
    image: "/images/spiralforge.png",
  },

 
  {
    name: "Digicloud",
    category: "Particles",
    link: "/digicloud",
    description: "it's cloudy.",
    image: "/images/digicloud.png",
  },
  {
    name: "Locations Nav",
    category: "Particles",
    link: "/locations",
    description: "you're going places.",
    image: "/images/locations.png",
  },
  {
    name: "Torus Tunnel",
    category: "Fluid",
    link: "/torus-tunnel",
    description: "it's a long way home.",
    image: "/images/torus-tunnel.png",
  },
  {
    name: "Jellys",
    category: "Particles",
    link: "/jellyfish",
    description: "it might be an animal.",
    image: "/images/Jellyfish.png",
  },
  {
    name: "Particles Tube",
    category: "Tunnels Particles",
    link: "/particles",
    description: "it might be an animal.",
    image: "/images/particles.png",
  },
  {
    name: "Fractal Blue",
    category: "Patterns",
    link: "/fractal_blue",
    description: "triangle fractal patterns",
    image: "/images/fractal-blue.png",
  },
  {
    name: "Spiral Gate",
    category: "Tunnels",
    link: "/spiralgate",
    description: "Gate to somewhere",
    image: "/images/spiralgate.png",
  },

  {
    name: "Cell Division",
    category: "Patterns Fluid",
    link: "/cell-division",
    description: "it might be an animal.",
    image: "/images/celldivision.png",
  },

  {
    name: "Spiced Rainbow Beans",
    category: "Particles Patterns",
    link: "/spiced-rainbow-beans",
    description: "They don't taste the same.",
    image: "/images/smoked-rainbow-beans.png",
  },
  {
    name: "Coupled Turing",
    category: "Fluid",
    link: "/coupled-turing",
    description: "it might be an animal.",
    image: "/images/coupledturing.png",
  },
  {
    name: "Candlewick Turing",
    category: "Fluid",
    link: "/candlewickturing",
    description: "it might be an animal.",
    image: "/images/candlewickturing.png",
  },
  {
    name: "Blurry",
    category: "particles",
    link: "/blurry",
    description: "can't c well.",
    image: "/images/Blurry.png",
  },
  {
    name: "Warpbuffer",
    category: "Turing",
    link: "/warpbuffer",
    description: "warp & buffer.",
    image: "/images/warpbuffer.png",
  },
  {
    name: "Networth",
    category: "Fluid",
    link: "/networth",
    description: "it might be an animal.",
    image: "/images/networth.png",
  },
  {
    name: "Fluid Giraffe",
    category: "Fluid",
    link: "/fluid-giraffe",
    description: "it might be an animal.",
    image: "/images/fluid-giraffe.png",
  },
  {
    name: "Hadley Attractor",
    category: "Attractors",
    link: "/hadley-attractor",
    description: "Personal favorite.",
    image: "/images/hadley-attractor-mk2.png",
  },
  {
    name: "Milky Way Bivariate",
    category: "Fluid",
    link: "/milky-way-bivariate",
    description: "To variate or to bivariate ?",
    image: "/images/milkyway-blur.png",
  },
  {
    name: "Smoked Rainbow Beans",
    category: "Particles Patterns",
    link: "/smoked-rainbow-beans",
    description: "In for some beans ?",
    image: "/images/smoked-rainbow-beans1.png",
  },

 
  {
    name: "Candlewick",
    category: "Particles Patterns",
    link: "/candlewick",
    description: "jhon wick's night candle.",
    image: "/images/candlewick.png",
  },
  {
    name: "Bleeding Edge",
    category: "Typo",
    link: "/bleeding-edge",
    description: "Are you on the edge ?",
    image: "/images/bleedingEdge.png",
  },
  {
    name: "Dragon Track",
    category: "Particles Fluid",
    link: "/dragon-track",
    description: "Pink dragons inc.",
    image: "/images/stochastic-particles.png",
  },
  {
    name: "Egregore",
    category: "Particles Fluid",
    link: "/egregore",
    description: "Don't move the cursor !",
    image: "/images/egregore.png",
  },
  {
    name: "Stone flower",
    category: "Typo",
    link: "/stone-flower",
    description: "safe wheels ?",
    image: "/images/stone-flower.png",
  },
  {
    name: "Diode Suckerpunch",
    category: "Typo",
    link: "/diode-suckerpunch",
    description: "what kind of diode ?",
    image: "/images/suckerpunch-diode.png",
  },

  {
    name: "Turing-fluid",
    category: "Patterns Fluid",
    link: "/turing_fluid",
    description: "Turn on the Turing Machine !",
    image: "/images/turing_fluid.png",
  },
  {
    name: "Inksplash",
    category: "Fluid",
    link: "/inksplash",
    description: "Get Inked!",
    image: "/images/inksplash.png",
  },
  {
    name: "Touchy Physarum",
    category: "Fluid",
    link: "/light_physarum",
    description: "Light Physarum at your service !",
    image: "/images/acid-night.png",
  },
  {
    name: "EdgeBatch",
    category: "Fluid Patterns",
    link: "/edgebatch",
    description: "Green and Blue",
    image: "/images/edgebatch.png",
  },
  {
    name: "JamFactory",
    category: "Patterns Fluid",
    colors: "Blue,Yellow,Red",
    link: "/jamfactory",
    description: "Astounding Blue & Yellow",
    image: "/images/Jamfactory.png",
  },
  {
    name: "Powerhouse",
    category: "Fluid",
    link: "/powerhouse",
    description: "Astounding Blue & Yellow",
    image: "/images/powerhouse.png",
  },
  {
    name: "Acrylic Fluid",
    category: "Fluid",
    link: "/acrylic_fluid",
    description: "Grey Acrylic Surprise",
    image: "/images/acrylicfluid.png",
  },

  {
    name: "WebWorker",
    category: "Patterns",
    link: "/webworker",
    description: "Webworker is here to work !",
    image: "/images/WebWorker.png",
  },
  {
    name: "Milky Wank",
    category: "Particles",
    link: "/milkywank",
    description: "Ready for a milky wank ?",
    image: "/images/mano-o-warp.png",
  },
  {
    name: "Symmetric Attractor",
    category: "Attractors",
    link: "/thomas_attractor",
    description: "was not made by julia",
    image: "/images/Thomasattractor.png",
  },
  {
    name: "Halvorsen Attractor",
    category: "Attractors",
    link: "/halvorsen_attractor",
    description: "Journey to Halvorsen !",
    image: "/images/Halvorsen_attractor.png",
  },
  {
    name: "Hodgepodge",
    category: "Typo Fluid",
    link: "/hodgepodge",
    description: "213 !",
    image: "/images/hodgepodge.png",
  },
  {
    name: "Pickover Attractor",
    category: "Attractors",
    link: "/pickover_attractor",
    description: "was not made by julia",
    image: "/images/PickoverAttractor.png",
  },
  {
    name: "Turing Spots",
    category: "Fluid Patterns",
    link: "/turingspots",
    description: "Back to Turing !",
    image: "/images/TuringSpots.png",
  },
  {
    name: "Milkyway",
    category: "Particles",
    link: "/milkyway",
    description: "Hop on the milkyway !",
    image: "/images/milkyway.png",
  },
  // {
  //   name: "Trappist Chemist",
  //   category: "Fluid",
  //   link: "/trappist",
  //   description: "Are you a chemist ?",
  //   image: "/images/trappist.png",
  // },
  {
    name: "Suckerpunch",
    category: "Particles Fluid",
    link: "/suckerpunch",
    description: "Boxer Black",
    image: "/images/suckerpunch.png",
  },
  {
    name: "Suturefluid",
    category: "Fluid",
    link: "/suturefluid",
    description: "Suture fluid",
    image: "/images/suturefluid.png",
  },
  {
    name: "S.Fogzone",
    category: "Fluid",
    link: "/fogzone",
    description: "Into the fogzone !",
    image: "/images/fogzone.png",
  },
  {
    name: "Viscious Fingering",
    category: "Fluid",
    link: "/viscous_fingering",
    description: "It's not what you think.",
    image: "/images/visciousfingering.png",
  },
];
