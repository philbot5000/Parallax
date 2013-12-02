Ext.define('MyApp.view.override.MyList', {
    override: 'MyApp.view.MyList',
    config: {
        items: [
            {
                xtype: 'image',
                height: 400,
                itemId: 'image',
                width: '100%',
                // Setting a negative margin allows more of the image to be
                // revealed when a user overscrolls.
                margin: '-100 0 -100 0',
                src: 'beefheart.jpg',
                scrollDock: 'top'
            }
        ]
    }
    
});