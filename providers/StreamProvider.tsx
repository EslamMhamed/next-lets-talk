'use client'

import { tokenProvider } from "@/actions/stream.actions"
import Loading from "@/components/Loading"
import { useUser } from "@clerk/nextjs"
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk"
import { useMemo } from "react"


const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY

function StreamProvider({children}: {children:React.ReactNode}) {

    const { isLoaded, user } = useUser()

  const client = useMemo(() => {
    if (!isLoaded || !user) return undefined;
    if (!API_KEY) throw new Error("Stream API Key is missing");

    return new StreamVideoClient({
      apiKey: API_KEY,
      user: {
        id: user.id,
        name: user.firstName || user.username || "User",
        image: user.imageUrl,
      },
      tokenProvider,
    });
  }, [isLoaded, user]);

  if (!client) return <Loading />;

  return (
    <StreamVideo client={client} >
        {children}
    </StreamVideo>
  )
}

export default StreamProvider