import React, { useState, useEffect } from 'react';
import { Card } from './ui/Card';
import { CopyIcon } from './icons/CopyIcon';
import { CheckIcon } from './icons/CheckIcon';

interface OutputDisplayProps {
  generatedText: string;
  isLoading: boolean;
  error: string | null;
}

const LoadingSkeleton: React.FC = () => (
  <div className="space-y-4 animate-pulse">
    <div className="h-4 bg-slate-200 rounded w-3/4"></div>
    <div className="h-4 bg-slate-200 rounded w-full"></div>
    <div className="h-4 bg-slate-200 rounded w-5/6"></div>
    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
  </div>
);

const exampleWishes = [
  {
    text: '宾客盈门，财源广进，宏图大展，蒸蒸日上！',
    context: '— 祝贺朋友新店开业',
  },
  {
    text: '愿你们永浴爱河，佳偶天成，白头偕老，幸福美满。',
    context: '— 参加婚礼送上祝福',
  },
  {
    text: '生日快乐，我的朋友！愿你新的一岁，笑容常在，好运连连！',
    context: '— 为好朋友庆生',
  },
  {
    text: '师恩如山，铭记于心。祝您桃李满天下，春晖遍四方！',
    context: '— 感激恩师的谆谆教诲',
  },
  {
    text: '值此新春佳节，祝您事业龙腾虎跃，财源滚滚而来，合作愉快，共创辉煌！',
    context: '— 向重要客户致以新年问候',
  },
];

const InitialExamples: React.FC = () => (
    <div className="text-slate-500 h-full flex flex-col animate-fade-in">
        <h3 className="text-base font-semibold text-slate-600 mb-4">您可以尝试生成...</h3>
        <div className="space-y-3">
            {exampleWishes.map((example, index) => (
                <div key={index} className="p-3 bg-white border border-slate-200 rounded-lg text-sm transition-shadow hover:shadow-sm">
                    <p className="font-serif-sc text-slate-700">{example.text}</p>
                    <p className="text-xs text-slate-400 mt-1.5">{example.context}</p>
                </div>
            ))}
        </div>
    </div>
);


export const OutputDisplay: React.FC<OutputDisplayProps> = ({
  generatedText,
  isLoading,
  error,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (generatedText) {
      setIsCopied(false);
    }
  }, [generatedText]);

  const handleCopy = () => {
    if (generatedText) {
      navigator.clipboard.writeText(generatedText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const hasContent = generatedText || isLoading || error;

  return (
    <Card className="min-h-[200px] lg:min-h-full flex flex-col">
       <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-slate-700">生成结果</h2>
            {generatedText && (
                <button
                    onClick={handleCopy}
                    className="flex items-center px-3 py-1.5 text-sm rounded-md transition-colors duration-200 bg-slate-100 hover:bg-slate-200 text-slate-600 disabled:opacity-50"
                    disabled={isCopied}
                >
                    {isCopied ? <CheckIcon className="w-4 h-4 mr-1.5 text-green-600" /> : <CopyIcon className="w-4 h-4 mr-1.5" />}
                    {isCopied ? '已复制' : '复制'}
                </button>
            )}
        </div>
      <div className="flex-grow p-6 bg-slate-100/70 rounded-lg relative overflow-auto">
        {isLoading && <LoadingSkeleton />}
        {error && <p className="text-red-600">{error}</p>}
        {!isLoading && !error && generatedText && (
          <p className="text-lg font-serif-sc whitespace-pre-wrap leading-relaxed text-slate-800">
            {generatedText}
          </p>
        )}
        {!hasContent && <InitialExamples />}
      </div>
    </Card>
  );
};