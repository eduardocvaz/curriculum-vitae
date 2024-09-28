import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
    onLanguageChange: (language: string) => void;
    onDownloadPdf: () => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ onLanguageChange, onDownloadPdf }) => {
    const { t, i18n } = useTranslation();
    const language = i18n.language;
    const defaultValue = language.startsWith('en') ? 'en-Us' : 'pt-Br';

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language).then(r => console.log(r));
        onLanguageChange(language);
    };

    const downloadPdf = () => {
        const fileName = (language.startsWith('en') ? 'en_Us' : 'pt_Br') + '.pdf';
        const filePath = '/pdfs/' + fileName;
        const link = document.createElement('a');
        link.href = filePath;
        link.download = fileName;
        link.click();
        onDownloadPdf();
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: 10,
                right: 10,
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <select
                style={{
                    padding: '10px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    marginRight: '10px',
                    width: '100%', // Tornar o select 100% de largura em telas pequenas
                }}
                onChange={(e) => changeLanguage(e.target.value)}
                value={defaultValue}
            >
                <option value="en-Us">{t('english')}</option>
                <option value="pt-Br">{t('portuguese')}</option>
            </select>

            <button
                style={{
                    padding: '10px',
                    fontSize: '14px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}
                onClick={() => downloadPdf()}
            >
                {t('download')}
            </button>
        </div>
    );
};

export default LanguageSwitcher;
