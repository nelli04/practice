const sentence = 'Hello my friends!'

export function sum (a: number, b: number) {
    return a + b
}
export function mult(a: number, b: number) {
    return a * b
}

export function sentenseSplit(sentence: string) {
    const words = sentence.toLowerCase().split(' ')
    return words.filter(w => w !== '' && w !== '-')
        .map(w => w
            .replace('!', '')
            .replace(',', '')
            .replace('.', ''))
}

//https://habr.com/ru/company/ruvds/blog/347866/

