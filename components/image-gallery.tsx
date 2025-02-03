"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react"

interface ImageGalleryProps {
  images: { url: string; caption: string }[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [scale, setScale] = useState(1)

  const handleZoomIn = () => setScale((prev) => Math.min(prev * 1.2, 3))
  const handleZoomOut = () => setScale((prev) => Math.max(prev / 1.2, 1))
  const handleReset = () => setScale(1)

  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div className="relative cursor-pointer group overflow-hidden rounded-lg">
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
              <div className="overflow-hidden" style={{ height: "calc(90vh - 100px)" }}>
                <Image
                  src={image.url || "/placeholder.svg"}
                  alt={image.caption}
                  width={800}
                  height={800}
                  className="rounded-lg object-contain w-full h-full"
                  style={{ transform: `scale(${scale})`, transition: "transform 0.2s" }}
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
            </div>
            <p className="mt-2 text-center">{image.caption}</p>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}

