import React from 'react';

const ages = [5, 24, 45, 44, 101]

const predicate = (age: number) => {
    return age > 90
}

type CoursesType = {
    title: string,
    price: 100
}

const courses = [
    {title: "js", price: 100},
    {title: "html", price: 200},
    {title: "css", price: 500},
    {title: "react", price: 300}
]
const cheapPrdicate = (course: CoursesType) => {
    return course.price < 200;
}

const Filter = () => {
    return (
        <div>

        </div>
    );
};

export default Filter;