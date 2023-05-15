export default function ConvertUrlForm() {
    return (
        <div className="mt-40 bg-gray-200 rounded-lg">
            <form>
                <label className="block text-gray-700 text-md font-bold mb-2 pt-4">Please enter a valid Youtube video url. 
                <input className="shadow appearance-none border w-64 mt-4" type="text"/> 
                </label>
            </form>
            <button className="m-4 rounded-full border-4 
            px-16 py-3 uppercase font-bold 
            text-sm bg-indigo-400 border-indigo-400">
                Convert to mp3</button>
        </div>
    )
}