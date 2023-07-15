import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useContext, useState } from 'react';

//==================================================
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { ThemeContext } from '@/hooks/ThemeProvider';
import Link from 'next/link';
import styles from './Menu.module.scss';
//==================================================



export default function Example() {
  
  const { theme, toggleTheme, buildWhatsAppLink } = useContext(ThemeContext) as any;
  const [currente, setCurrente] = useState(true);

  const navigation = [
    { name: 'Home', href: '#', current: currente },
    { name: 'Projetos', href: '#Projetos', current: currente },
  ]
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <nav className={`${styles.headerMain} w-full shadow-md border-b-2 border-purple-600`}>
      <Disclosure as="div" className='w-full '>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          // onClick={() => currente ?? setCurrente(!currente)}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                
                {/* Meio do Header */}
                <div className="flex flex-shrink-0 items-center">
                  <section className={styles.iconsHeader}>
                    <span>ANC</span>
                    <Link href='https://github.com/alexnunesc' target="_blank" rel="noopener noreferrer" >
                      <GitHubIcon className={ styles.icons } />
                    </Link>
                    <Link href='https://www.linkedin.com/in/alexnunesc/' target="_blank" rel="noopener noreferrer" >
                      <LinkedInIcon className={ styles.icons } />
                    </Link>
                    <Link href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className={ styles.icons } />
                    </Link>
                    <button onClick={toggleTheme}>
                      {theme === 'dark' ? <LightModeIcon /> : <ModeNightIcon /> }
                    </button>
                  </section>
                </div>

              </div>
            </div>
            
            {/* Fechado */}
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </nav>
  )
}
