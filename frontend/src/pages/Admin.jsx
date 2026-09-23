import { useState, useEffect } from 'react';
import { 
  getChapters, createChapter, deleteChapter,
  getThemes, createTheme, deleteTheme,
  getTeam, createTeamMember, deleteTeamMember,
  getContactMessages 
} from '../services/api';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('chapters');
  
  const [chapters, setChapters] = useState([]);
  const [themes, setThemes] = useState([]);
  const [team, setTeam] = useState([]);
  const [messages, setMessages] = useState([]);

  // Form states
  const [chapterForm, setChapterForm] = useState({ title: '', description: '', season: 1, order: 0, video_url: '' });
  const [themeForm, setThemeForm] = useState({ title: '', category: '', description: '', order: 0, image_url: '' });
  const [teamForm, setTeamForm] = useState({ name: '', role: '', description: '', tags: '', order: 0, image_url: '' });

  const loadData = () => {
    getChapters().then(setChapters).catch(console.error);
    getThemes().then(setThemes).catch(console.error);
    getTeam().then(setTeam).catch(console.error);
    getContactMessages().then(setMessages).catch(console.error);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAddChapter = async (e) => {
    e.preventDefault();
    await createChapter(chapterForm);
    setChapterForm({ title: '', description: '', season: 1, order: 0, video_url: '' });
    loadData();
  };

  const handleAddTheme = async (e) => {
    e.preventDefault();
    await createTheme(themeForm);
    setThemeForm({ title: '', category: '', description: '', order: 0, image_url: '' });
    loadData();
  };

  const handleAddTeam = async (e) => {
    e.preventDefault();
    await createTeamMember(teamForm);
    setTeamForm({ name: '', role: '', description: '', tags: '', order: 0, image_url: '' });
    loadData();
  };

  const handleDelete = async (type, id) => {
    if (!window.confirm('¿Eliminar registro?')) return;
    if (type === 'chapter') await deleteChapter(id);
    if (type === 'theme') await deleteTheme(id);
    if (type === 'team') await deleteTeamMember(id);
    loadData();
  };

  return (
    <div className="min-h-screen bg-white text-black p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Panel de Administración</h1>
          <a href="/" className="text-blue-500 hover:underline">← Volver al sitio</a>
        </div>

        <div className="flex gap-4 mb-8 border-b">
          {['chapters', 'themes', 'messages'].map(tab => (
            <button
              key={tab}
              className={`pb-2 px-4 capitalize font-medium ${activeTab === tab ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'messages' ? 'Mensajes' : tab}
            </button>
          ))}
        </div>

        {/* CHAPTERS */}
        {activeTab === 'chapters' && (
          <div>
            <form onSubmit={handleAddChapter} className="bg-gray-100 p-6 rounded-lg mb-8 grid grid-cols-2 gap-4">
              <h2 className="col-span-2 text-xl font-bold">Agregar Capítulo</h2>
              
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Título del Capítulo</label>
                <input required placeholder="Ej. ENTRETENIMIENTO - Comedia" className="p-2 border rounded" value={chapterForm.title} onChange={e => setChapterForm({...chapterForm, title: e.target.value})} />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Temporada (Número)</label>
                <input required type="number" min="1" placeholder="Ej. 1" className="p-2 border rounded" value={chapterForm.season} onChange={e => setChapterForm({...chapterForm, season: parseInt(e.target.value)})} />
              </div>

              <div className="col-span-2 flex flex-col">
                <label className="text-sm font-semibold mb-1">Descripción del Capítulo</label>
                <textarea required placeholder="Breve resumen de lo que trata el capítulo" className="p-2 border rounded resize-y" rows="3" value={chapterForm.description} onChange={e => setChapterForm({...chapterForm, description: e.target.value})}></textarea>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Link del Video (YouTube, etc.)</label>
                <input type="url" placeholder="https://youtube.com/..." className="p-2 border rounded" value={chapterForm.video_url} onChange={e => setChapterForm({...chapterForm, video_url: e.target.value})} />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Orden de aparición</label>
                <input type="number" placeholder="Ej. 1, 2, 3..." className="p-2 border rounded" value={chapterForm.order} onChange={e => setChapterForm({...chapterForm, order: parseInt(e.target.value)})} />
              </div>

              <button type="submit" className="col-span-2 bg-black text-white p-2 rounded mt-2 hover:bg-gray-800 transition-colors">Guardar Capítulo</button>
            </form>

            <div className="grid gap-4">
              {chapters.map(c => (
                <div key={c.id} className="border p-4 rounded flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500">Orden: {c.order} - Temp: {c.season}</span>
                    <h3 className="font-bold">{c.title}</h3>
                    <p className="text-sm">{c.description}</p>
                  </div>
                  <button onClick={() => handleDelete('chapter', c.id)} className="bg-red-500 text-white px-3 py-1 rounded">X</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* THEMES */}
        {activeTab === 'themes' && (
          <div>
            <form onSubmit={handleAddTheme} className="bg-gray-100 p-6 rounded-lg mb-8 grid grid-cols-2 gap-4">
              <h2 className="col-span-2 text-xl font-bold">Agregar Tema</h2>
              
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Título del Tema</label>
                <input required placeholder="Ej. Redes sociales" className="p-2 border rounded" value={themeForm.title} onChange={e => setThemeForm({...themeForm, title: e.target.value})} />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Categoría</label>
                <input required placeholder="Ej. ACTUALIDAD" className="p-2 border rounded" value={themeForm.category} onChange={e => setThemeForm({...themeForm, category: e.target.value})} />
              </div>

              <div className="col-span-2 flex flex-col">
                <label className="text-sm font-semibold mb-1">Descripción</label>
                <textarea required placeholder="De qué trata esta sección" className="p-2 border rounded resize-y" rows="3" value={themeForm.description} onChange={e => setThemeForm({...themeForm, description: e.target.value})}></textarea>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Orden de aparición</label>
                <input type="number" placeholder="Ej. 1, 2..." className="p-2 border rounded" value={themeForm.order} onChange={e => setThemeForm({...themeForm, order: parseInt(e.target.value)})} />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Imagen del Tema</label>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="p-1 border rounded text-sm" 
                  onChange={e => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setThemeForm({...themeForm, image_url: reader.result});
                      };
                      reader.readAsDataURL(file);
                    }
                  }} 
                />
                {themeForm.image_url && <img src={themeForm.image_url} alt="Preview" className="mt-2 h-16 w-16 object-cover rounded" />}
              </div>

              <div className="col-span-2 flex justify-end">
                <button type="submit" className="bg-black text-white p-2 rounded hover:bg-gray-800 transition-colors">Guardar Tema</button>
              </div>
            </form>

            <div className="grid gap-4">
              {themes.map(t => (
                <div key={t.id} className="border p-4 rounded flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500">Orden: {t.order} - Cat: {t.category}</span>
                    <h3 className="font-bold">{t.title}</h3>
                    <p className="text-sm">{t.description}</p>
                  </div>
                  <button onClick={() => handleDelete('theme', t.id)} className="bg-red-500 text-white px-3 py-1 rounded">X</button>
                </div>
              ))}
            </div>
          </div>
        )}



        {/* MESSAGES */}
        {activeTab === 'messages' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Mensajes de Contacto</h2>
            <div className="grid gap-4">
              {messages.length === 0 ? <p>No hay mensajes.</p> : null}
              {messages.map(m => (
                <div key={m.id} className="border p-4 rounded bg-gray-50">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-bold">{m.name} <span className="font-normal text-gray-500">({m.email})</span></h3>
                    <span className="text-sm text-gray-400">{new Date(m.created_at).toLocaleString()}</span>
                  </div>
                  <p className="whitespace-pre-wrap">{m.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
