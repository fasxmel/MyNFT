import CardNFT from "./CardNFT";

function Catalog() {
    return (
      <div className="relative flex flex-grow bg-gradient-to-r from-indigo-200 to-yellow-100 px-8 items-center justify-between py-4">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

          <CardNFT />
        </div>
      </div>
    )
  }

  export default Catalog;
  