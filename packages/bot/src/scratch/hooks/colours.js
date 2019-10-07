const checkDarkmode = () => {
    const ui_store = localStorage.getItem('ui_store');
    if (ui_store) {
        return ui_store.is_dark_mode_on;
    }
    return false;
};

Blockly.Colours.RootBlock = {
    colour         : '#F2F3F5',
    colourSecondary: '#F2F3F5',
    colourTertiary : '#F2F3F5',
};

if (checkDarkmode()) {              // Dark theme
    Blockly.Colours.Base = {
        colour         : '#4665A0',
        colourSecondary: '#507ED5',
        colourTertiary : '#507ED5',
    };

    Blockly.Colours.Special1 = {
        colour         : '#9E6248',
        colourSecondary: '#D27954',
        colourTertiary : '#D27954',
    };

    Blockly.Colours.Special2 = {
        colour         : '#4F7F7E',
        colourSecondary: '#5DA5A3',
        colourTertiary : '#5DA5A3',
    };

    Blockly.Colours.Special3 = {
        colour         : '#994949',
        colourSecondary: '#CB5555',
        colourTertiary : '#CB5555',
    };
} else {                            // Light theme
    Blockly.Colours.Base = {
        colour         : '#507ED5',
        colourSecondary: '#4665A0',
        colourTertiary : '#4665A0',
    };
    
    Blockly.Colours.Special1 = {
        colour         : '#D27954',
        colourSecondary: '#9E6248',
        colourTertiary : '#9E6248',
    };
    
    Blockly.Colours.Special2 = {
        colour         : '#5DA5A3',
        colourSecondary: '#4F7F7E',
        colourTertiary : '#4F7F7E',
    };
    
    Blockly.Colours.Special3 = {
        colour         : '#CB5555',
        colourSecondary: '#994949',
        colourTertiary : '#994949',
    };
}
