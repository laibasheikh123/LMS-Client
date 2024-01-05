import { useEffect, useState } from 'react'
import Trainer from "../components/Trainer"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import VideoDetails from '../components/VideoDetails'
import { GetVideoId } from '../../HelperFunctions/GetVideoID'


export default function Detail() {



 

  const [data, setData] = useState([])
  const { id } = useParams()

  const [currentVideo, setCurrentVideo] = useState('')

  // https://freechamp.cyclic.app/api/course-by-id/658bfd9eb57b0a9c3f732ad4

  useEffect(() => {
    axios.get(`https://freechamp.cyclic.app/api/course-by-id/${id}`)
      .then((res) => {
        setData(res.data.course)

        const playlist = res.data.course.playlist
        if (playlist.length > 0) {
          setCurrentVideo(GetVideoId(playlist[0]))
        }


      })
      .catch((err) => alert(err.message))

  }, [])



  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 text-white">
            <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl">
              {data.title}
            </h2>

            <p className="mt-3">{data.description}</p>


          </div>

          <div className="flex gap-8">
            <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 py-1 px-2">
              <div className="rounded-full bg-white p-1 px-2">
                <p className="text-sm font-medium">Level</p>
              </div>
              <p className="text-sm font-medium">→ {data.trainingLevel}</p>
            </div>

            <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 py-1 px-2">
              <div className="rounded-full bg-white p-1 px-2">
                <p className="text-sm font-medium">Medium</p>
              </div>
              <p className="text-sm font-medium">→ {data.isVideoMedium}</p>
            </div>
          </div>
        </div>

      </div>

      <div className="mx-20 my-10 grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <p className="mb-6">{data.description}</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-10">Meet The Trainer(s)</h3>
          <p>{data.instructor}</p>
        </div>


      </div>


      {
        data.playlist?.length > 0 ? (<div className=" m-20  grid grid-cols-2 gap-4 bg-black text-white py-10 px-5">

          <div>
            <iframe
              className='w-full aspect-video'
              src={`https://www.youtube.com/embed/${currentVideo}`}
              title="YouTube Playlist"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            />
          </div>

          <div className='px-10'>

            <h1 className='text-2xl font-semibold mb-10'>Playlist</h1>
            {
              data.playlist?.map((video, key) => <VideoDetails key={key} videoUrl={video} changeVideo={setCurrentVideo} currentId={currentVideo} />)
            }
          </div>


        </div>) : (
          <h1 className='text-2xl font-semibold m-20 bg-black text-white py-10 px-5 text-center'> Playlist In Progress</h1>
        )
      }





    



    </>
  )
}
