import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'
import photo_profile from '../images/profil.jpg'
const Home = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                <div className="space-y-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center lg:text-left">Bonjour, je suis <span className="text-indigo-600">Alain Vincent</span></h1>
                    <p className="text-xl max-w-lg text-center lg:text-left">
                        Je suis etudiant en Ingenerie Informatique, Actuellement à la recherche d'opportunite pour accroître mes competences et avoir des experience dans le monde de travail.
                    </p>
                    <div className='flex gap-4 pt-4'>
                        <a
                            href="#contact"
                            className='px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition duration-300'
                        >
                            Me contacter
                        </a>
                        <a href=""
                            download
                            className='px-4 py-2 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:border-indigo-50 transition duration-300 flex gap-2 items-center'
                        >
                            <FaFileDownload /> Telecharger mon CV
                        </a>
                    </div>
                    <div className='flex gap-4 pt-6'>
                        <a
                            href=""
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-indigo-700 transition duration-300'
                            aria-label='GitHub'
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href=""
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-indigo-700 transition duration-300'
                            aria-label='GitHub'
                        >
                            <FaLinkedin size={24} />
                        </a>

                    </div>
                </div>
                <div className='flex sm:justify-center md:justify-end'>
                    <div className='relative'>
                        <img
                            src={photo_profile}
                            alt="Alain Vincent-Developpeur full stack"
                            className='max-w-xs object-cover rounded-2xl'
                        />
                        <div className='absolute -z-10 w-[320px] h-full bg-indigo-100 rounded-2xl top-3 left-3 lg:top-4 lg:left-4'></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Home;
