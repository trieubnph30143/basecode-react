import React from "react";

const ProductManager = () => {
  return (
    <div>
      <div className="">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Desc
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                dsabhdhabsmndbhsaghdb
              </th>
              <td className="px-6 py-4">
                <img
                  src="https://stcv4.hnammobile.com//uploads/optimized/news/danh-gia-iphone-14-pro-14-pro-max-lieu-co-du-suc-khuynh-dao-gioi-cong-nghe-11663319473.webp"
                  width={50}
                  height={50}
                  alt
                />
              </td>
              <td className="px-6 py-4">Hang oke</td>
              <td className="px-6 py-4">IPhone</td>
              <td className="px-6 py-4">$ 9999</td>
              <td className="px-6 py-4">
                <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  Delete
                </button>
                <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                  Update
                </button>
              </td>
            </tr>

            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                dsabhdhabsmndbhsaghdb
              </th>
              <td className="px-6 py-4">
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/226463/Samsung-Galaxy-a32-5G--600x600.jpg"
                  width={50}
                  height={50}
                  alt
                />
              </td>
              <td className="px-6 py-4">Hang oke</td>
              <td className="px-6 py-4">SamSung</td>
              <td className="px-6 py-4">$ 9999</td>
              <td className="px-6 py-4">
                <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  Delete
                </button>
                <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManager;
