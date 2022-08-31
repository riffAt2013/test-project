import Image from "next/image";

export default function Card(props) {
  return (
    <>
      <div className="max-w-md rounded-lg border shadow-md bg-amber-600 border-gray-700">
        <div className="p-5">
          <div className="relative">
            <Image
              src={props.imageURL}
              layout="fixed"
              width={250}
              height={250}
            />
          </div>
          <p className="mb-3 font-medium text-gray-800 ">{props.name}</p>
        </div>
      </div>
    </>
  );
}
