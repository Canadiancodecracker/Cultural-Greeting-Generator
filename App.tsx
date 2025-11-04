
import React, { useState } from 'react';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { OutputDisplay } from './components/OutputDisplay';
import { Footer } from './components/Footer';
import { FormData } from './types';
import { generateText } from './services/geminiService';

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    type: '祝词',
    occasion: '新店开业',
    relationship: '重要客户',
    style: '正式庄重',
    length: '一段话',
    specificRequest: '',
  });
  const [generatedText, setGeneratedText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setGeneratedText('');

    try {
      const result = await generateText(formData);
      setGeneratedText(result);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : '发生未知错误，请稍后重试。'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <InputForm
            formData={formData}
            onFormChange={handleFormChange}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
          <OutputDisplay
            generatedText={generatedText}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
