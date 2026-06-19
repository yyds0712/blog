export const languages = {
	en: 'English',
	zh: '中文',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export const translations = {
	en: {
		home: 'Home',
		blog: 'Blog',
		about: 'About',
		lastUpdatedOn: 'Last updated on',
	},
	zh: {
		home: '首页',
		blog: '博客',
		about: '关于',
		lastUpdatedOn: '最后更新于',
	},
} as const;

export function useTranslations(lang: Language) {
	return translations[lang];
}

export function getLangFromUrl(url: URL): Language {
	const [, lang] = url.pathname.split('/');
	if (lang in languages) return lang as Language;
	return defaultLang;
}
