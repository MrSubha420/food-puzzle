// pages/Home.jsx
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Define the FlipCard component within Home.jsx
function FlipCard({ frontContent, backContent }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 perspective-1000 cursor-pointer"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-r from-yellow-200 to-pink-300 rounded-lg shadow-lg flex items-center justify-center">
          {frontContent}
        </div>
        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-r from-purple-200 to-indigo-300 rounded-lg shadow-lg transform rotate-y-180 flex flex-col items-center justify-center space-y-4 p-4">
          {backContent}
        </div>
      </div>
    </div>
  );
}

const fruitsList = [
  "Mango", "Orange", "Banana", "Apple", "Grape", "Pineapple", "Cherry", "Papaya",
  "Guava", "Peach", "Kiwi", "Lemon", "Strawberry", "Watermelon", "Blueberry",
  "Raspberry", "Pear", "Plum", "Dragonfruit", "Pomegranate"
];

const fruitPages = {
  Mango: [1, 2, 5, 8, 11, 13],
  Orange: [2, 3, 6, 9, 12, 14, 8],
  Banana: [1, 4, 6, 7, 9, 14],
  Apple: [3, 5, 8, 9, 11, 13],
  Grape: [2, 3, 4, 6, 9, 10],
  Pineapple: [1, 3, 7, 9, 12, 13],
  Cherry: [1, 2, 5, 8, 11, 10],
  Papaya: [4, 6, 8, 9, 13, 14, 10],
  Guava: [1, 4, 7, 10, 12, 13],
  Peach: [3, 4, 5, 9, 12, 6],
  Kiwi: [3, 6, 7, 10, 14, 13, 5],
  Lemon: [1, 4, 8, 11, 14, 12],
  Strawberry: [2, 3, 5, 7, 12, 13, 14],
  Watermelon: [1, 2, 6, 7, 9, 10],
  Blueberry: [2, 4, 5, 8, 11, 13],
  Raspberry: [1, 3, 6, 9, 10, 12, 11],
  Pear: [1, 4, 5, 7, 8, 11],
  Plum: [3, 8, 7, 10, 13, 14],
  Dragonfruit: [2, 5, 7, 11, 12, 14],
  Pomegranate: [2, 4, 6, 10, 12, 14, 11]
};

const totalPages = 14;

function Home() {
  const [currentPage, setCurrentPage] = useState(-1);
  const [selectedFruits, setSelectedFruits] = useState(
    fruitsList.reduce((acc, fruit) => ({ ...acc, [fruit]: 0 }), {})
  );
  const [result, setResult] = useState(null);

  const handleStart = () => {
    setCurrentPage(1);
  };

  const handleSelect = () => {
    const updatedFruits = { ...selectedFruits };
    Object.keys(fruitPages).forEach(fruit => {
      if (fruitPages[fruit].includes(currentPage)) {
        updatedFruits[fruit] += 40;
      }
    });
    setSelectedFruits(updatedFruits);
    handleNextPage();
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const sortedFruits = Object.entries(selectedFruits).sort((a, b) => b[1] - a[1]);
    setResult(sortedFruits[0][0]);
  };

  const handleReset = () => {
    setCurrentPage(-1);
    setSelectedFruits(
      fruitsList.reduce((acc, fruit) => ({ ...acc, [fruit]: 0 }), {})
    );
    setResult(null);
  };

  return (
    <div className="Home flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-300 to-blue-500 p-4">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">FRUIT-PUZZLE</h2>
      
      {result ? (
        <Card className="p-6 bg-white shadow-xl rounded-lg transition-all transform hover:scale-105 w-full max-w-md sm:max-w-lg">
          <FlipCard 
            frontContent={
              <div className="text-center text-gray-700">
                <h2 className="text-xl sm:text-2xl mb-4">Click to reveal your fruit!</h2>
                <Button className="bg-blue-500 text-white mt-4 py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition-colors">
                  Reveal
                </Button>
              </div>
            }
            backContent={
              <div className="flex flex-col items-center justify-center text-gray-700 space-y-4 p-2">
                <h2 className="text-xl sm:text-2xl">Your chosen fruit is:</h2>
                <span className="font-semibold text-green-600 text-2xl sm:text-3xl">{result}</span>
                <Button 
                  className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition-colors"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
            }
          />
        </Card>
      ) : currentPage === -1 ? (
        // Initial Page with 4x5 Grid (Responsive)
        <Card className="p-6 bg-white shadow-xl rounded-lg transition-all transform hover:scale-105 w-full max-w-4xl">
          <h2 className="text-2xl sm:text-3xl mb-6 text-gray-800 text-center">Think of a fruit in your mind:</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
            {fruitsList.map((fruit, index) => (
              <div 
                key={index} 
                className="p-4 border rounded-lg text-center bg-gradient-to-r from-yellow-200 to-pink-300 font-semibold text-gray-700 hover:scale-105 transform transition-transform duration-200"
              >
                {fruit}
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button 
              className="bg-green-500 text-white mt-4 py-2 px-6 rounded-lg shadow hover:bg-green-600 transition-colors"
              onClick={handleStart}
            >
              Start
            </Button>
          </div>
        </Card>
      ) : (
        // Selection Pages with 3x3 Grid (Responsive)
        <Card className="p-6 bg-white shadow-xl rounded-lg transition-all transform hover:scale-105 w-full max-w-md sm:max-w-lg">
          <h2 className="text-2xl sm:text-3xl mb-4 text-gray-800 text-center">Is your fruit on this page?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {Object.keys(fruitPages)
              .filter(fruit => fruitPages[fruit].includes(currentPage))
              .map((fruit, index) => (
                <div 
                  key={index} 
                  className="p-4 border rounded-lg text-center bg-gradient-to-r from-yellow-200 to-pink-300 font-semibold text-gray-700"
                >
                  {fruit}
                </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center">
            <Button 
              className="bg-green-500 text-white mr-0 sm:mr-4 mb-4 sm:mb-0 py-2 px-6 rounded-lg shadow hover:bg-green-600 transition-colors"
              onClick={handleSelect}
            >
              Yes
            </Button>
            <Button 
              className="bg-red-500 text-white py-2 px-6 rounded-lg shadow hover:bg-red-600 transition-colors"
              onClick={handleNextPage}
            >
              No
            </Button>
          </div>
        </Card>
      )}

      {/* Add custom CSS styles for the flip effect */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}

export default Home;
