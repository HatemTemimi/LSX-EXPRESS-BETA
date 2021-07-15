const express = require("express");
const router = express.Router();
const visualsController = require("../Controllers/visualsController");

router.get("/slices", visualsController.slices);
router.get("/jellyfish", visualsController.jellyfish);
router.get("/little-triangles", visualsController.littletriangles);
router.get("/digicloud", visualsController.digicloud);
router.get("/blurry", visualsController.blurry);
router.get("/traffic-ohio", visualsController.trafficohio);
router.get("/hxdj", visualsController.hxdj);
router.get("/growscales", visualsController.growscales);
router.get("/rick&mortynebula", visualsController.blacknebula);
router.get("/blacknwhite", visualsController.blacknwhite);
router.get("/swimtube", visualsController.swimtube);
router.get("/violenza", visualsController.bricktunnel);
router.get("/bloodcells", visualsController.bloodcells);
router.get("/spiralforge", visualsController.spiralforge);
router.get("/spiralgate", visualsController.spiralgate);
router.get("/torus-tunnel", visualsController.torusTunnel);
router.get("/locations", visualsController.locations);
router.get("/about", visualsController.about);
router.get("/particles", visualsController.particles);
router.get("/triangles", visualsController.triangles);
router.get("/coupled-turing", visualsController.coupledturing);
router.get("/cell-division", visualsController.celldivision);
router.get("/warpbuffer", visualsController.warpbuffer);
router.get("/layered-fractals", visualsController.layeredfractals);
router.get("/milky-way-bivariate", visualsController.milkywayBivariate1);
router.get("/candlewickturing", visualsController.candlewickturing);
router.get("/networth", visualsController.networth);
router.get("/fluid-giraffe", visualsController.fluidgiraffe);
router.get("/bubbles", visualsController.bubbles);
router.get("/citylab", visualsController.citylab);
router.get("/hadley-attractor", visualsController.hadleyAttractor);
router.get("/smoked-rainbow-beans", visualsController.smokedRainbowBeans);
router.get("/spiced-rainbow-beans", visualsController.SpicedRainbowBeans);
router.get("/candlewick", visualsController.candlewick);

router.get("/bleeding-edge", visualsController.bleedingedge);
router.get("/dragon-track", visualsController.dragontrack);
router.get("/egregore", visualsController.egregore);
router.get("/stone-flower", visualsController.lightwheel);
router.get("/diode-suckerpunch", visualsController.suckerpunchDiode);

router.get("/suturefluid", visualsController.suturefluid);
router.get("/fogzone", visualsController.fogzone);
router.get("/viscous_fingering", visualsController.visciousfingering);

router.get("/suckerpunch", visualsController.suckerpunch);
router.get("/trapstyle", visualsController.trapstyle);
router.get("/trappist", visualsController.trappist);
router.get("/milkyway", visualsController.milkyway);
router.get("/shuffle?:interval", visualsController.shuffle);
router.get("/hodgepodge", visualsController.hodgepodge);
router.get("/pickover_attractor", visualsController.pickoverAttractor);
router.get("/turingspots", visualsController.turingSpots);
router.get("/milkywank", visualsController.milkywank);
router.get("/thomas_attractor", visualsController.thomasattractor);
router.get("/halvorsen_attractor", visualsController.halvorsenattractor);
router.get("/acrylic_fluid", visualsController.acrylicfluid);
router.get("/webworker", visualsController.webworker);
router.get("/fractal_blue", visualsController.fractalfluid);

router.get("/powerhouse", visualsController.powerhouse);

router.get("/jamfactory", visualsController.jamfactory);
router.get("/edgebatch", visualsController.edgebatch);
router.get("/turing_fluid", visualsController.turing_fluid);
router.get("/light_physarum", visualsController.touchy_physarum);
router.get("/inksplash", visualsController.inksplash);
router.get("/home", visualsController.home);
router.get("/", visualsController.index);
router.get("*", visualsController.error);
router.get("/how-did-u-get-here?", visualsController.error);
module.exports = router;
