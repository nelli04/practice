import {mult, sentenseSplit, sum} from "./01";

test ('sum should be correct', () =>{
    const a = 1
    const b = 2
    const c = 3

    const result = sum(a, b)

    expect(result).toBe(3)
})
test ('sum should be correct', () =>{
    const a = 1
    const b = 2
    const c = 3

    const result = mult(a, b)

    expect(result).toBe(2)
})

test ('spliting into words should be correct', () => {
    const sents1 = 'Hello my friend'
    const sents2 = 'JS my friend'

    const result = sentenseSplit(sents1)
    const result1 = sentenseSplit(sents2)

    expect(result.length).toBe(3)
    expect(result[0]).toBe('hello')
    expect(result[1]).toBe('my')
    expect(result[2]).toBe('friend')

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('js')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')
})