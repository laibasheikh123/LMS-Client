export default function Loader() {
    return (
        <div className="flex flex-row z-30 gap-2 bg-cyan-200/50 h-screen w-screen">
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce" />
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]" />
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]" />
        </div>

    )
}
