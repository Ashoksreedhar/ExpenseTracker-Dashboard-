import Tesseract from "tesseract.js"

export const runTesseractOCR = async (file, onProgress) => {
    const result = await Tesseract.recognize(
        
        file,
        'eng',
        {
            logger: (m) => {
                if (m.status === 'recognizing text' && onProgress) {
                    onProgress(Math.round(m.progress * 100))
                }
            },
        }

    )
return result.data.text
}