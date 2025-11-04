import { SelectOption } from './types';

export const TYPE_OPTIONS: SelectOption[] = [
  { value: '祝词', label: '祝词 (Blessing)' },
  { value: '贺词', label: '贺词 (Toast/Speech)' },
  { value: '问候', label: '问候 (Greeting)' },
];

export const OCCASION_OPTIONS: SelectOption[] = [
  { value: '新店开业', label: '新店开业' },
  { value: '婚礼', label: '婚礼' },
  { value: '寿宴', label: '寿宴' },
  { value: '生日', label: '生日' },
  { value: '乔迁之喜', label: '乔迁之喜' },
  { value: '春节', label: '春节' },
  { value: '新年', label: '新年' },
  { value: '中秋节', label: '中秋节' },
  { value: '毕业典礼', label: '毕业典礼' },
  { value: '晋升', label: '晋升' },
  { value: '纪念日', label: '纪念日' },
  { value: '周年庆', label: '周年庆' },
  { value: '日常问候', label: '日常问候' },
];

export const RELATIONSHIP_OPTIONS: SelectOption[] = [
  // Family
  { value: '长辈', label: '长辈' },
  { value: '亲爱的父母', label: '亲爱的父母' },
  { value: '祖父母/外祖父母', label: '祖父母/外祖父母' },
  { value: '亲爱的配偶', label: '亲爱的配偶' },
  { value: '兄弟姐妹', label: '兄弟姐妹' },
  { value: '亲爱的子女', label: '亲爱的子女' },
  // School
  { value: '尊敬的老师', label: '尊敬的老师' },
  { value: '同学/校友', label: '同学/校友' },
  // Workplace
  { value: '领导/上司', label: '领导/上司' },
  { value: '下属/团队成员', label: '下属/团队成员' },
  { value: '普通同事', label: '普通同事' },
  { value: '重要客户', label: '重要客户' },
  { value: '合作伙伴', label: '合作伙伴' },
  // Social
  { value: '好朋友', label: '好朋友' },
  { value: '闺蜜', label: '闺蜜' },
  { value: '兄弟', label: '兄弟' },
  { value: '邻居', label: '邻居' },
];

export const STYLE_OPTIONS: SelectOption[] = [
  { value: '正式庄重', label: '正式庄重' },
  { value: '简洁温馨', label: '简洁温馨' },
  { value: '轻松幽默', label: '轻松幽默' },
  { value: '慷慨激昂', label: '慷慨激昂' },
  { value: '诗意典雅', label: '诗意典雅' },
  { value: '古风雅致', label: '古风雅致' },
  { value: '俏皮可爱', label: '俏皮可爱' },
  { value: '真诚质朴', label: '真诚质朴' },
];

export const LENGTH_OPTIONS: SelectOption[] = [
  { value: '一句成语', label: '一句成语' },
  { value: '20字内', label: '20字内' },
  { value: '一段话', label: '一段话 (约100字)' },
  { value: '300字演讲稿', label: '300字演讲稿' },
];