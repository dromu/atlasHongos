"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react"

interface ImageGalleryProps {
  images: { url: string; caption: string }[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLImageElement>(null)

  const handleZoomIn = () => setScale((prev) => Math.min(prev * 1.2, 5))
  const handleZoomOut = () => setScale((prev) => Math.max(prev / 1.2, 1))
  const handleReset = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scale > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && scale > 1) {
      const newX = e.clientX - dragStart.x
      const newY = e.clientY - dragStart.y
      setPosition({ x: newX, y: newY })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === null || prev === 0 ? images.length - 1 : prev - 1))
    handleReset()
  }

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === null || prev === images.length - 1 ? 0 : prev + 1))
    handleReset()
  }

  useEffect(() => {
    const handleMouseUpGlobal = () => setIsDragging(false)
    window.addEventListener("mouseup", handleMouseUpGlobal)
    return () => window.removeEventListener("mouseup", handleMouseUpGlobal)
  }, [])

  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div
              className="relative cursor-pointer group overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.url || "/placeholder.svg"}
                alt={image.caption}
                width={400}
                height={400}
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                Figura {String.fromCharCode(65 + index)}
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="relative w-full h-full">
              <div
                className="overflow-hidden"
                style={{ height: "calc(90vh - 100px)" }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <Image
                  ref={imageRef}
                  src={images[selectedImage ?? index].url || "/placeholder.svg"}
                  alt={images[selectedImage ?? index].caption}
                  width={800}
                  height={800}
                  className="rounded-lg object-contain w-full h-full transition-transform duration-200"
                  style={{
                    transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                    cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                  }}
                  draggable={false}
                />
              </div>
              <div className="absolute bottom-4 left-4 flex space-x-2">
                <Button onClick={handleZoomIn} size="sm">
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button onClick={handleZoomOut} size="sm">
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button onClick={handleReset} size="sm">
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <Button onClick={handlePrevImage} size="sm" variant="outline">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <Button onClick={handleNextImage} size="sm" variant="outline">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <p className="mt-2 text-center">{images[selectedImage ?? index].caption}</p>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}

