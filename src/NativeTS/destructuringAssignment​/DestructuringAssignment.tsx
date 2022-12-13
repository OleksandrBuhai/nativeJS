import React from "react";

export  type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    adress: {
        street: {
            title: string
        }
    }

}



export const DestructuringAssignment:React.FC <ManType>=({age,name,...props})=>{

    return (
        <div>
            {age}
            {name}
        </div>
    )
}