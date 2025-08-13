import {useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile(){
    const {user} = useContext(UserContext)
    if (!user || (user.userName == '' && user.password == ''))
        return <div>Please Login</div>;
    return (
        <div className="text-white flex flex-col items-start text-3xl gap-x-2">
            <h1 className="underline mt-2">Profile </h1>
            <p><span className="underline text-yellow-500">User-Name:</span> {user.userName}</p>
            <p><span className="underline text-yellow-500">User-Password:</span> {user.password}</p>
        </div>
    );
}