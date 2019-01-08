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
    $('#example *').removeClass('selected');
    $('#example').removeClass('selected');
}

var traversing = {
    parent: (target) => { $(target).parent().addClass('selected'); },
    parents: (target) => { $(target).parents().addClass('selected'); },
    parentsUntil: (target, el) => { $(target).parentsUntil(el).addClass('selected'); },
    children: (target) => { $(target).children().addClass('selected'); },
    find: (target, el) => { $(target).find(el).addClass('selected'); },
    siblings: (target) => { $(target).siblings().addClass('selected'); },
    next: (target) => { $(target).next().addClass('selected'); },
    nextAll: (target) => { $(target).nextAll().addClass('selected'); },
    nextUntil: (target, el) => { $(target).nextUntil(el).addClass('selected'); },
    first: (target) => { $(target).first().addClass('selected'); },
    last: (target) => { $(target).last().addClass('selected'); },
    eq: (target, el) => { $(target).eq(el).addClass('selected'); },
    not: (target, el) => { $(target).not(el).addClass('selected'); },
    filter: (target, el) => { $(target).filter(el).addClass('selected'); },
}

