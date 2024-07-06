import Header from '../components/Header'
import Footer from '../components/Footer'
interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <div className='flex flex-col '>
            <Header />
            <main>
                {children}
                <section className=" bg-white w-full min-h-[800px] mx-auto p-6 mt-9" />
            </main>
            <Footer />
        </div>
    )
}
