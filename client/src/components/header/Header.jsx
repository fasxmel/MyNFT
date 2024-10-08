import { useContext, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/userContext'

function Header() {
  const { isAuthticated, email} = useContext(UserContext);
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">

          <div className="flex lg:flex-1 pt-3">
            <Link to="/" className="-m-1.5 p-1.5">
              
              <img
                alt="logo"
                src={'../../../logo1.jpg'}
                className="h-10 rounded-md w-auto"
              />
            </Link>
          </div>

           {isAuthticated && 
           (
            <div className="md:flex-1">
            <span>{email}</span>
            </div>
          )}
           
           
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
              

              {isAuthticated && (
                <>
                <Link
                to="/create"
                className="text-sm font-semibold leading-6 text-gray-900">
                  Create NFT
                </Link>
                <Link
                to="/profile"
                className="text-sm font-semibold leading-6 text-gray-900">
                  Profile
                </Link>
                </>
              )}
              
           
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">

            {isAuthticated 
               ? (
                <Link
                to="/logout" 
                className="text-sm font-semibold leading-6 text-gray-900">
                  Log out
                <span aria-hidden="true">&rarr;</span>
                </Link>
                )
                : (
                  <>
                  <Link 
                  to="/login" 
                  className="text-sm font-semibold leading-6 text-gray-900">
                  Log in 
                  <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <Link
                  to="/register" 
                  className="text-sm font-semibold leading-6 text-gray-900">
                  Sign up 
                  <span aria-hidden="true">&rarr;</span>
                  </Link>
                  </>
                )
            }
            
          </div>

        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden ">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-r from-indigo-200 to-yellow-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">MyNFT</span>
                <img
                  alt="logo1"
                  src={'../../../logo1.jpg'}
                  className="h-10 rounded-md w-auto"
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
                   

                    {isAuthticated && (
                      <>
                      <Link
                      to="/create"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Create NFT
                    </Link>
                    <Link
                      to="/profile"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Profile
                    </Link>
                      </>
                    )}
                    
                </div>
                 

                {isAuthticated
                   ?(
                   <div className="py-6">
                   <Link
                    to="/logout"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Log out
                   </Link>
                   </div>
                   )
                   :(
                    <>
                    <div className="py-6">
                    <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Log in
                    </Link>
                    </div>

                   <div className="py-6">
                   <Link
                    to="/register"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Sign up
                   </Link>
                   </div>

                    </>
                   )
                }
                
              </div>
            </div>

          </DialogPanel>
        </Dialog>
        
    </header>
  )
}

export default Header;