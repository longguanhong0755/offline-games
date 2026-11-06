// Import everything, make them accessible in console (and in chrome extensions, without importmap, without build step)
// linter: ngspicejs-lint --browser
// global:
"use strict";

var SC = globalThis.SC || {};
globalThis.SC = SC;

// THREE
import * as THREE from '/_assets/bbf5ed13fe4373f5bd38.js';
globalThis.THREE = THREE;
import { OBJLoader } from '/_assets/fe5f24328dd6fe4d4934.js';
globalThis.OBJLoader = OBJLoader;
import { MTLLoader } from '/_assets/411d9af57b7d2646e0e9.js';
globalThis.MTLLoader = MTLLoader;
import { OrbitControls } from '/_assets/3f40137b0620b375637d.js';
globalThis.OrbitControls = OrbitControls;
import { TransformControls } from '/_assets/aa9c4a0648cab31a2d9b.js';
globalThis.TransformControls = TransformControls;
import { PointerLockControls } from '/_assets/ff8f1ff3684477f2e3ce.js';
globalThis.PointerLockControls = PointerLockControls;

// noir
import { toast } from '/_assets/1e6314f3677d131b54c1.js';
SC.toast = toast;
import { download } from '/_assets/6530bd45ff002994cadd.js';
SC.download = download;
import { fetchJSON } from '/_assets/929bdffd1230b29f9ae3.js';
SC.fetchJSON = fetchJSON;
import { Undo } from '/_assets/f168ae3d9242d408eecf.js';
SC.Undo = Undo;
import { randomItem } from '/_assets/e62a9f8524c9d75040fe.js';
SC.randomItem = randomItem;
import { rad } from '/_assets/635e63ff5f8da0de1c92.js';
SC.rad = rad;
import { elementsWithId } from '/_assets/65608ad02a3f5d737929.js';
SC.elementsWithId = elementsWithId;
import { FpsCounter } from '/_assets/1e0fcb6a779f37ba92d0.js';
SC.FpsCounter = FpsCounter;
import { worldPosition,leakCheck,uvTransform } from '/_assets/701557aa9cbdc8bcd238.js';
SC.worldPosition = worldPosition;
SC.leakCheck = leakCheck;
SC.uvTransform = uvTransform;
import { Grid } from '/_assets/883f9251479b04c2e867.js';
SC.Grid = Grid;
import { Models } from '/_assets/c2bd460bbd885ae26bc6.js';
SC.Models = Models;
import { Lamp } from '/_assets/cefc77a9e2c7786291f0.js';
SC.Lamp = Lamp;
import { Lamps } from '/_assets/cf251b38bf9a63d39c10.js';
SC.Lamps = Lamps;
import { Road } from '/_assets/01890c6459d198a06b9e.js';
SC.Road = Road;
import { Roads } from '/_assets/4e478c0e3f13a078a421.js';
SC.Roads = Roads;
import { House } from '/_assets/63b573c0c1b13c6dd461.js';
SC.House = House;
import { Houses } from '/_assets/a769addef1d904fb1304.js';
SC.Houses = Houses;
import { collisions } from '/_assets/eecb4d8b8fed98125ee7.js';
SC.collisions = collisions;
import { Specs } from '/_assets/2167797497d95c1251cb.js';
SC.Specs = Specs;
import { MiniMap } from '/_assets/723b147a57b2494bee32.js';
SC.MiniMap = MiniMap;
import { Wasd } from '/_assets/623e02956943cb15d1ea.js';
SC.Wasd = Wasd;
import { Editor } from '/_assets/13a149819ba1f6ca6cad.js';
SC.Editor = Editor;
import { Footsteps } from '/_assets/382c5bd3815b1e41f5e8.js';
SC.Footsteps = Footsteps;
import { TouchControls } from '/_assets/8429f17ff7b4ca9eb6ec.js';
SC.TouchControls = TouchControls;
import { World } from '/_assets/bff7c4325f5c3cc59f55.js';
SC.World = World;
import { chooseFiles } from '/_assets/a3bd3a5da806b3cb25ec.js';
SC.chooseFiles = chooseFiles;
import { choose } from '/_assets/0edb39b19f78b70c3095.js';
SC.choose = choose;

