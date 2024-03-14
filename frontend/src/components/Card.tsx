
interface card{
    title:string
}
export function Card({title}:card){

    return <div className="border shadow-md p-4 rounded-md">
        <div className=" flex flex-col gap-2 max-w-lg text-wrap">
            <span className="text-xl font-semibold">{title}</span>
            <div className=" text-right">
                <button className="bg-black text-sm font-medium rounded-md  text-white p-2 ">Take Survey</button>
            </div>
        </div>
    </div>
}