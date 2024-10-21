import Header from './components/Header';
import PricingComponent from './components/PricingComponent';

export default function Page() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 sm:p-20">
      <Header />
      <main className="flex flex-col gap-8 items-center sm:items-start mt-10">
        <PricingComponent />
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center mt-10">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About Next.js
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deploy on Vercel
        </a>
      </footer>
    </div>
  );
}
