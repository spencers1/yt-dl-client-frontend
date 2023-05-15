export default function ConvertedVideo(props) {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="mb-72 w-3/4 h-32 flex flex-col bg-indigo-200 shadow-lg rounded-lg">       
                {props.title}
            </div>
        </div>
    )
}