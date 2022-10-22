import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

function getCamera(sizes) {
  const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
  camera.position.z = 3
  return camera
}

function getControls(camera, renderer) {
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  return controls
}

function getRenderer(canvas, sizes) {
  const renderer = new WebGLRenderer({ canvas: canvas })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  return renderer
}

export default function init() {
  const canvas = document.querySelector('canvas.webgl')
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }
  const renderer = getRenderer(canvas, sizes)
  const scene = new Scene()
  const camera = getCamera(sizes)
  const controls = getControls(camera, renderer)
  const clock = new Clock()

  return {
    camera,
    canvas,
    clock,
    controls,
    scene,
    sizes,
    renderer,
  }
}
