import {useParams} from 'react-router'

export default function User(){
    const {id} = useParams() // NOTE: That the variable name should match with the one that I've given in the main.jsx router

    return (
        <div className="h-[70vh] w-full bg-gray-800 text-white flex justify-center items-center text-5xl">
            User: {id}
        </div>
    )
}