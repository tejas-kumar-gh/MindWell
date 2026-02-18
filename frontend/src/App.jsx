import { useState } from 'react'
import "./app.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl max-w-3xl p-8 text-white">

        <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Operator Overloading
        </h1>

        <p className="text-gray-300 text-center mb-6">
          Changing the meaning of operators so they work with objects.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Normal Operator */}
          <div className="bg-black/40 p-5 rounded-xl border border-white/10">
            <h2 className="text-xl font-semibold text-red-400 mb-2">
              Without Operator Overloading
            </h2>
            <pre className="text-sm text-gray-300">
{`int a = 10;
int b = 20;
cout << a + b;  // 30`}
            </pre>
            <p className="mt-3 text-gray-400">
              Operators only work with basic data types like int, float.
            </p>
          </div>

          {/* Overloaded Operator */}
          <div className="bg-black/40 p-5 rounded-xl border border-white/10">
            <h2 className="text-xl font-semibold text-green-400 mb-2">
              With Operator Overloading
            </h2>
            <pre className="text-sm text-gray-300">
{`class Box {
  int length;
public:
  Box(int l) { length = l; }

  Box operator+(Box b) {
    return Box(length + b.length);
  }
};

Box b1(10), b2(20);
Box b3 = b1 + b2;`}
            </pre>
            <p className="mt-3 text-gray-400">
              Now <span className="text-green-400">+</span> also works on objects!
            </p>
          </div>

        </div>

        <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-center font-semibold shadow-lg">
          Operator Overloading lets you use operators like +, -, *, == with your own objects 🚀
        </div>

      </div>
    </div>
    </>
  )
}

export default App
