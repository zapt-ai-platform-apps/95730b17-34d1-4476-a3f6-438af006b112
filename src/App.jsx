import { createSignal, For } from 'solid-js';

const guideSections = [
  {
    id: 1,
    title: 'مقدمة',
    content:
      'في هذا الدليل، سنستعرض كيفية استخدام قارئات الشاشة للمكفوفين على أجهزة الأندرويد. سنقدم معلومات شاملة ومتكاملة من كافة الجوانب.',
  },
  {
    id: 2,
    title: 'ما هو قارئ الشاشة؟',
    content:
      'قارئ الشاشة هو برنامج يساعد المكفوفين وضعاف البصر على استخدام الأجهزة الذكية من خلال تحويل النصوص والعناصر المرئية إلى كلام مسموع.',
  },
  {
    id: 3,
    title: 'أشهر قارئات الشاشة على الأندرويد',
    content:
      'هناك عدة قارئات شاشة متاحة على أجهزة الأندرويد، منها: TalkBack، وVoice Assistant، وShinePlus.',
  },
  {
    id: 4,
    title: 'كيفية تفعيل TalkBack',
    content:
      'لتمكين TalkBack على جهازك:\n1. افتح الإعدادات.\n2. انتقل إلى إمكانية الوصول.\n3. اختر TalkBack وقم بتفعيله.',
  },
  {
    id: 5,
    title: 'استخدام الإيماءات مع TalkBack',
    content:
      'يوفر TalkBack مجموعة من الإيماءات للتحكم في الجهاز، مثل السحب والتدوير للنقل بين العناصر.',
  },
  // أضف المزيد من الأقسام حسب الحاجة
];

function App() {
  const [currentSection, setCurrentSection] = createSignal(guideSections[0]);

  const goToNextSection = () => {
    const currentIndex = guideSections.findIndex(
      (section) => section.id === currentSection().id
    );
    if (currentIndex < guideSections.length - 1) {
      setCurrentSection(guideSections[currentIndex + 1]);
    }
  };

  const goToPreviousSection = () => {
    const currentIndex = guideSections.findIndex(
      (section) => section.id === currentSection().id
    );
    if (currentIndex > 0) {
      setCurrentSection(guideSections[currentIndex - 1]);
    }
  };

  const goToSection = (section) => {
    setCurrentSection(section);
  };

  return (
    <div class="min-h-screen bg-gray-100 text-gray-900" dir="rtl">
      <div class="container mx-auto p-4 h-full flex flex-col">
        <header class="mb-6">
          <h1 class="text-3xl font-bold text-center mb-4">
            دليل استخدام قارئات الشاشة للمكفوفين على الأندرويد
          </h1>
          <nav class="flex justify-center flex-wrap">
            <For each={guideSections}>
              {(section) => (
                <button
                  class={`m-2 px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 transition duration-300 ${
                    currentSection().id === section.id ? 'bg-blue-700' : ''
                  }`}
                  onClick={() => goToSection(section)}
                >
                  {section.title}
                </button>
              )}
            </For>
          </nav>
        </header>

        <main class="flex-grow">
          <section class="bg-white p-6 rounded-md shadow-md">
            <h2 class="text-2xl font-semibold mb-4">{currentSection().title}</h2>
            <p class="leading-loose whitespace-pre-line">
              {currentSection().content}
            </p>
          </section>
        </main>

        <footer class="mt-6 flex justify-between">
          <button
            class={`px-4 py-2 bg-gray-300 text-gray-700 rounded-md cursor-pointer hover:bg-gray-400 transition duration-300 ${
              currentSection().id === guideSections[0].id ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={goToPreviousSection}
            disabled={currentSection().id === guideSections[0].id}
          >
            السابق
          </button>
          <button
            class={`px-4 py-2 bg-gray-300 text-gray-700 rounded-md cursor-pointer hover:bg-gray-400 transition duration-300 ${
              currentSection().id === guideSections[guideSections.length - 1].id
                ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={goToNextSection}
            disabled={currentSection().id === guideSections[guideSections.length - 1].id}
          >
            التالي
          </button>
        </footer>
      </div>
    </div>
  );
}

export default App;