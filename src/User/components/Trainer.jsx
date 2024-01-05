export default function Trainer({trainer_name,desc}) {
    return (
        <div className="bg-black text-white px-10 py-6 rounded-2xl"> 
            <h4 className="text-xl font-bold mb-2">{trainer_name}</h4>
            <p>
                {desc}
            </p>
        </div>
        
    )
}
