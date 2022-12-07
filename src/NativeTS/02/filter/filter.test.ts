test("should take older man than 100", () => {
    const ages = [5, 24, 45, 44, 101];
    const oldMan = ages.filter(age => age > 100)
    expect(oldMan).toBe(101)
})
test("cheap course", () => {

    const courses = [
        {title: "js", price: 100},
        {title: "html", price: 150},
        {title: "css", price: 500},
        {title: "react", price: 300}
    ]

    const cheapCourse = courses.filter(cheap => cheap.price < 200)

    expect(cheapCourse.length).toBe(2)
})
test("completed task", () => {
        const tasks = [
            {title: "js", isDone: true},
            {title: "html", isDone: false},
            {title: "css", isDone: true},
            {title: "react", isDone: false}]

        const completedTask = tasks.filter(el => el.isDone)
    expect(completedTask.length).toBe(2)
    expect(completedTask[0].title).toBe("js")
    })
test("uncompleted task", () => {
        const tasks = [
            {title: "js", isDone: true},
            {title: "html", isDone: false},
            {title: "css", isDone: true},
            {title: "react", isDone: false}]

        const uncompletedTask = tasks.filter(el => !el.isDone)
        expect(uncompletedTask.length).toBe(2)
        expect(uncompletedTask[0].title).toBe("html")
    })