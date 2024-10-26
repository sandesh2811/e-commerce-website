import { addBlurredDataUrl } from "../../../_lib/getBase64";
import ImageComponent from "./ImageComponent";

const newArrivalsData = [
  {
    id: 1,
    name: "Long Coat",
    image:
      "https://images.pexels.com/photos/22686650/pexels-photo-22686650/free-photo-of-woman-wearing-coat-on-a-street-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 2299,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae earum aspernatur doloribus nisi accusamus in voluptatem doloremque fugit aperiam voluptas ab minus dolore, non magni ullam fuga iusto laudantium omnis?",
    features: [
      "Made with cotton",
      "Oversized",
      "Perfect for both summer and winter",
    ],
    rating: 4.5,
  },
  {
    id: 2,
    name: "Fannel Shirt",
    image:
      "https://images.pexels.com/photos/20899137/pexels-photo-20899137/free-photo-of-model-in-plaid-flannel-shirt-and-jeans-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 2299,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae earum aspernatur doloribus nisi accusamus in voluptatem doloremque fugit aperiam voluptas ab minus dolore, non magni ullam fuga iusto laudantium omnis?",
    features: [
      "Made with cotton",
      "Oversized",
      "Perfect for both summer and winter",
    ],
    rating: 4.4,
  },
  {
    id: 3,
    name: "Fannel Shirt",
    image:
      "https://images.pexels.com/photos/20899137/pexels-photo-20899137/free-photo-of-model-in-plaid-flannel-shirt-and-jeans-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 2299,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae earum aspernatur doloribus nisi accusamus in voluptatem doloremque fugit aperiam voluptas ab minus dolore, non magni ullam fuga iusto laudantium omnis?",
    features: [
      "Made with cotton",
      "Oversized",
      "Perfect for both summer and winter",
    ],
    rating: 4.7,
  },
];

const NewArrivals = async () => {
  const newArrivals = await addBlurredDataUrl(newArrivalsData);

  return (
    <div className="min-h-[70vh] overflow-hidden flex flex-col items-center justify-center lg:items-start gap-4 mid:gap-8 mt-8 midLg:mt-0">
      <div>
        <h1 className="text-3xl font-semibold uppercase text-center midLg:text-6xl lg:text-start">
          New Arrivals
        </h1>
      </div>
      <div className="w-full min-h-[40vh] flex flex-col justify-between items-center gap-6 mid:flex-row flex-wrap mid:justify-center lg:justify-between">
        {newArrivals.map((newArrival, idx) => (
          <div key={idx} className="flex justify-center flex-col gap-2">
            <ImageComponent newArrival={newArrival} />
            <div className="w-full">
              <div className="flex justify-between items-center mb-1 font-light">
                <h3>{newArrival.name}</h3>
                <span>Rs {newArrival.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
