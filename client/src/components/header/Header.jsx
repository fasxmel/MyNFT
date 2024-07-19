import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">

          <div className="flex lg:flex-1 pt-3">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">MyNFT</span>
              <img
                alt="logo"
                src={'../../../logo1.jpg'}
                className="h-11 rounded-md w-auto"
              />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            
              <Link 
              to="/"
              className="text-sm font-semibold leading-6 text-gray-900">
                Home
              </Link>
              <Link 
              to="/catalog"
              className="text-sm font-semibold leading-6 text-gray-900">
                Catalog
              </Link>
              <Link 
              to="/pricing"
              className="text-sm font-semibold leading-6 text-gray-900">
                Pricing
              </Link>
              <Link
              to="/about"
              className="text-sm font-semibold leading-6 text-gray-900">
                About
              </Link>
           
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
            <Link 
            to="#" 
            className="text-sm font-semibold leading-6 text-gray-900">
              Log in 
            <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
            to="#" 
            className="text-sm font-semibold leading-6 text-gray-900">
              Sign up 
            <span aria-hidden="true">&rarr;</span>
            </Link>

          </div>

        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">MyNFT</span>
                <img
                  alt="logo1"
                  src={'../../../logo1.jpg'}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">

                <div className="space-y-2 py-6">
                  
                    <Link
                      to="/"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Home
                    </Link>
                    <Link
                      to="/catalog"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Catalog
                    </Link>
                    <Link
                      to="/pricing"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Pricing
                    </Link>
                    <Link
                      to="/about"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      About
                    </Link>
                  
                </div>

                <div className="py-6">
                  <Link
                    to="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Log in
                  </Link>
                </div>

                <div className="py-6">
                  <Link
                    to="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Sign up
                  </Link>
                </div>

              </div>
            </div>

          </DialogPanel>
        </Dialog>
        
    </header>
  )
}

export default Header;