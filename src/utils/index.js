import translate from 'translate'

export const translateToSpanish = async sentence => {
    const translated = await translate(sentence, { to: 'es' })
    return translated
}
