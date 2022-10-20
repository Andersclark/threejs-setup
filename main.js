import './main.css'
import * as THREE from 'three'
import init from './init'
import getCube from './objects/cube'

const { camera, canvas, clock, controls, scene, sizes, renderer } = init()
document.body.appendChild(renderer.domElement)

const axesHelper = new THREE.AxesHelper(30)
scene.add(axesHelper)

const dirBlueLight = new THREE.DirectionalLight('yellow', 30)
dirBlueLight.position.z = 2
dirBlueLight.position.y = 2
scene.add(dirBlueLight)

const dirBlueHelper = new THREE.DirectionalLightHelper(dirBlueLight, 2, 'green')
scene.add(dirBlueHelper)

const dirRedLight = new THREE.DirectionalLight('red', 30)
dirRedLight.position.z = -2
dirRedLight.position.y = 2
scene.add(dirRedLight)

const dirRedHelper = new THREE.DirectionalLightHelper(dirRedLight, 2, 'red')
scene.add(dirRedHelper)

const ambientLight = new THREE.AmbientLight('white', 0.5)
scene.add(ambientLight)
const cube = getCube()
cube.position.x = 0.7
cube.position.y = 0
cube.position.z = 0.7
scene.add(cube)

function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}
animate()
