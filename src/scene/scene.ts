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
import { updateRenderer } from "../core/renderer"
import { gui } from "../core/gui"

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
  colorWindow:"#4191e1",
  colorBlackboard: "#006600",
  colorWriting: "#FFxxxx",
  colorTableTea: "#CC9900",
  colorTampa: "#D5AF40",
  colorTampao: "#4D3F17",
  colorSeatteacher: "#997C2E",
  colorSeat: "#AB9A67"
}

// piso
const floor = new Mesh(
  new PlaneGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

floor.position.set(1, 0.1, 1)
floor.scale.set(24, 27, 18)
floor.rotation.set(-Math.PI / 2, 0, 0)
floor.castShadow = true

// paredeEsquerda
const wall1 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorWall),
    wireframe: false,
  })
)

wall1.position.set(1, 6, 14)
wall1.scale.set(24, 1, 13)
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

blackboard.position.set(1, 5, 13.5)
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

wall2.position.set(1, 6, -12.3)
wall2.scale.set(13, 1, 24)
wall2.rotation.set(0,-Math.PI / 2, 7.8)

// janeladireita
const window2 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorWindow),
    wireframe: false,
  })
)

window2.position.set(4, 6, -12)
window2.scale.set(1, 8, 4)
window2.rotation.set(-Math.PI / 2, 0, 1.6)
window2.castShadow = true


// paredeFundo
const wall3 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorWall),
    wireframe: false,
  })
)

wall3.position.set(-11, 6, 1)
wall3.scale.set(13, 1, 27)
wall3.rotation.set(0, 0, -Math.PI / 2)

// janeladomeio

const window1 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorWindow),
    wireframe: false,
  })

)
window1.position.set(-10.5, 6, 1)
window1.scale.set(1, 8, 4)
window1.rotation.set(-Math.PI / 2, 0, 0)
window1.castShadow = true


// pe1mesaProf
const tableTea1 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorTableTea),
    wireframe: false,
  })
)

tableTea1.position.set(-4, 1.7, 8)
tableTea1.scale.set(1, 1, 3)
tableTea1.rotation.set(-Math.PI / 2, 0, 0)

// pe2mesaProf
const tableTea2 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorTableTea),
    wireframe: false,
  })
)

tableTea2.position.set(0, 1.7, 8)
tableTea2.scale.set(1, 1, 3)
tableTea2.rotation.set(-Math.PI / 2, 0, 0)

// tampaomesaProf
const tampao = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorTampao),
    wireframe: false,
  })
)

tampao.position.set(-2, 3.2, 8)
tampao.scale.set(8, 3, 0.1)
tampao.rotation.set(-Math.PI / 2, 0, 0)
tampao.castShadow = true

// assentoProf
const seatteacher = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorSeatteacher),
    wireframe: false,
  })
)

seatteacher.position.set(-2, 1.2, 11)
seatteacher.scale.set(3, 2, 1.8)
seatteacher.rotation.set(-Math.PI / 2, 0, 0)
seatteacher.castShadow = true

// encostoProf
const backteacher = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorSeatteacher),
    wireframe: false,
  })
)

backteacher.position.set(-2, 2.3, 12)
backteacher.scale.set(3, 0.5, 4)
backteacher.rotation.set(-Math.PI / 2, 0, 0)
backteacher.castShadow = true

// mesaAluno1
const tableStud1 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorTableTea),
    wireframe: false,
  })
)

tableStud1.position.set(5, 1.7, 2)
tableStud1.scale.set(1, 1, 3)
tableStud1.rotation.set(-Math.PI / 2, 0, 0)

// tampamesa1
const tampa1 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorTampa),
    wireframe: false,
  })
)

tampa1.position.set(5.1, 3.2, 2)
tampa1.scale.set(3, 3, 0.1)
tampa1.rotation.set(-Math.PI / 2, 0, 0)
tampa1.castShadow = true

