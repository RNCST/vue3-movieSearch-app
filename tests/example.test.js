
const userA = {
  name: 'osh',
  age: 29
}

const userB = {
  name: 'sh o',
  age: 28
}

test('equal', () => {
  expect(userA.age).toBe(29)
  expect(userA).toEqual({
    name:'osh',
    age:29
  })
})

test('not equal', () => {
  expect(userB.name).not.toBe('osh')
  expect(userB).not.toBe(userA)
})