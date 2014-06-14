window.onload = function () {
    var items = [{
        value: 1,
        text: 'One'
    }, {
        value: 2,
        text: 'Two'
    }, {
        value: 3,
        text: 'Three'
    }, {
        value: 4,
        text: 'Four'
    }, {
        value: 5,
        text: 'Five'
    }, {
        value: 6,
        text: 'Six'
    }, {
        value: 7,
        text: 'Seven'
    }];
    
    var selectTemplateString = document.getElementById('select-template').innerHTML;
    var selectTemplate = Handlebars.compile(selectTemplateString);

    var selectHTML = selectTemplate({ items: items });

    document.getElementById('wrapper').innerHTML = selectHTML;
};