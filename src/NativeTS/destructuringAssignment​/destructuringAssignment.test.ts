import {ManType} from "./DestructuringAssignment";

let props: ManType
beforeEach(() => {
    props = {
        name: "Oleksandr",
        age: 27,
        lessons: [{title: '1'}, {title: "2"}],
        adress: {
            street: {
                title: 'Vaclava'
            }
        }
    }
})


test("destructuringAssignment", () => {

        const {age, name} = props

        expect(age).toBe(27)
        expect(name).toBe('Oleksandr')
    }
)
test('sss', ()=>{
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

        expect(l1.title).toBe('1')
})

