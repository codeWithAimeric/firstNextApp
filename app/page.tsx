import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faWordpress, faReact, faSymfony, faLaravel, faHtml5 } from '@fortawesome/free-brands-svg-icons';

export default function Page() {
  return (
    <>
      <Head>
        <title>Tech-mada</title>
      </Head>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <header className="p-5 bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">Hello, I'm a FullStack Developer</h1>
            <nav>
              <a href="#home" className="text-white hover:text-red-500 mx-2">Home</a>
              <a href="#services" className="text-white hover:text-red-500 mx-2">Services</a>
              <a href="#about" className="text-white hover:text-red-500 mx-2">About</a>
              <a href="#skills" className="text-white hover:text-red-500 mx-2">Skills</a>
              <a href="#portfolio" className="text-white hover:text-red-500 mx-2">Portfolio</a>
              <a href="#contact" className="text-white hover:text-red-500 mx-2">Contact</a>
            </nav>
          </div>
        </header>

        <main className="flex-grow container mx-auto p-5">
          <section id="services" className="grid grid-cols-3 gap-1">
            <div className="bg-gray-800 p-2 rounded flex flex-col items-center text-center w-64 h-64">
              <FontAwesomeIcon icon={faGithub} className="text-3xl mb-1" />
              <h2 className="text-lg font-bold">Git Version Control</h2>
            </div>
            <div className="bg-gray-800 p-2 rounded flex flex-col items-center text-center w-64 h-64">
              <FontAwesomeIcon icon={faWordpress} className="text-3xl mb-1" />
              <h2 className="text-lg font-bold">Wordpress</h2>
            </div>
            <div className="bg-gray-800 p-2 rounded flex flex-col items-center text-center w-64 h-64">
              <FontAwesomeIcon icon={faHtml5} className="text-3xl mb-1" />
              <h2 className="text-lg font-bold">HTML/CSS</h2>
            </div>
            <div className="bg-gray-800 p-2 rounded flex flex-col items-center text-center w-64 h-64">
              <FontAwesomeIcon icon={faSymfony} className="text-3xl mb-1" />
              <h2 className="text-lg font-bold">Symfony</h2>
            </div>
            <div className="bg-gray-800 p-2 rounded flex flex-col items-center text-center w-64 h-64">
              <FontAwesomeIcon icon={faLaravel} className="text-3xl mb-1" />
              <h2 className="text-lg font-bold">Laravel</h2>
            </div>
            <div className="bg-gray-800 p-2 rounded flex flex-col items-center text-center w-64 h-64">
              <FontAwesomeIcon icon={faReact} className="text-3xl mb-1" />
              <h2 className="text-lg font-bold">ReactJS</h2>
            </div>
          </section>
        </main>



        <footer className="bg-gray-800 p-5">
          <div className="container mx-auto flex justify-between">
            <div className="flex flex-col">
              <span>Projects</span>
              <section id="services" className="grid grid-cols-3 gap-1">
                <div className="bg-gray-800 p-2 rounded flex flex-col items-center text-center w-64 h-64">
                  <h2 className="text-lg font-bold"><a href="https://data-agility.fr/">Data-agility</a></h2>
                </div>
                <div className="bg-gray-800 p-2 rounded flex flex-col items-center text-center w-64 h-64">
                  <h2 className="text-lg font-bold"><a href="https://dolibackup.com/fr/">Dolibackup</a></h2>
                </div>
                <div className="bg-gray-800 p-2 rounded flex flex-col items-center text-center w-64 h-64">
                  <h2 className="text-lg font-bold"><a href="https://www.nexilink.fr/">Nexilink</a></h2>
                </div>
                <div className="bg-gray-800 p-2 rounded flex flex-col items-center text-center w-64 h-64">
                  <h2 className="text-lg font-bold"><a href="https://www.cosoluce.fr/">Cosoluce</a></h2>
                </div>
                <div className="bg-gray-800 p-2 rounded flex flex-col items-center text-center w-64 h-64">
                  <h2 className="text-lg font-bold"><a href="https://annuairecm.pro/">Annuaire Cameroun</a></h2>
                </div>
                <div className="bg-gray-800 p-2 rounded flex flex-col items-center text-center w-64 h-64">
                  <h2 className="text-lg font-bold"><a href="https://www.handicraft-mdg.com/">Handicraft-mdg</a></h2>
                </div>
              </section>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
