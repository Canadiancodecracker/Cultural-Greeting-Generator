
import React from 'react';
import { FormData } from '../types';
import {
  TYPE_OPTIONS,
  OCCASION_OPTIONS,
  RELATIONSHIP_OPTIONS,
  STYLE_OPTIONS,
  LENGTH_OPTIONS,
} from '../constants';
import { Card } from './ui/Card';
import { Select } from './ui/Select';
import { Textarea } from './ui/Textarea';
import { Button } from './ui/Button';
import { SparklesIcon } from './icons/SparklesIcon';

interface InputFormProps {
  formData: FormData;
  onFormChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export const InputForm: React.FC<InputFormProps> = ({
  formData,
  onFormChange,
  onSubmit,
  isLoading,
}) => {
  return (
    <Card>
      <form onSubmit={onSubmit} className="space-y-6">
        <h2 className="text-xl font-bold text-slate-700">创作您的专属祝词</h2>
        <p className="text-slate-500">
          请选择以下选项，我们的 AI 将为您量身定制最合适的中文表达。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="类型 (Type)"
            name="type"
            value={formData.type}
            onChange={onFormChange}
            options={TYPE_OPTIONS}
          />
          <Select
            label="场合 (Occasion)"
            name="occasion"
            value={formData.occasion}
            onChange={onFormChange}
            options={OCCASION_OPTIONS}
          />
          <Select
            label="对象 (Relationship)"
            name="relationship"
            value={formData.relationship}
            onChange={onFormChange}
            options={RELATIONSHIP_OPTIONS}
          />
          <Select
            label="风格 (Style)"
            name="style"
            value={formData.style}
            onChange={onFormChange}
            options={STYLE_OPTIONS}
          />
        </div>
        <Select
          label="长度 (Length)"
          name="length"
          value={formData.length}
          onChange={onFormChange}
          options={LENGTH_OPTIONS}
        />
        <Textarea
          label="特定要求 (Specific Request)"
          name="specificRequest"
          value={formData.specificRequest}
          onChange={onFormChange}
          placeholder="例如：必须包含“蒸蒸日上”，或提到对方最近晋升的消息"
        />
        <div className="pt-2">
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              '生成中...'
            ) : (
              <>
                <SparklesIcon className="w-5 h-5 mr-2" />
                智能生成
              </>
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
};
