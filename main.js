import './main.css'
import init from './init'
import { getAmbientLight, getAxesHelper, getCube } from './objects'
import { onDoubleClick, onWindowResize } from './helpers'

const { camera, canvas, clock, controls, renderer, sizes, scene } = init()

window.addEventListener('resize', () => onWindowResize(camera, renderer, sizes))
window.addEventListener('dblclick', () => onDoubleClick(canvas))

const axesHelper = getAxesHelper()
scene.add(axesHelper)

const ambientLight = getAmbientLight()
scene.add(ambientLight)

const cube = getCube()
scene.add(cube)

const tick = () => {
  const elapsedTime = clock.getElapsedTime()
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
