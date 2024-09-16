import React from 'react'


function Navbar() {
  return (
    <header className="bg-background-primary">
    <div className="container mx-auto px-4">
      <nav className="flex justify-between items-center gap-4 py-4">
        <a href="/">
          <img src="/akatsuki.png" alt="SimpleBlog logo" width="150" className="hidden light-theme:block dark-theme:hidden" />
        </a>
  
        <div className="flex items-center gap-4">
          <button className="bg-action-secondary text-foreground-tertiary w-10 h-10 flex justify-center items-center rounded-full text-xl hover:bg-accent hover:text-white">
            <ion-icon name="moon" className="hidden light-theme:block"></ion-icon>
            <ion-icon name="sunny" className="hidden dark-theme:block"></ion-icon>
          </button>
  
          <button className="bg-action-secondary text-foreground-tertiary w-10 h-10 flex justify-center items-center rounded-full text-xl hover:bg-accent hover:text-white">
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </div>
  
        <div className="hidden flex-wrap gap-4 md:flex">
          <ul className="flex space-x-4">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/" className="nav-link">Events</a></li>
            <li><a href="/" className="nav-link">About Us</a></li>
            <li><a href="/" className="nav-link">Contact</a></li>
          </ul>
        </div>
  
        <div className="fixed inset-0 bg-background-primary p-16 overflow-auto transform translate-x-full visibility-hidden transition-transform duration-500 ease-in-out z-10 mobile-nav">
          <button className="absolute top-5 right-5 bg-action-secondary text-foreground-tertiary w-10 h-10 flex justify-center items-center rounded-full text-xl hover:bg-accent hover:text-white">
            <ion-icon name="close-outline"></ion-icon>
          </button>
  
          <div className="pb-5 mb-5 border-b border-action-primary">
            <p className="text-2xl mb-4">Main Menu</p>
            <ul>
              <li className="mb-2"><a href="/" className="nav-link">Home</a></li>
              <li className="mb-2"><a href="/" className="nav-link">About Me</a></li>
              <li className="mb-2"><a href="/" className="nav-link">Contact</a></li>
            </ul>
          </div>
  
          <div>
            <p className="text-2xl mb-4">Topics</p>
            <ul>
              <li className="mb-2"><a href="/" className="nav-link">Database</a></li>
              <li className="mb-2"><a href="/" className="nav-link">Accessibility</a></li>
              <li className="mb-2"><a href="/" className="nav-link">Web Performance</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  
  )
}

export default Navbar