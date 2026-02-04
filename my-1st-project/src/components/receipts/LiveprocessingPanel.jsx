import React from 'react'
import { ProgressItem } from './ProgressItem'


export const LiveprocessingPanel = ({ progress }) => {
  return (
    <aside className='  w-full
        rounded-xl
        bg-gradient-to-b from-[#0f172a] to-[#020617]
        p-4
        border border-white/10
        md:sticky md:top-24'>

          
        <h3 className='text-sm text-sky-400 font-semibold'>
          Live Processing
        </h3>
        <p className='text-xs text-white/50'>
          Tesseract OCR Engine V7.0.0
        </p>
    


      <div className="space-y-4">
        <ProgressItem
          name="Receipt"
          percent={progress}
          color={progress === 100 ? "green" : "purple"}
          status="Extracting text..."
        />
      </div>

      <div className="mt-6 text-xs text-right text-white/40">
        Efficiency <span className="text-green-400">99.2%</span>
      </div>

    </aside >
  )
}
