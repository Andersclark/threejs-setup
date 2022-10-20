import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export default function init() {
  const renderer = getRenderer()
  const scene = getScene()
  const camera = getCamera()
  const controls = getControls(camera, renderer)
  const clock = new Clock()
  return {
    camera,
    clock,
    controls,
    scene,
    renderer,
  }
}

function getScene() {
  const scene = new Scene()
  return scene
}

function getCamera() {
  const camera = new PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    1000
  )
  camera.position.z = 5
  camera.position.y = 2
  camera.position.x = 5
  return camera
}

function getControls(camera, renderer) {
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  return controls
}

function getRenderer() {
  const renderer = new WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  return renderer
}
