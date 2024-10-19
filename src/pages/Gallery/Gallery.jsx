import './Gallery.css';
import { useEffect, useState } from "react";
import Layout from '../../components/Layout';

const GalleryData = [
  {
    id: 1,
    title: "Events",
    image: "/images/img1.webp"
  },
  {
    id: 2,
    title: "Events",
    image: "/images/img2.webp"
  },
  {
    id: 3,
    title: "Events",
    image: "/images/img3.webp"
  },
  {
    id: 4,
    title: "Events",
    image: "/images/img4.webp"
  },
  {
    id: 5,
    title: "Pravardhan",
    image: "/images/img5.webp"
  },
  {
    id: 6,
    title: "Pravardhan",
    image: "/images/img6.webp"
  },
  {
    id: 7,
    title: "Pravardhan",
    image: "/images/img8.webp"
  },
  {
    id: 8,
    title: "Pravardhan",
    image: "/images/img10.webp"
  },
  {
    id: 9,
    title: "Workshop",
    image: "/images/img7.webp"
  },
  {
    id: 10,
    title: "Workshop",
    image: "/images/img9.webp"
  },
]

const Gallery = () => {

  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(GalleryData);
    setCollection([... new Set(GalleryData.map((item) => item.title))])
  }, [])

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.title == itemData);
    setData(filterData);
  }

  return (
    <Layout>
      <div className="App pt-28 bg-slate-100">
        <h2 className='text-center text-4xl text-orange-600 font-semibold'> Our Memories</h2>
        <div className="galleryWrapper px-5 py-14">
          <div className="filterItem mb-16">
            <ul>
              <li><button onClick={() => {setData(GalleryData)}} className='p-2'>All</button></li>
              {
                collection.map((item) => <li><button onClick={() => { gallery_filter(item) }} className='p-2'>{item}</button></li>)
              }
            </ul>
          </div>
          <div className="galleryContainer flex flex-wrap justify-center items-center gap-10">
            {
              data.map((item) => <div key={item.id} className="galleryItem w-72 h-52"><img src={item.image}  className='w-full h-full rounded-xl object-cover'/></div>)
            }
          </div>
        </div>
      </div>
    </Layout>

  );
}

export default Gallery;