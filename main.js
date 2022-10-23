import * as dat from 'lil-gui'
import './main.css'
import init from './init'
import {
  getAmbientLight,
  getAxesHelper,
  getCube,
  getDirectionalLight,
  getDodecahedron,
  getComplex,
} from './objects'
import { onDoubleClick, onWindowResize } from './helpers'
import { DirectionalLightHelper } from "three"

const { camera, canvas, clock, controls, gui, renderer, sizes, scene } = init()

window.addEventListener('resize', () => onWindowResize(camera, renderer, sizes))
window.addEventListener('dblclick', () => onDoubleClick(canvas))

// const axesHelper = getAxesHelper()
// scene.add(axesHelper)

const ambientLight = getAmbientLight()
scene.add(ambientLight)

const directionalLight = getDirectionalLight()
scene.add(directionalLight)
const dirLightHelper = new DirectionalLightHelper(directionalLight, 1, 'white')
scene.add(dirLightHelper)
const lightsGui = gui.addFolder('Lights')
lightsGui.add(directionalLight.position, 'x', -10, 10, 0.01)
lightsGui.add(directionalLight.position, 'y', -10, 10, 0.01)
lightsGui.add(directionalLight.position, 'z', -10, 10, 0.01)
lightsGui.addColor(directionalLight, 'color')
lightsGui.add(directionalLight, 'intensity', 0, 3, 0.0001)


const cube = getCube()
scene.add(cube)
const cubeGui = gui.addFolder('Cube')
cubeGui.add(cube.position, 'x', -3, 3, 0.01 )
cubeGui.add(cube.position, 'y', -3, 3, 0.01 )
cubeGui.add(cube.position, 'z', -3, 3, 0.01 )
cubeGui.addColor(cube.material, 'color')
cubeGui.add(cube, 'visible')
cubeGui.add(cube.material, 'wireframe')







const tick = () => {
  const elapsedTime = clock.getElapsedTime()
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
