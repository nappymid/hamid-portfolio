<template>
  <div>
    <canvas ref="experience" />
  </div>
</template>

<script setup lang="ts">
import {
  Scene,
  PerspectiveCamera,
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
  MeshStandardMaterial,
} from "three";
import { Ref } from "vue";
import { useWindowSize } from "@vueuse/core";

let renderer: WebGLRenderer;
const experience: Ref<HTMLCanvasElement | null> = ref(null);

const { width, height } = useWindowSize();
const aspectRatio = computed(() => width.value / height.value);

const scene = new Scene();

const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000);
camera.position.set(-1.8, 0, 3.5);
const light = new AmbientLight(0x404040); // soft white light
const directionalLight = new DirectionalLight(0x404040, 40); // soft white light
directionalLight.position.set(2, 5, 7);
scene.add(light);
scene.add(directionalLight);
scene.add(camera);

const sphere = new Mesh(
  new SphereGeometry(1, 32, 32),
  new MeshStandardMaterial({ color: 0x008080, displacementScale: 20 })
);

scene.add(sphere);

function updateCamera() {
  camera.aspect = aspectRatio.value;
  camera.updateProjectionMatrix();
}

function updateRenderer() {
  renderer.setSize(width.value, height.value);
  renderer.render(scene, camera);
  // renderer.setClearColor(0x000000, 1)
}

function setRenderer() {
  if (experience.value) {
    renderer = new WebGLRenderer({ canvas: experience.value, alpha: true });
    updateRenderer();
  }
}

watch(aspectRatio, () => {
  updateCamera();
  updateRenderer();
});

onMounted(() => {
  setRenderer();
  loop();
});

const loop = () => {
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.001;

  updateRenderer();
  requestAnimationFrame(loop);
};
</script>

<style lang="scss" scoped></style>
