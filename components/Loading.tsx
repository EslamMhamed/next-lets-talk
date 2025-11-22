import { Mosaic } from "react-loading-indicators"

function Loading() {
  return (
    <div className="flex flex-col items-center animate-fade-in pt-16">
        <Mosaic color={['#33cccc', '#33cc36', '#b8cc33', '#fcca00']} />
    </div>
  )
}

export default Loading