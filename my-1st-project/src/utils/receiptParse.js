

export const parseReceiptText = (text) => {
    const lines = text
        .split('\n')
        .map(l => l.trim())
        .filter(Boolean)

    return {
        merchant: extractMerchant(lines),
        amount: extractAmount(lines),
        date: extractDate(lines),
        category: classifyReceipt(lines),
    }
}

const extractMerchant = (lines) => {
    return lines[0] || 'Unknow'
}

const extractAmount = (lines) => {
    for (let line of lines) {
        if (/total/i.test(line)) {
            const match = line.match(/(\d+[\.,]\d{2})/)
            if (match) return parseFloat(match[1].replace(',', '.'))
        }
    }

    const nums = lines.join(' ').match(/\d+[\.,]\d{2}/g)
    if (!nums) return null

    return Math.max(...nums.map(n => parseFloat(n.replace(',', '.'))))
}

const extractDate = (lines) => {
    const regex =
        /\b(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}|\w+\s\d{1,2},?\s\d{4})\b/

    for (let line of lines) {
        const match = line.match(regex)
        if (match) return match[0]
    }

    return null
}


const CATEGORY_RULES = [
    {
        category: 'Travel',
        keywords: [
            'uber', 'ola', 'lyft', 'taxi', 'cab', 'bus', 'train', 'flight',
            'airlines', 'metro', 'rail', 'station'
        ],
    },
    {
        category: 'Food',
        keywords: [
            'restaurant', 'cafe', 'food', 'dining', 'bakery', 'coffee',
            'pizza', 'burger', 'tea', 'snack'
        ],
    },
    {
        category: 'Stay',
        keywords: [
            'hotel', 'inn', 'lodge', 'resort', 'motel', 'stay', 'room'
        ],
    },
    {
        category: 'Shopping',
        keywords: [
            'store', 'shop', 'mart', 'market', 'supermarket', 'mall',
            'boutique', 'clothing', 'electronics'
        ],
    },
    {
        category: 'Fuel',
        keywords: [
            'fuel', 'petrol', 'diesel', 'gas', 'petrol pump', 'service station'
        ],
    },
    {
        category: 'Medical',
        keywords: [
            'pharmacy', 'medical', 'hospital', 'clinic', 'drug', 'chemist'
        ],
    },
    {
        category: 'Online',
        keywords: [
            'amazon', 'flipkart', 'order', 'invoice', 'online', 'shopify'
        ],
    },
]

const classifyReceipt = (lines) => {
    const text = lines.join(' ').toLowerCase()

    for (const rule of CATEGORY_RULES) {
        if (rule.keywords.some(keyword => text.includes(keyword))) {
            return rule.category
        }
    }

    return 'Other'
}