// assento1
const seat1 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorSeat),
    wireframe: false,
  })
)

seat1.position.set(5.1, 1.2, -1)
seat1.scale.set(3, 2, 1.8)
seat1.rotation.set(-Math.PI / 2, 0, 0)
seat1.castShadow = true

// encosto1
const back1 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorSeat),
    wireframe: false,
  })
)

back1.position.set(5.1, 2.3, -2)
back1.scale.set(3, 0.5, 4)
back1.rotation.set(-Math.PI / 2, 0, 0)
back1.castShadow = true


// mesaAlunoMeio
const tableStud2 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorTableTea),
    wireframe: false,
  })
)

tableStud2.position.set(0, 1.7, 2)
tableStud2.scale.set(1, 1, 3)
tableStud2.rotation.set(-Math.PI / 2, 0, 0)

// tampamesa2
const tampa2 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorTampa),
    wireframe: false,
  })
)

tampa2.position.set(0, 3.2, 2)
tampa2.scale.set(3, 3, 0.1)
tampa2.rotation.set(-Math.PI / 2, 0, 0)
tampa2.castShadow = true

// assento2
const seat2 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorSeat),
    wireframe: false,
  })
)

seat2.position.set(0, 1.2, -1)
seat2.scale.set(3, 2, 1.8)
seat2.rotation.set(-Math.PI / 2, 0, 0)
seat2.castShadow = true

// encosto2
const back2 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorSeat),
    wireframe: false,
  })
)

back2.position.set(0, 2.3, -2)
back2.scale.set(3, 0.5, 4)
back2.rotation.set(-Math.PI / 2, 0, 0)
back2.castShadow = true

// mesaAlunoPerto do Professor
const tableStud3 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorTableTea),
    wireframe: false,
  })
)

tableStud3.position.set(-5, 1.7, 2)
tableStud3.scale.set(1, 1, 3)
tableStud3.rotation.set(-Math.PI / 2, 0, 0)

// tampamesa3
const tampa3 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorTampa),
    wireframe: false,
  })
)

tampa3.position.set(-5, 3.2, 2)
tampa3.scale.set(3, 3, 0.1)
tampa3.rotation.set(-Math.PI / 2, 0, 0)
tampa3.castShadow = true

// assento3
const seat3 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorSeat),
    wireframe: false,
  })
)

seat3.position.set(-5.2, 1.2, -1)
seat3.scale.set(3, 2, 1.8)
seat3.rotation.set(-Math.PI / 2, 0, 0)
seat3.castShadow = true

// encosto3
const back3 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorSeat),
    wireframe: false,
  })
)

back3.position.set(-5.2, 2.3, -2)
back3.scale.set(3, 0.5, 4)
back3.rotation.set(-Math.PI / 2, 0, 0)
back3.castShadow = true

// mesaAluno4
const tableStud4 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorTableTea),
    wireframe: false,
  })
)

tableStud4.position.set(5, 1.7, -5)
tableStud4.scale.set(1, 1, 3)
tableStud4.rotation.set(-Math.PI / 2, 0, 0)

// tampamesa4
const tampa4 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorTampa),
    wireframe: false,
  })
)

tampa4.position.set(5.1, 3.2, -5)
tampa4.scale.set(3, 3, 0.1)
tampa4.rotation.set(-Math.PI / 2, 0, 0)
tampa4.castShadow = true

// assento4
const seat4 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorSeat),
    wireframe: false,
  })
)

seat4.position.set(5.1, 1.2, -8)
seat4.scale.set(3, 2, 1.8)
seat4.rotation.set(-Math.PI / 2, 0, 0)
seat4.castShadow = true

// encosto4
const back4 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorSeat),
    wireframe: false,
  })
)

back4.position.set(5.1, 2.3, -9)
back4.scale.set(3, 0.5, 4)
back4.rotation.set(-Math.PI / 2, 0, 0)
back4.castShadow = true

