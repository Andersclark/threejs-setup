import { MeshStandardMaterial } from 'three'
import { AmbientLight, AxesHelper, BoxGeometry, Mesh } from 'three'

export function getCube() {
  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshStandardMaterial({ color: 'grey' })
  const cube = new Mesh(geometry, material)
  return cube
}

export function getAxesHelper() {
  return new AxesHelper(30)
}

export function getAmbientLight() {
  return new AmbientLight('white', 0.5)
}
