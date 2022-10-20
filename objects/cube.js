import { MeshStandardMaterial } from 'three'
import { BoxGeometry, Mesh } from 'three'

export default function getCube() {
  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshStandardMaterial({ color: 'grey' })
  const cube = new Mesh(geometry, material)
  return cube
}
