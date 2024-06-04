// src/components/EmbedStackBlitz.tsx
import React, { useEffect, useRef } from 'react';
import sdk from '@stackblitz/sdk';

interface EmbedStackBlitzProps {
    projectId: string;
    aTagLink: string;
    openFile?: string;
    theme?: 'light' | 'dark';
    hideNavigation?: boolean;
}

const EmbedStackBlitz: React.FC<EmbedStackBlitzProps> = ({
    projectId,
    aTagLink,
    openFile,
    theme = 'dark',
    hideNavigation = true,
}) => {
    const embedRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (embedRef.current) {
            const embedOptions: any = {
                forceEmbedLayout: true,
                theme: theme,
                hideNavigation: hideNavigation,
            };
            
            if (openFile) {
                embedOptions.openFile = openFile;
            }

            sdk.embedProjectId(embedRef.current, projectId, embedOptions);
        }
    }, [projectId, openFile, theme, hideNavigation]);

    return (
        <div className="mb-5">
            <div ref={embedRef} className="h-[68dvh] w-full" />
            <a
                href={aTagLink}
                className="text-orange-400 hover:text-orange-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
            >
                Open on StackBlitz
            </a>
        </div>
    );
};

export default EmbedStackBlitz;
