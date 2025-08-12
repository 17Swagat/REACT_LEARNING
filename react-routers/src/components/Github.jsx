import {useLoaderData} from 'react-router'
export default function GithubPage(){
    const data = useLoaderData()

    return (
    <div className="h-[70vh] w-full bg-gray-800 text-white flex justify-center items-center text-5xl flex-col">
        <div className="py-2">
            Github: Followers {
                data['followers']
            } ; 
            Following {
                data['following']
            }
        </div>
        <img width={250} src={data['avatar_url']} alt="No-Img" className="rounded-2xl" />
    </div>
)
}

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/17Swagat')
    return response.json() // Returning a Promise Here!!
}

                