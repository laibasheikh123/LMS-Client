import { Link } from 'react-router-dom';

function Cards({ image, course, tags, desc, id }) {

  console.log(tags)
  return (
    <>


     
      <div className="w-[300px] rounded-md border">
        <img
          src={image}
          alt={course}
          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold truncate">
            {course}
          </h1>

          <p className="truncate mt-3 text-sm text-gray-600">
            {desc}</p>

          <div className="mt-4">

            {
              tags?.map((tag, key) => <span key={key} className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #{tag}
              </span>)
            }



          </div>
          <Link
            to={`/course/${id}`}
            className="bg-black text-white block mt-4 text-center py-2 hover:text-black hover:bg-white hover:border hover:border-black"
          >
            View Detail
          </Link>
        </div>
      </div>



    </>
  );
}

export default Cards;
