'use client'

import { useRef } from 'react'

interface Step3Props {
  photos: File[]
  onChange: (files: File[]) => void
  errors: { [key: string]: string }
}

export default function Step3PhotoUpload({ photos, onChange, errors }: Step3Props) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      onChange([...photos, ...newFiles])
    }
  }

  const handleRemovePhoto = (index: number) => {
    onChange(photos.filter((_, i) => i !== index))
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files)
      onChange([...photos, ...newFiles])
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
        Add photos (optional)
      </h2>
      <p className="text-slate-600 mb-6">
        Photos help us provide a more accurate quote. You can skip this step if you prefer.
      </p>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center cursor-pointer hover:border-teal-500 transition-colors"
      >
        <span className="material-icons-outlined text-slate-400 text-5xl mb-4 block">
          cloud_upload
        </span>
        <p className="text-slate-700 font-medium mb-2">
          Click to upload or drag and drop
        </p>
        <p className="text-sm text-slate-500">
          JPEG, PNG, or WebP (max 5MB per file)
        </p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {photos.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold text-slate-900 mb-3">
            Uploaded Photos ({photos.length})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="relative group">
                <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRemovePhoto(index)
                  }}
                  className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span className="material-icons-outlined text-sm">close</span>
                </button>
                <p className="text-xs text-slate-600 mt-1 truncate">{photo.name}</p>
                {errors[`photo-${index}`] && (
                  <p className="text-xs text-red-600 mt-1">{errors[`photo-${index}`]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
