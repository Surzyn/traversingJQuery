var additionalParamFunctions = ['parentsUntil', 'find', 'nextUntil', 'eq', 'not', 'filter'];

$(document).ready(function () {

    var $select = $('#type');
    for (const key in traversing) {
        $select.append('<option value="' + key + '" name="type" id="type' + key + '">' + key + '</option>');
    }

    $select.change(function () {
        var needAdditional = additionalParamFunctions.indexOf($(this).val()) !== -1;
        clearBorder();
        if (!needAdditional) {
            $('#noAditional').removeClass('hidden');
            $('#additional').addClass('hidden');
            $('#additional').val('');
            changeBorder();
        }
        else {
            $('#noAditional').addClass('hidden');
            $('#additional').removeClass('hidden');
        }
    });

    $('#target').on('keyup', function () {
        changeBorder();
    })

    $('#additional input').on('keyup', function () {
        changeBorder();
    })
});


function changeBorder() {
    clearBorder();
    var name = $('#type').val();
    var target = $('#target').val();

    var el = $('#additional input').val();
    traversing[name](target, el);
}


function clearBorder() {
    $('#example *').css({ 'border-color': 'black' });
    $('#example').css({ 'border': 'lime 1px solid' });
}

var traversing = {
    parent: (target) => { $(target).parent().css({ 'border-color': 'red' }); },
    parents: (target) => { $(target).parents().css({ 'border-color': 'red' }); },
    parentsUntil: (target, el) => { $(target).parentsUntil(el).css({ 'border-color': 'red' }); },
    children: (target) => { $(target).children().css({ 'border-color': 'red' }); },
    find: (target, el) => { $(target).find(el).css({ 'border-color': 'red' }); },
    siblings: (target) => { $(target).siblings().css({ 'border-color': 'red' }); },
    next: (target) => { $(target).next().css({ 'border-color': 'red' }); },
    nextAll: (target) => { $(target).nextAll().css({ 'border-color': 'red' }); },
    nextUntil: (target, el) => { $(target).nextUntil(el).css({ 'border-color': 'red' }); },
    first: (target) => { $(target).first().css({ 'border-color': 'red' }); },
    last: (target) => { $(target).last().css({ 'border-color': 'red' }); },
    eq: (target, el) => { $(target).eq(el).css({ 'border-color': 'red' }); },
    not: (target, el) => { $(target).not(el).css({ 'border-color': 'red' }); },
    filter: (target, el) => { $(target).filter(el).css({ 'border-color': 'red' }); },
}