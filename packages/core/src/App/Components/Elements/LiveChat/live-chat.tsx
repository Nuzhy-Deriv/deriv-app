import { Icon, Popover, Text } from '@deriv/components';
import { useIsLiveChatWidgetAvailable } from '@deriv/hooks';
import { observer, useStore } from '@deriv/stores';
import { Localize } from '@deriv/translations';
import { Chat } from '@deriv/utils';
import { useDevice } from '@deriv-com/ui';

import useFreshChat from './use-freshchat';
import useIntercom from './use-intercom';

const LiveChat = observer(({ showPopover }: { showPopover?: boolean }) => {
    const { client } = useStore();
    const { loginid, accounts } = client;
    const { isDesktop } = useDevice();

    const active_account = accounts?.[loginid ?? ''];
    const token = active_account ? active_account.token : null;

    const { is_livechat_available } = useIsLiveChatWidgetAvailable();

    const freshChat = useFreshChat(token);
    const intercom = useIntercom(token);

    // eslint-disable-next-line no-nested-ternary
    const chat = freshChat.flag ? freshChat : intercom.flag ? intercom : null;

    const isFreshchatEnabledButNotReady = (freshChat.flag && !chat?.is_ready) || (intercom.flag && !chat?.is_ready);

    const isNeitherChatNorLiveChatAvailable = !is_livechat_available && !freshChat.flag && !intercom.flag;

    if (isFreshchatEnabledButNotReady || isNeitherChatNorLiveChatAvailable) {
        return null;
    }

    // Quick fix for making sure livechat won't popup if feature flag is late to enable.
    // We will add a refactor after this
    setInterval(() => {
        if (freshChat.flag || intercom.flag) {
            window.LiveChatWidget?.call('destroy');
        }
    }, 10);

    const liveChatClickHandler = () => {
        Chat.open();
    };

    if (isDesktop)
        return (
            <div onKeyDown={liveChatClickHandler} onClick={liveChatClickHandler}>
                {showPopover ? (
                    <Popover
                        className='footer__link'
                        classNameBubble='help-centre__tooltip'
                        alignment='top'
                        message={<Localize i18n_default_text='Live chat' />}
                        zIndex='9999'
                    >
                        <Icon icon='IcLiveChat' className='footer__icon gtm-deriv-livechat' />
                    </Popover>
                ) : (
                    <div className='footer__link'>
                        <Icon icon='IcLiveChat' className='footer__icon gtm-deriv-livechat' />
                    </div>
                )}
            </div>
        );

    return (
        <div className='livechat gtm-deriv-livechat' onKeyDown={liveChatClickHandler} onClick={liveChatClickHandler}>
            <div className='livechat__icon-wrapper'>
                <Icon icon='IcLiveChat' className='livechat__icon' />
            </div>
            <Text size='xs'>
                <Localize i18n_default_text='Live chat' />
            </Text>
        </div>
    );
});

export default LiveChat;
