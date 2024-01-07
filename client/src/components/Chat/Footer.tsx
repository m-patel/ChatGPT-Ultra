import { useGetStartupConfig } from 'librechat-data-provider/react-query';
import { useLocalize } from '~/hooks';

export default function Footer() {
  const { data: config } = useGetStartupConfig();
  const localize = useLocalize();
  return (
    <div className="relative px-2 py-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px]">
      <span>
        {typeof config?.customFooter === 'string' ? (
          config.customFooter
        ) : (
          <>
            <span>
              {config?.appTitle || 'LibreChat'} v1.0
            </span>
            {' - '} {localize('com_ui_new_footer')}
          </>
        )}
      </span>
    </div>
  );
}
