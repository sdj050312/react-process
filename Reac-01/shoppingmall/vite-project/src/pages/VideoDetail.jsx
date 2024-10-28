import { useParams } from "react-router"

export default function VideoDetail () {
    const {videoId} = useParams();
    return (
        <>
            
            <h1>video에 대한 디테일 사항들을 보여줄 것 입니다. ! 🎄{videoId}</h1>
        </>
    )


}