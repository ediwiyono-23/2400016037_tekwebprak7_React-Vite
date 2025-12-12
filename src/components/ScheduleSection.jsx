import {
  ClockIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  CodeBracketIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function ScheduleSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Jadwal & <span className="text-blue-600">Program Kegiatan</span>
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Program terstruktur yang dirancang untuk mengoptimalkan <br />
          pembelajaran dan pengembangan skill Setiap Sabtu
        </p>

        <div className="bg-white rounded-xl shadow-xl p-10 mb-12">
          <h3 className="text-center text-blue-600 font-medium mb-6">
            Setiap Sabtu
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-linear-to-r from-yellow-200 to-green-200 p-6 rounded-xl shadow">
              <div className="flex items-center gap-3 mb-3">
                <ClockIcon className="w-7 h-7 text-yellow-700" />
                <h4 className="font-bold text-lg">Sesi Pagi</h4>
              </div>
              <p className="font-semibold text-blue-700">09.00 – 12.00 WIB</p>
              <p className="text-gray-600 text-sm mt-2">
                Workshop, Career Talks, dan Extra Classes intensif
              </p>
            </div>

            <div className="bg-linear-to-r from-green-200 to-blue-200 p-6 rounded-xl shadow">
              <div className="flex items-center gap-3 mb-3">
                <ClockIcon className="w-7 h-7 text-blue-700" />
                <h4 className="font-bold text-lg">Sesi Sore</h4>
              </div>
              <p className="font-semibold text-blue-700">16.00 – 19.00 WIB</p>
              <p className="text-gray-600 text-sm mt-2">
                Project Work, Mentoring, dan Collaboration Session
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-yellow-200 p-6 rounded-xl shadow">
            <ChatBubbleLeftRightIcon className="w-10 h-10 text-yellow-700 mb-4" />
            <h3 className="font-bold">Career Talks</h3>
            <p className="text-sm mt-1 text-gray-700">
              Sesi sharing dari praktisi <br />
              industri dan alumni sukses
            </p>
          </div>

          <div className="bg-green-200 p-6 rounded-xl shadow">
            <BookOpenIcon className="w-10 h-10 text-green-700 mb-4" />
            <h3 className="font-bold">Extra Classes</h3>
            <p className="text-sm mt-1 text-gray-700">
             Kelas tambahan skill <br />
             development danworkshop <br />
             teknis
            </p>
          </div>

          <div className="bg-blue-200 p-6 rounded-xl shadow">
            <CodeBracketIcon className="w-10 h-10 text-blue-700 mb-4" />
            <h3 className="font-bold">Project Work</h3>
            <p className="text-sm mt-1 text-gray-700">
              Mengerjakan project nyata <br />
              dengan bimbingan <br />
              mentor
            </p>
          </div>

          <div className="bg-pink-200 p-6 rounded-xl shadow">
            <UserGroupIcon className="w-10 h-10 text-pink-700 mb-4" />
            <h3 className="font-bold">Mentoring</h3>
            <p className="text-sm mt-1 text-gray-700">
              Sesi konsultasi personal <br />
              dengan mentor <br />
              berpengalaman
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