// mesaAlunoMeio2
const tableStud5 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorTableTea),
    wireframe: false,
  })
)

tableStud5.position.set(0, 1.7, -5)
tableStud5.scale.set(1, 1, 3)
tableStud5.rotation.set(-Math.PI / 2, 0, 0)

// tampamesa5
const tampa5 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorTampa),
    wireframe: false,
  })
)

tampa5.position.set(0, 3.2, -5)
tampa5.scale.set(3, 3, 0.1)
tampa5.rotation.set(-Math.PI / 2, 0, 0)
tampa5.castShadow = true

// assento5
const seat5 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorSeat),
    wireframe: false,
  })
)

seat5.position.set(0, 1.2, -8)
seat5.scale.set(3, 2, 1.8)
seat5.rotation.set(-Math.PI / 2, 0, 0)
seat5.castShadow = true

// encosto5
const back5 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorSeat),
    wireframe: false,
  })
)

back5.position.set(0, 2.3, -9)
back5.scale.set(3, 0.5, 4)
back5.rotation.set(-Math.PI / 2, 0, 0)
back5.castShadow = true

// armário
const cabinet = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorSeatteacher),
    wireframe: false,
  })
)

cabinet.position.set(-7, 3, -11)
cabinet.scale.set(6, 2, 6)
cabinet.rotation.set(-Math.PI / 2, 0, 0)
cabinet.castShadow = true

// portaDirArmario
const doorRight = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorTampao),
    wireframe: false,
  })
)

doorRight.position.set(-8.2, 4.2, -10)
doorRight.scale.set(2.5, 2, 0.2)
doorRight.rotation.set(0, 0, -Math.PI / 2)
doorRight.castShadow = true

// portaEsqArmario
const doorLeft = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorTampao),
    wireframe: false,
  })
)

doorLeft.position.set(-5.7, 4.2, -10)
doorLeft.scale.set(2.5, 2, 0.2)
doorLeft.rotation.set(0, 0, -Math.PI / 2)
doorLeft.castShadow = true


// gavetaSupEsqArmario
const drawerHig = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorTampao),
    wireframe: false,
  })
)

drawerHig.position.set(-6.9, 1, -10)
drawerHig.scale.set(1, 4.9, 0.2)
drawerHig.rotation.set(0, 0, -Math.PI / 2)
drawerHig.castShadow = true

// gavetaInfArmario
const drawerLow = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorTampao),
    wireframe: false,
  })
)

drawerLow.position.set(-6.9, 2.2, -10)
drawerLow.scale.set(1, 4.9, 0.2)
drawerLow.rotation.set(0, 0, -Math.PI / 2)
drawerLow.castShadow = true


// __________________________________________________


scene.add(floor)
scene.add(wall1)
scene.add(wall2)
scene.add(wall3)
scene.add(blackboard)
scene.add(window1)
scene.add(window2)
scene.add(tableTea1)
scene.add(tableTea2)
scene.add(tampao)
scene.add(seatteacher)
scene.add(backteacher)
scene.add(tableStud1)
scene.add(tampa1)
scene.add(seat1)
scene.add(back1)
scene.add(tableStud2)
scene.add(tampa2)
scene.add(seat2)
scene.add(back2)
scene.add(tableStud3)
scene.add(tampa3)
scene.add(seat3)
scene.add(back3)
scene.add(tableStud4)
scene.add(tampa4)
scene.add(seat4)
scene.add(back4)
scene.add(tableStud5)
scene.add(tampa5)
scene.add(seat5)
scene.add(back5)
scene.add(cabinet)
scene.add(doorRight)
scene.add(doorLeft)
scene.add(drawerHig)
scene.add(drawerLow)

// __________________________________________________

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
floorCtrls.addInput(PARAMS, "color").on("change", (e: any) => {
  floor.material.color = new Color(e.value)
})

floorCtrls.addInput(floor.material, "wireframe")

// __________________________________________________


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
