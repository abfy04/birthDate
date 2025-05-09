import { BirthdayCard } from './components/BirthdayCard';
import { Animations } from './components/Animations';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-pink-100">
      <div className="absolute inset-0 bg-hearts"></div>
      <Animations />
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen relative z-10">
        <BirthdayCard />
      </div>
      <Footer />
    </div>
  );
}
export default App