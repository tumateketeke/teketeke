suite('Global Tests', function(){
    test('page has a valid title',function(){
        assert(doccument.title && document.title.match(/\S/) && 
            document.title.toUpperCase()!== 'TODO')
        });
    });

