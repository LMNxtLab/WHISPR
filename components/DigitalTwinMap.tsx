"use client"

import { useState, useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, Box, Sphere } from '@react-three/drei'
import * as THREE from 'three'

// Previous SimpleCity component remains as fallback
function SimpleCity() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#a9c388" />
      </mesh>
      
      <Box position={[-5, 2, -5]} args={[2, 4, 2]}>
        <meshStandardMaterial color="#8d99ae" />
      </Box>
      <Box position={[0, 3, -3]} args={[3, 6, 3]}>
        <meshStandardMaterial color="#edf2f4" />
      </Box>
      <Box position={[5, 1.5, 2]} args={[2, 3, 2]}>
        <meshStandardMaterial color="#2b2d42" />
      </Box>
      <Box position={[-3, 2.5, 4]} args={[2.5, 5, 2.5]}>
        <meshStandardMaterial color="#8d99ae" />
      </Box>
      
      <Sphere position={[-8, 1, -8]} args={[1, 16, 16]}>
        <meshStandardMaterial color="#4a5759" />
      </Sphere>
      <Sphere position={[8, 1, 8]} args={[1, 16, 16]}>
        <meshStandardMaterial color="#4a5759" />
      </Sphere>
    </group>
  )
}

function SketchfabViewer() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const iframe = iframeRef.current
    if (iframe) {
      iframe.onload = () => setIsLoaded(true)
    }
  }, [])

  return (
    <div className="w-full h-full relative">
      <iframe
        ref={iframeRef}
        title="Baseball Stadium"
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/843246f5b7d14d6a8888e048acab1853/embed?autostart=1&ui_controls=1&ui_infos=1&ui_inspector=1&ui_stop=1&ui_watermark=1&ui_watermark_link=1"
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  )
}

function DevicePaths() {
  const points = [
    new THREE.Vector3(-5, 0.1, -5),
    new THREE.Vector3(0, 0.1, -3),
    new THREE.Vector3(5, 0.1, 2),
    new THREE.Vector3(-3, 0.1, 4),
  ]
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color="red" linewidth={2} />
    </line>
  )
}

function HeatmapOverlay() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshBasicMaterial color="yellow" transparent opacity={0.2} />
    </mesh>
  )
}

function CameraZones() {
  return (
    <>
      <Sphere position={[-5, 2, -5]} args={[1.5, 16, 16]}>
        <meshBasicMaterial color="blue" transparent opacity={0.2} />
      </Sphere>
      <Sphere position={[5, 2, 2]} args={[1.5, 16, 16]}>
        <meshBasicMaterial color="blue" transparent opacity={0.2} />
      </Sphere>
    </>
  )
}

function Scene({ toggles }: { toggles: { [key: string]: boolean } }) {
  const { camera } = useThree()
  
  useFrame(() => {
    // Add any continuous updates here
  })

  return (
    <>
      <SimpleCity />
      {toggles.devicePaths && <DevicePaths />}
      {toggles.heatmap && <HeatmapOverlay />}
      {toggles.cameraZones && <CameraZones />}
      <Environment preset="city" />
    </>
  )
}

export function DigitalTwinMap() {
  const [toggles, setToggles] = useState({
    devicePaths: false,
    heatmap: false,
    cameraZones: false,
    useSketchfab: true,
  })

  const handleToggle = (key: string) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="w-full h-full relative">
      {toggles.useSketchfab ? (
        <SketchfabViewer />
      ) : (
        <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
          <Scene toggles={toggles} />
          <OrbitControls />
        </Canvas>
      )}
      <div className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded space-y-2">
        <button 
          onClick={() => handleToggle('useSketchfab')}
          className="block w-full px-3 py-2 rounded hover:bg-white/20"
        >
          {toggles.useSketchfab ? 'Switch to Simple View' : 'Switch to Stadium View'}
        </button>
        <button 
          onClick={() => handleToggle('devicePaths')}
          className="block w-full px-3 py-2 rounded hover:bg-white/20"
        >
          Toggle Device Paths
        </button>
        <button 
          onClick={() => handleToggle('heatmap')}
          className="block w-full px-3 py-2 rounded hover:bg-white/20"
        >
          Toggle Heatmap
        </button>
        <button 
          onClick={() => handleToggle('cameraZones')}
          className="block w-full px-3 py-2 rounded hover:bg-white/20"
        >
          Toggle Camera Zones
        </button>
      </div>
    </div>
  )
}

