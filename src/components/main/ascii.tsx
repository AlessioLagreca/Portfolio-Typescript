import { useEffect } from "react";
import * as THREE from "three";
import { AsciiEffect } from "three/addons/effects/AsciiEffect.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const AsciiEffectScene = ({ container }: { container: React.RefObject<HTMLDivElement> }) => {
	let camera: THREE.PerspectiveCamera;
	let scene: THREE.Scene;
	let renderer: THREE.WebGLRenderer;
	let effect: AsciiEffect;
	let sphere: THREE.Mesh;
	let model, customGeometry, customMesh;
	const start = Date.now();

	useEffect(() => {
		const init = () => {
			if (!container.current) return;

			camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
			camera.position.y = 10;
			camera.position.z = 150;

			scene = new THREE.Scene();
			scene.background = new THREE.Color(0, 0, 0);

			const pointLight1 = new THREE.PointLight(0xffffff, 2, 0, 0);
			pointLight1.position.set(200, 200, 200);
			scene.add(pointLight1);

			// const ambientLight2 = new THREE.AmbientLight(0xffffff, 0.5);
			// scene.add(ambientLight2);

			sphere = new THREE.Mesh(
				new THREE.TorusKnotGeometry(90, 26, 8, 6, 5, 3),
				new THREE.MeshPhongMaterial({ flatShading: true })
			);
			scene.add(sphere);

			renderer = new THREE.WebGLRenderer();
			renderer.setSize(container.current.clientWidth, container.current.clientHeight);

			effect = new AsciiEffect(renderer, " .✐+*°<", { invert: true });
			effect.setSize(container.current.clientWidth, container.current.clientHeight);

			container.current.appendChild(effect.domElement);
		};

		const handleResize = () => {
			if (!container.current) return;

			const newWidth = container.current.clientWidth;
			const newHeight = container.current.clientHeight;

			camera.aspect = newWidth / newHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(newWidth, newHeight);
			effect.setSize(newWidth, newHeight);
		};

		const animate = () => {
			requestAnimationFrame(animate);
			render();
		};

		const render = () => {
			const timer = Date.now() - start;

			sphere.rotation.y = timer * 0.0003;
			sphere.rotation.x = timer * 0.0004;
			sphere.position.x = 0;

			effect.render(scene, camera);
		};

		init();
		animate();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			if (!container.current) return;
			container.current.removeChild(effect.domElement);
		};
	}, [container]);

	return null;
};

export default AsciiEffectScene;
