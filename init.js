import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export default function init() {
  const canvas = document.querySelector('canvas.webgl')
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }
  const renderer = getRenderer(canvas, sizes)
  const scene = getScene()
  const camera = getCamera()
  const controls = getControls(camera, renderer)
  const clock = new Clock()

  window.addEventListener('dblclick', () => {
    const fullscreenElement =
      document.fullscreenElement || document.webkitFullscreenElement

    if (!fullscreenElement) {
      if (canvas.requestFullscreen) {
        canvas.requestFullscreen()
      } else if (canvas.webkitRequestFullscreen) {
        canvas.webkitRequestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
    }
  })

  window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

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

function getRenderer(canvas, sizes) {
  const renderer = new WebGLRenderer({ canvas: canvas })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  return renderer
}
