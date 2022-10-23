import {
  AmbientLight,
  AxesHelper,
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  DirectionalLight,
  DodecahedronGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial
} from 'three'

export function getCube() {
  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshStandardMaterial({ color: 'grey' })
  return new Mesh(geometry, material)
}

export function getAxesHelper() {
  return new AxesHelper(30)
}

export function getDirectionalLight() {
  return new DirectionalLight('white', 1)
}

export function getAmbientLight() {
  return new AmbientLight('white', 0.5)
}

export function getDodecahedron() {
  const geometry = new DodecahedronGeometry(1, 1)
  const material = new MeshStandardMaterial({ color: 'grey', wireframe: true })
  return new Mesh(geometry, material)
}

export function getComplex(){
  const geometry = new BufferGeometry()
  const count = 1000
  const length = count * 3 * 3
  const positionsArray = new Float32Array(length)
  for(let i = 0; i < length; i++ ) {
    positionsArray[i] = Math.random()
  }

  const positionsAttribute = new BufferAttribute(positionsArray, 3)
  geometry.setAttribute('position', positionsAttribute)
  const material = new MeshBasicMaterial({color: 'cyan', wireframe: true})
  return new Mesh(geometry, material)
}
