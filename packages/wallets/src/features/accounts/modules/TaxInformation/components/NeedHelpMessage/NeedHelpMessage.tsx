import React from 'react';
import { Chat } from '@deriv/utils';
import { Localize } from '@deriv-com/translations';
import { InlineMessage, Text } from '@deriv-com/ui';

const NeedHelpMessage = () => {
    const onClickLiveChat = () => Chat.open();

    return (
        <div className='wallets-tax-information__message'>
            <InlineMessage variant='info'>
                <Text align='start' size='xs'>
                    <Localize
                        components={[
                            <button
                                className='wallets-link wallets-link__variant--bold'
                                key={0}
                                onClick={onClickLiveChat}
                            />,
                        ]}
                        i18n_default_text='Need help with tax info? Let us know via <0>live chat</0>.'
                    />
                </Text>
            </InlineMessage>
        </div>
    );
};

export default NeedHelpMessage;
