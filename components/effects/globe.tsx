"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Line } from "@react-three/drei";
import * as THREE from "three";

// Convert lat/lng to 3D coordinates on sphere
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Generate arc points between two locations
function generateArc(start: THREE.Vector3, end: THREE.Vector3, segments: number = 50): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const point = new THREE.Vector3().lerpVectors(start, end, t);
    // Add height to arc
    const height = Math.sin(t * Math.PI) * 0.3;
    point.normalize().multiplyScalar(1.5 + height);
    points.push(point);
  }
  return points;
}

// City locations (lat, lng)
const locations = [
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "New York", lat: 40.7128, lng: -74.006 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708 },
  { name: "Mumbai", lat: 19.076, lng: 72.8777 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Sydney", lat: -33.8688, lng: 151.2093 },
  { name: "Berlin", lat: 52.52, lng: 13.405 },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
];

// Connection pairs
const connections = [
  [0, 1], // London - New York
  [0, 3], // London - Mumbai
  [0, 6], // London - Berlin
  [2, 3], // Dubai - Mumbai
  [3, 4], // Mumbai - Singapore
  [4, 7], // Singapore - Tokyo
  [4, 5], // Singapore - Sydney
  [1, 7], // New York - Tokyo
];

function GlobeWireframe() {
  const globeRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  // Generate latitude lines
  const latLines = useMemo(() => {
    const lines: THREE.Vector3[][] = [];
    for (let lat = -60; lat <= 60; lat += 30) {
      const points: THREE.Vector3[] = [];
      for (let lng = 0; lng <= 360; lng += 5) {
        points.push(latLngToVector3(lat, lng, 1.5));
      }
      lines.push(points);
    }
    return lines;
  }, []);

  // Generate longitude lines
  const lngLines = useMemo(() => {
    const lines: THREE.Vector3[][] = [];
    for (let lng = 0; lng < 360; lng += 30) {
      const points: THREE.Vector3[] = [];
      for (let lat = -90; lat <= 90; lat += 5) {
        points.push(latLngToVector3(lat, lng, 1.5));
      }
      lines.push(points);
    }
    return lines;
  }, []);

  // Location points on globe
  const locationPoints = useMemo(() => {
    return locations.map((loc) => latLngToVector3(loc.lat, loc.lng, 1.5));
  }, []);

  // Arc connections
  const arcs = useMemo(() => {
    return connections.map(([startIdx, endIdx]) => {
      const start = latLngToVector3(locations[startIdx].lat, locations[startIdx].lng, 1.5);
      const end = latLngToVector3(locations[endIdx].lat, locations[endIdx].lng, 1.5);
      return generateArc(start, end);
    });
  }, []);

  return (
    <group ref={globeRef}>
      {/* Globe sphere - subtle fill */}
      <Sphere args={[1.48, 32, 32]}>
        <meshBasicMaterial color="#0B9444" transparent opacity={0.08} />
      </Sphere>

      {/* Latitude lines */}
      {latLines.map((points, i) => (
        <Line
          key={`lat-${i}`}
          points={points}
          color="#0B9444"
          lineWidth={1}
          transparent
          opacity={0.4}
        />
      ))}

      {/* Longitude lines */}
      {lngLines.map((points, i) => (
        <Line
          key={`lng-${i}`}
          points={points}
          color="#0B9444"
          lineWidth={1}
          transparent
          opacity={0.4}
        />
      ))}

      {/* Location dots */}
      {locationPoints.map((point, i) => (
        <mesh key={`point-${i}`} position={point}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color="#0B9444" />
        </mesh>
      ))}

      {/* Glowing location rings */}
      {locationPoints.map((point, i) => (
        <mesh key={`ring-${i}`} position={point} lookAt={new THREE.Vector3(0, 0, 0)}>
          <ringGeometry args={[0.05, 0.08, 32]} />
          <meshBasicMaterial color="#0B9444" transparent opacity={0.7} side={THREE.DoubleSide} />
        </mesh>
      ))}

      {/* Connection arcs */}
      {arcs.map((arcPoints, i) => (
        <Line
          key={`arc-${i}`}
          points={arcPoints}
          color="#0B9444"
          lineWidth={2}
          transparent
          opacity={0.8}
        />
      ))}
    </group>
  );
}

export function Globe() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <GlobeWireframe />
      </Canvas>
    </div>
  );
}
