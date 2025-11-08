import { useState } from 'react';
import { Upload, X, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ImageUploadProps {
  onClose: () => void;
  onUploadComplete: () => void;
}

export default function ImageUpload({ onClose, onUploadComplete }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<{ file: string; success: boolean }[]>([]);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setUploadStatus([]);

    const statuses: { file: string; success: boolean }[] = [];

    for (const file of Array.from(files)) {
      try {
        const fileExt = file.name.split('.').pop();
        const fileName = `${file.name}`;
        const filePath = fileName;

        const { error } = await supabase.storage
          .from('gallery-images')
          .upload(filePath, file, {
            upsert: true,
            contentType: file.type,
          });

        if (error) throw error;

        statuses.push({ file: file.name, success: true });
      } catch (error) {
        console.error('Error uploading file:', error);
        statuses.push({ file: file.name, success: false });
      }
    }

    setUploadStatus(statuses);
    setUploading(false);

    if (statuses.every(s => s.success)) {
      setTimeout(() => {
        onUploadComplete();
        onClose();
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6">
      <div className="bg-stone-50 rounded-lg max-w-2xl w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-600 hover:text-stone-900 transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="font-serif text-3xl text-[#4a2020] mb-6">Upload Images</h2>

        <div className="mb-6">
          <p className="text-stone-600 mb-4">
            Upload images for your website. Supported formats: PNG, JPG, JPEG, WebP
          </p>

          <div className="border-2 border-dashed border-stone-300 rounded-lg p-8 text-center hover:border-amber-500 transition-colors">
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload size={48} className="mx-auto mb-4 text-stone-400" />
              <span className="text-stone-600 block mb-2">
                Click to upload or drag and drop
              </span>
              <span className="text-stone-400 text-sm">
                Maximum file size: 10MB
              </span>
              <input
                id="file-upload"
                type="file"
                multiple
                accept="image/png,image/jpeg,image/jpg,image/webp"
                onChange={handleFileUpload}
                className="hidden"
                disabled={uploading}
              />
            </label>
          </div>
        </div>

        {uploading && (
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
            <p className="mt-2 text-stone-600">Uploading...</p>
          </div>
        )}

        {uploadStatus.length > 0 && (
          <div className="space-y-2">
            {uploadStatus.map((status, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 p-3 rounded ${
                  status.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}
              >
                {status.success ? <Check size={20} /> : <X size={20} />}
                <span className="text-sm">{status.file}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
