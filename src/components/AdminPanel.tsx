import { useState, useEffect } from 'react';
import { Upload, Trash2, RefreshCw } from 'lucide-react';
import { supabase } from '../lib/supabase';
import ImageUpload from './ImageUpload';

export default function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const loadImages = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.storage
        .from('gallery-images')
        .list();

      if (error) throw error;

      const imageUrls = data.map(file => {
        const { data: urlData } = supabase.storage
          .from('gallery-images')
          .getPublicUrl(file.name);
        return urlData.publicUrl;
      });

      setImages(imageUrls);
    } catch (error) {
      console.error('Error loading images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadImages();
    }
  }, [isOpen]);

  const handleDelete = async (imageUrl: string) => {
    const fileName = imageUrl.split('/').pop();
    if (!fileName) return;

    try {
      const { error } = await supabase.storage
        .from('gallery-images')
        .remove([fileName]);

      if (error) throw error;

      await loadImages();
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-amber-600 hover:bg-amber-700 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
        title="Admin Panel"
      >
        <Upload size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6">
          <div className="bg-stone-50 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto p-8 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-stone-600 hover:text-stone-900 text-2xl"
            >
              ×
            </button>

            <h2 className="font-serif text-3xl text-[#4a2020] mb-6">Admin Panel</h2>

            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setShowUpload(true)}
                className="flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded transition-colors"
              >
                <Upload size={20} />
                Upload Images
              </button>
              <button
                onClick={loadImages}
                disabled={loading}
                className="flex items-center gap-2 px-6 py-3 bg-stone-600 hover:bg-stone-700 text-white rounded transition-colors disabled:opacity-50"
              >
                <RefreshCw size={20} className={loading ? 'animate-spin' : ''} />
                Refresh
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((imageUrl, index) => (
                <div key={index} className="relative group">
                  <img
                    src={imageUrl}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => handleDelete(imageUrl)}
                    className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={16} />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity truncate">
                    {imageUrl.split('/').pop()}
                  </div>
                </div>
              ))}
            </div>

            {images.length === 0 && !loading && (
              <div className="text-center py-12 text-stone-400">
                No images uploaded yet
              </div>
            )}
          </div>
        </div>
      )}

      {showUpload && (
        <ImageUpload
          onClose={() => setShowUpload(false)}
          onUploadComplete={() => {
            loadImages();
            setShowUpload(false);
          }}
        />
      )}
    </>
  );
}
