import React, { useState } from 'react';

export default function App() {
  const [celebrated, setCelebrated] = useState(false);
  const [pos, setPos] = useState({ left: '50%', top: '50%' });

  const moveButton = () => {
    const x = Math.random() * 80;
    const y = Math.random() * 80;
    setPos({ left: `${x}%`, top: `${y}%` });
  };

  if (celebrated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#ffdef2] text-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm">
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHYxdnF4ZzRyeGZ5amIxdG40eGZ6ZzRyeGZ5amIxdG4mZXA9djFfaW50ZXJuYWxfZ2lmX2J5X2lkJmN0PWc/L4lvBpHWk_Ukg6pPh6/giphy.gif" className="w-44 mx-auto mb-4 rounded-xl" />
          <h1 className="text-2xl font-bold text-pink-600 mb-2">اعشقچ واحبچ! ❤️</h1>
          <p className="text-gray-600 italic leading-relaxed">
            "كأنكِ لقلبي خُلقتِ، وكأني من دونِكِ ما كنتُ أكون.. <br/>
            نرجس.. أنتِ القصيدةُ التي عجزَ الشعراءُ عن وصفِ جمالها."
          </p>
          <button onClick={() => window.location.reload()} className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-full font-bold">أحبچ مرة ثانية</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-[#ffdef2] overflow-hidden">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-[90%] max-w-sm">
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmo3cjZidWp3ZXh0bmpxZzRyeGZ5amIxdG40eGZ6ZzRyeGZ5amIxdG4mZXA9djFfaW50ZXJuYWxfZ2lmX2J5X2lkJmN0PWc/c76IJLufpN762clMc5/giphy.gif" className="w-44 mx-auto mb-6 rounded-xl" />
        <h1 className="text-2xl font-bold text-pink-600 mb-8">نرجس.. تحبين مصطفى لو لا؟ 🥺❤️</h1>
        <div className="flex justify-center gap-4">
          <button onClick={() => setCelebrated(true)} className="bg-pink-500 text-white px-8 py-2 rounded-full font-bold text-lg transition-transform hover:scale-110">اي</button>
          <button 
            onMouseEnter={moveButton}
            onClick={moveButton}
            style={{ position: 'absolute', left: pos.left, top: pos.top, transition: 'all 0.2s' }}
            className="bg-gray-200 text-gray-700 px-8 py-2 rounded-full font-bold text-lg"
          >
            لا
          </button>
        </div>
      </div>
    </div>
  );
}            const btn = document.getElementById('noButton');
            btn.style.left = x + 'px';
            btn.style.top = y + 'px';
        }

        // دالة الاحتفال عند الضغط على "اي"
        function celebrate() {
            const card = document.getElementById('mainCard');
            card.innerHTML = 
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHYxdnF4ZzRyeGZ5amIxdG40eGZ6ZzRyeGZ5amIxdG4mZXA9djFfaW50ZXJuYWxfZ2lmX2J5X2lkJmN0PWc/L4lvBpHWk_Ukg6pPh6/giphy.gif">
                <h1 class="text-2xl font-bold text-pink-600 mb-2">اعشقچ واحبچ! ❤️</h1>
                <div class="poem-text">
                    رأفت يوسف جمالك.. الأقوال وراك فانتتنت بك الغواني <br>
                    ومن الإله بلاد الجمال تجملاً.. حتى كأنك للجمال كباني
                </div>
                <button class="btn yes-btn mt-6" onclick="location.reload()">أحبك مرة ثانية</button>
            ;
        }
    </script>
</body>
</html>
