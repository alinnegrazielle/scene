import {
  Scene,
  AxesHelper,
  AmbientLight,
  DirectionalLight,
  Mesh,
  BoxGeometry,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
} from "three"
import { renderer, updateRenderer } from "/src/core/renderer"
import { gui } from "/src/core/gui"

export const scene = new Scene()

// Axes Helper
const axesHelper = new AxesHelper(0.5)
scene.add(axesHelper)

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
})

const ambientLight = new AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new DirectionalLight("#ffffff", 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 500
directionalLight.shadow.normalBias = 0.5
directionalLight.position.set(0.25, 2, 2.25)

scene.add(directionalLight)

const PARAMS = {
  color: "#FFCC66",
  colorWall: "#663333",
  colorBlackboard: "#006600",
  colorWriting: "#FFxxxx"
}

// piso
const floor = new Mesh(
  new PlaneGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

floor.position.set(1, 0.2, 1)
floor.scale.set(16, 20, 12)
floor.rotation.set(-Math.PI / 2, 0, 0)
floor.castShadow = true

// paredeEsquera
const wall1 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorWall),
    wireframe: false,
  })
)

wall1.position.set(1, 5, 11)
wall1.scale.set(16, 1, 10)
wall1.rotation.set(-Math.PI / 2, 0, 0)
wall1.castShadow = true

// lousa
const blackboard = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorBlackboard),
    wireframe: false,
  })
)

blackboard.position.set(1, 5, 10.5)
blackboard.scale.set(8, 0.5, 4)
blackboard.rotation.set(-Math.PI / 2, 0, 0)
blackboard.castShadow = true

// paredeDireita
const wall2 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorWall),
    wireframe: false,
  })
)

wall2.position.set(1, 5, -8)
wall2.scale.set(10, 1, 18)
wall2.rotation.set(0,-Math.PI / 2, 8)


// paredeFundo
const wall3 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorWall),
    wireframe: false,
  })
)

wall3.position.set(-6, 6, 0)
wall3.scale.set(12, 1, 23)
wall3.rotation.set(0, 0, -Math.PI / 2)

const floorCtrls = gui.addFolder({
  title: "floor",
})

floorCtrls.addInput(floor.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})
floorCtrls.addInput(floor.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})
floorCtrls.addInput(floor.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})
floorCtrls.addInput(PARAMS, "color").on("change", (e) => {
  floor.material.color = new Color(e.value)
})

floorCtrls.addInput(floor.material, "wireframe")

scene.add(floor)
scene.add(wall1)
scene.add(wall2)
scene.add(wall3)
scene.add(blackboard)

const plane = new Mesh(
  new PlaneGeometry(10, 10, 10, 10),
  new MeshToonMaterial({
    color: new Color("#444"),
  })
)

plane.receiveShadow = true
plane.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane)

export function updateScene() {
  updateRenderer()
}
